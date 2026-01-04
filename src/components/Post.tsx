// next
import Image from "next/image";
import Link from "next/link";

// post prop
import { PostProp } from "@/types/post";

// lucide icons
import { Ellipsis, Send } from "lucide-react";

// components
import PostImage from "./PostImage";
import LikeButton from "./LikeButton";
import SaveButton from "./SaveButton";
import CommentButton from "./CommentButton";
import EllipsisButton from "./EllipsisButton";

export default function Post({ item }: { item: PostProp }) {
    return (
        <div className=" relative overflow-hidden rounded-4xl group mb-5">
            {/* background */}
            <PostImage item={item} />

            <div className="absolute inset-0 bg-black/25 flex flex-col justify-between">

                {/* TOP */}
                <div className="flex items-start justify-between p-3">

                    <Link href={`/user/${item.auther.id}`} className="flex items-center gap-2 cursor-pointer">
                        <Image className="w-8 h-8 rounded-full" src={item.auther.avatar} alt={item.auther.name} width={40} height={40} />
                        <p className="text-sm font-semibold hover:underline">
                            {item.auther.name}
                        </p>
                    </Link>

                    <div className="flex flex-col gap-4 backdrop-blur-md bg-white/10 p-2 rounded-4xl">
                        <div className="hover:scale-110 transition cursor-pointer">
                            <LikeButton postId={item.id} likes={item.likes} />
                        </div>
                        <div className="hover:scale-110 transition cursor-pointer">
                            <CommentButton item={item} />
                        </div>
                        <div className="hover:scale-110 transition cursor-pointer">
                            <SaveButton item={item} saves={item.saves} />
                        </div>
                        <button className="hover:scale-110 transition cursor-pointer">
                            <Send size={22} />
                        </button>
                        <div className="hover:scale-110 transition cursor-pointer">
                            <EllipsisButton item={item} />
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="p-3">
                    <p className="text-sm opacity-90">
                        {item.title.length > 55 ? item.title.slice(0, 55) + '. . .' : item.title}
                    </p>
                </div>
            </div>
        </div>
    )
}   