
// type
import { PostProp } from "@/types/post";

// lucide
import { Bookmark, Ellipsis, MessageCircle, Send } from "lucide-react";

// next
import Image from "next/image";

// components
import SinglePostImage from "./SinglePost-image";
import LikeButton from "@/app/(root)/post/[id]/components/LikeButton";


export default function SinglePost({ item }: { item: PostProp }) {
    return (
        <div>
            <div className="w-120 flex flex-col gap-2 mb-5 overflow-hidden">
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
                    <SinglePostImage item={item} />
                </div>

                {/* bottom */}
                <div className="w-full flex flex-col gap-3 px-1">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <LikeButton postId={item.id} likes={item.likes} />
                            <button><MessageCircle size={26} /></button>
                            <button><Send size={26} /></button>
                        </div>
                        <button><Bookmark size={26} /></button>
                    </div>
                    <p className="w-full text-sm">
                        <span className="font-bold cursor-pointer pr-1">{item.auther.name}</span>
                        {item.title}
                    </p>
                </div>
            </div>
        </div>
    )
}