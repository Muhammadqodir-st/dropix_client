import { getByIdComment } from "@/api/services/comment"
import { useQuery } from "@tanstack/react-query"
import Comment from "./Comment"
import { CommentProp } from "@/types/comment"

export default function Comments({ id }: { id: string }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['comment', id],
        queryFn: () => getByIdComment({ id })
    })

    if (isPending) {
        return <p>salom</p>
    }

    return (
        <div className={`${data.comment.length !== 0 && 'flex flex-col gap-4 max-h-71 overflow-y-auto'} `}>
            {data?.comment.map((i: CommentProp) => (
                <Comment key={i.id} item={i} />
            ))}
        </div>
    )
}