"use client"

import { getAll } from "@/api/services/post"
import { PostProp } from "@/types/post";
import { useQuery } from "@tanstack/react-query"
import Post from "./Post";
import PostLoader from "./loaders/PostLoader";

export default function Posts() {
    const { data, isPending, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            return await getAll()
        }
    });

    if (isPending) {
        return (
            <div className="w-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
                {Array.from({ length: 10 }).map((p, i) => (
                    <PostLoader key={i} />
                ))}
            </div>
        )
    }

    return (
        <ul className="w-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
            {data?.map((item: PostProp) => (
                <Post key={item.id} item={item} />
            ))}
        </ul>
    )
}