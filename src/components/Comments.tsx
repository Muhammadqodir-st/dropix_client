import { getByIdComment } from "@/api/services/comment"
import { useQuery } from "@tanstack/react-query"
import Comment from "./Comment"
import { CommentProp } from "@/types/comment"
import CommentLoader from "./loaders/CommentLoader"

export default function Comments({ id }: { id: string }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['comment', id],
        queryFn: () => getByIdComment({ id })
    })

    if (isPending) {
        return (
            <div className="h-71 flex flex-col gap-5 overflow-y-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                    <CommentLoader key={i} />
                ))}
            </div>
        )
    }

    return (
        <div className={`${data.comment.length !== 0 && 'flex flex-col gap-4 overflow-y-auto'} h-71`}>
            {data?.comment.map((i: CommentProp) => (
                <Comment key={i.id} item={i} />
            ))}
            {data?.comment.length === 0 && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">No comments yet.</p>
                    <p className="">Start the conversation.</p>
                </div>
            )}
        </div>
    )
}