"use client"

// redux
import { useSelector } from "react-redux";

// lucide react
import { Heart } from "lucide-react";

// type
import { LikeProp } from "@/types/like";
import { RootState } from "@/lib/store";
import { useMutation } from "@tanstack/react-query";
import { createNewLike } from "@/api/services/like";
import toast from "react-hot-toast";


export default function LikeButton({ postId, likes }: { postId: string, likes: LikeProp[] }) {

    // user
    const user = useSelector((state: RootState) => state.user.data);
    const liked = likes.some((i) => i.userId === user?.id)

    // mutation
    const likeMutation = useMutation({
        mutationFn: async () => {
            return await createNewLike({ postId })
        },
        onSuccess: (res: { message: string }) => {
            toast.success(res.message)
        },
        onError: (err: { message: string }) => {
            toast.error(err.message)
        }
    })

    return (
        <button onClick={() => likeMutation.mutateAsync()} className="flex items-center gap-2">
            <Heart size={26} className={`${liked ? 'text-red-500' : ''}`} />
            <p className="font-semibold">{likes.length}</p>
        </button>
    )
}