// next
import Image from "next/image";
import Link from "next/link";

// post prop
import { PostProp } from "@/types/post";

// lucide icons
import { Bookmark, MessageCircle, Send } from "lucide-react";
import PostImage from "./PostImage";
import LikeButton from "./LikeButton";

export default function Post({ item }: { item: PostProp }) {
    return (
        <div className="w-90 h-90 relative overflow-hidden rounded-4xl group">
            {/* background */}
            <PostImage item={item} />

            <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] flex flex-col justify-between hover:backdrop-blur-none">

                {/* TOP */}
                <div className="flex items-start justify-between p-3">

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image className="w-8 h-8 rounded-full" src={item.auther.avatar} alt={item.auther.name} width={40} height={40} />
                        <p className="text-sm font-semibold hover:underline">
                            {item.auther.name}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 backdrop-blur-md bg-white/10 p-2 rounded-4xl">
                        <div className="hover:scale-110 transition cursor-pointer">
                            <LikeButton postId={item.id} likes={item.likes} />
                        </div>
                        <button className="hover:scale-110 transition cursor-pointer">
                            <MessageCircle size={23} />
                        </button>
                        <button className="hover:scale-110 transition cursor-pointer">
                            <Bookmark size={23} />
                        </button>
                        <button className="hover:scale-110 transition cursor-pointer">
                            <Send size={23} />
                        </button>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="p-4">
                    <p className="text-sm opacity-90 mb-3">
                        {item.title}
                    </p>

                    <div className="flex gap-2">
                        <button className="flex-1 py-2 rounded-full text-sm bg-blue-700 hover:bg-blue-800 cursor-pointer transition">
                            Follow
                        </button>
                        <button className="flex-1 py-2 rounded-full text-sm bg-white/20 hover:bg-white/30 cursor-pointer transition">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}   