"use client"

import { getByIdComment } from "@/api/services/comment"
import { CommentProp } from "@/types/comment"
import { PostProp } from "@/types/post"
import { useQuery } from "@tanstack/react-query"
import Comment from "./Comment"
import CommentLoader from "@/components/loaders/CommentLoader"

export default function Comments({ item }: { item: PostProp }) {

    const { data, isPending, error } = useQuery({
        queryKey: ["comment"],
        queryFn: async () => {
            return getByIdComment({ id: item.id })
        }
    })

    if (isPending) {
        return (
            <div className="max-h-full flex flex-col gap-7 overflow-y-auto">
                {Array.from({ length: 12 }).map((p, i) => (
                    <CommentLoader key={i} />
                ))}
            </div>
        )
    }

    return (
        <div className="max-h-full flex flex-col gap-6 overflow-y-auto">
            {data?.comment.length !== 0 ? (
                data?.comment.map((item: CommentProp) => (
                    <Comment key={item.id} item={item} />
                ))
            ) : (
                <div>
                    no comment
                </div>
            )}
        </div>
    )
}