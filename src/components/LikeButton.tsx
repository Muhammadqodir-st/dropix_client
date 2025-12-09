import { LikeProp } from "@/types/like";
import { Heart } from "lucide-react";

export default function LikeButton({ id, likes }: { id: string, likes: LikeProp[] }) {
    return (
        <button className="flex items-center gap-2">
            <Heart size={26} />
            <p className="font-semibold">{likes.length}</p>
        </button>
    )
}