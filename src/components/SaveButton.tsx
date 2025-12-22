import { createSave } from "@/api/services/save";
import { RootState } from "@/lib/store";
import { PostProp } from "@/types/post";
import { SaveProp } from "@/types/save";
import { useMutation } from "@tanstack/react-query";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SaveButton({ item, saves }: { item: PostProp, saves: SaveProp[] }) {

    const user = useSelector((state: RootState) => state.user.data)
    const saved = saves.some((i) => i.userId === user?.id)

    const [isSaved, setIsSaved] = useState(saved)

    const saveMutation = useMutation({
        mutationFn: () => createSave({ postId: item.id }),
        onMutate: async () => {
            setIsSaved(prev => !prev)
        },
        onError: () => {
            setIsSaved(saved)
        }
    })

    return (
        <button className="cursor-pointer" onClick={() => saveMutation.mutate()}>
            <Bookmark className={`${isSaved ? 'fill-white' : ''}`} size={22} />
        </button>
    )
}