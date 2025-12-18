"use client"

// type
import { PostProp } from "@/types/post";

// lucide
import { Bookmark, Ellipsis, MessageCircle, Send, X } from "lucide-react";

// next
import Image from "next/image";

// components
import SinglePostImage from "./SinglePost-image";
import LikeButton from "@/components/LikeButton";
import { useRouter } from "next/navigation";
import Comments from "@/components/Comments";
import AddComment from "@/components/AddComment";


export default function SinglePost({ item }: { item: PostProp }) {

    const router = useRouter()

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-3">
            <button onClick={() => router.back()} className="absolute top-4 right-4 cursor-pointer">
                <X size={28} />
            </button>
            <div className="max-w-300 h-[90%] flex rounded-xl bg-black overflow-hidden">
                <div className="my-auto">
                    <SinglePostImage item={item} />
                </div>
                <div className="w-200 bg-zinc-900 overflow-hidden">
                    {/* header */}
                    <div className="flex items-center justify-between border-b p-4">
                        {/* auther */}
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image className="w-8 h-8 rounded-full" src={item.auther.avatar} width={100} height={100} alt={item.auther.name} />
                            <p className="text-sm font-semibold">{item.auther.name}</p>
                        </div>

                        {/* follow and details */}
                        <button className="cursor-pointer">
                            <Ellipsis />
                        </button>
                    </div>

                    {/* body */}
                    <div className="h-[80%] p-4 overflow-hidden">
                        <Comments item={item} />
                    </div>

                    {/* footer */}
                    <div className="w-full">
                        <div className="w-full flex items-center justify-between px-4 py-3 border">
                            <div className="flex items-center gap-5">
                                {/* <LikeButton postId={item.id} likes={item.likes} /> */}
                                <button><MessageCircle size={26} /></button>
                                <button><Send size={26} /></button>
                            </div>
                            <button><Bookmark size={26} /></button>
                        </div>

                        {/* add comment */}
                        <div className="p-4">
                            <AddComment id={item.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}