"use client"

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

// lucide react
import { Heart } from "lucide-react";

// type
import { LikeProp } from "@/types/like";

// tanstack
import { useMutation } from "@tanstack/react-query";

// service
import { createNewLike } from "@/api/services/like";

// react
import { useState } from "react";


export default function LikeButton({ postId, likes }: { postId: string, likes: LikeProp[] }) {

    // user
    const user = useSelector((state: RootState) => state.user.data);
    const liked = likes.some((i) => i.userId === user?.id)

    // state
    const [isLiked, setIsLiked] = useState(liked)
    const [likesCount, setLikesCount] = useState(likes.length)


    // mutation
    const likeMutation = useMutation({
        mutationFn: () => createNewLike({ postId }),
        onMutate: async () => {
            setIsLiked(prev => !prev)
            setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
        },
        onError: () => {
            setIsLiked(liked)
            setLikesCount(likes.length)
        }
    })

    return (
        <button onClick={() => likeMutation.mutate()} className="flex flex-col items-center">
            <Heart size={23} className={`transition-colors ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
            <p className={`font-semibold text-sm ${likesCount === 0 && 'hidden'}`}>{likesCount > 0 && likesCount}</p>
        </button>
    )
}