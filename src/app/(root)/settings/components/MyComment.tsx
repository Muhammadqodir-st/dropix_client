import { timeAgo } from "@/functions/time.function";
import { CommentProp } from "@/types/comment";
import Image from "next/image";
import MyCommentPostImage from "./MyCommenPostImage";
import Link from "next/link";

export default function MyComment({ item }: { item: CommentProp }) {
    return (
        <div className="w-full h-25 flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition">
            {/* left accent */}
            <div className="w-1 bg-linear-to-b from-indigo-500 to-purple-600" />

            {/* content */}
            <div className="flex-1 p-4">
                <div className="flex items-start gap-3">
                    {/* avatar */}
                    <Image
                        src={item.user.avatar}
                        alt={item.user.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-800"
                    />

                    {/* text */}
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-300">
                            <span className="font-semibold text-white hover:underline cursor-pointer">
                                {item.user.name}
                            </span>
                            <span className="mx-1 text-gray-500">•</span>
                            <span className="text-xs text-gray-400">
                                {timeAgo(item.createdAt)}
                            </span>
                        </p>

                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">
                            {item.text}
                        </p>
                    </div>
                </div>
            </div>

            {/* post image */}
            <Link href={'/settings/comments/post'} className="w-24 relative shrink-0 group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition z-10" />
                <MyCommentPostImage image={item.post.image} />
            </Link>
        </div>
    )
}