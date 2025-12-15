// next
import Image from "next/image";

// post prop
import { PostProp } from "@/types/post";

// lucide icons
import { Ellipsis } from "lucide-react";
import PostImage from "./PostImage";

export default function Post({ item }: { item: PostProp }) {
    return (
        <div className="flex flex-col gap-2 mb-5 overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-1">
                {/* auther */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <Image className="w-8 h-8 rounded-full" src={item.auther.avatar} width={100} height={100} alt={item.auther.name} />
                    <p className="text-sm font-semibold">{item.auther.name}</p>
                </div>

                {/* follow and details */}
                <button className="cursor-pointer">
                    <Ellipsis />
                </button>
            </div>

            {/* body */}
            <div className="w-full rounded-lg bg-black overflow-hidden">
                <PostImage item={item} />
            </div>

            {/* bottom */}
            <div className="w-full px-1">
                <p className="w-full text-sm">
                    <span className="font-bold cursor-pointer pr-1">{item.auther.name}</span>
                    {item.title}
                </p>
            </div>
        </div>
    )
}   