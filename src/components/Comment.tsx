import { timeAgo } from "@/functions/time.functions";
import { CommentProp } from "@/types/comment";
import Image from "next/image";

export default function Comment({ item }: { item: CommentProp }) {
    return (
        <div className="flex gap-2">
            <Image className="w-7 h-7 rounded-full" src={item.user.avatar} alt={item.user.name} width={100} height={100} />
            <div className="flex flex-col">
                <p className="text-sm"><span className="text-sm font-semibold cursor-pointer hover:underline">{item.user.name}</span> • {timeAgo(item.createdAt)}</p>
                <p className="text-sm">{item.text}</p>
            </div>
        </div>
    )
}