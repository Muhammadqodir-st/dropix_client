"use client"

import { getAll } from "@/api/services/post"
import { PostProp } from "@/types/post";
import { useQuery } from "@tanstack/react-query"
import Post from "./Post";

export default function Posts() {
    const { data, isPending, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            return await getAll()
        }
    });

    return (
        <ul>
            {data?.map((item: PostProp) => (
                <Post key={item.id} item={item} />
            ))}
        </ul>
    )
}