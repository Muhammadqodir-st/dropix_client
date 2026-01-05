"use client"

import Post from "@/components/Post";
import { PostProp } from "@/types/post";

export default function GetUserPosts({ posts }: { posts: PostProp[] }) {
    return (
        <ul className={`${posts.length === 0 ? 'flex items-center justify-center' : 'w-full columns-2 gap-3'}`}>
            {posts.map((item: PostProp) => (
                <Post key={item.id} item={item} />
            ))}
            {posts.length === 0 &&
                <p>No Posts yet</p>
            }
        </ul>
    )
}