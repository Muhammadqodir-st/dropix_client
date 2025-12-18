import { CommentProp } from "@/types/comment";
import { PostProp } from "@/types/post";
import Image from "next/image";

export default function Comment({ item }: { item: CommentProp }) {
    return (
        <div className="flex items-start gap-1">
            <Image className="w-7 h-7 rounded-full cursor-pointer" src={item.user.avatar} alt={item.user.name} width={100} height={100} />
            <p className="max-w-[90%] text-sm wrap-break-word whitespace-pre-wrap">
                <span className="font-bold cursor-pointer pr-1 hover:underline">{item.user.name}</span>
                {item.text}
            </p>
        </div>
    )
}