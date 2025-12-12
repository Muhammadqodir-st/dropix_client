// next
import Image from "next/image";

// post prop
import { PostProp } from "@/types/post";

// lucide icons
import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import LikeButton from "./LikeButton";
import PostImage from "./PostImage";

export default function Post({ item }: { item: PostProp }) {
    return (
        <div className="w-115 flex flex-col gap-2">
            {/* header */}
            <div className="flex items-center justify-between px-1">
                {/* auther */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <Image className="w-9 h-9 rounded-full" src={item.auther.avatar} width={100} height={100} alt={item.auther.name} />
                    <p className="text-sm font-semibold">{item.auther.name}</p>
                </div>

                {/* follow and details */}
                <div className="flex items-center gap-2">
                    <button>follow</button>
                    <button>
                        <Ellipsis />
                    </button>
                </div>
            </div>

            {/* body */}
            <div className="w-full rounded-lg bg-black overflow-hidden">
                <PostImage item={item} />
            </div>

            {/* bottom */}
            <div className="w-full flex flex-col gap-3 px-1">
                {/* top */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LikeButton postId={item.id} likes={item.likes} />
                        <button><MessageCircle size={26} /></button>
                        <button><Send size={26} /></button>
                    </div>
                    <button><Bookmark size={26} /></button>
                </div>

                {/* bottom */}
                <p className="w-full text-sm">
                    <span className="font-bold cursor-pointer pr-1">{item.auther.name}</span>
                    {item.title}
                </p>
            </div>
        </div>
    )
}   