import { myProfile } from "@/api/services/user"
import { CommentProp } from "@/types/comment"
import { useQuery } from "@tanstack/react-query"
import MyComment from "./MyComment"
import MyCommentsLoader from "@/components/loaders/MyCommentsLoader"

export default function MyComments() {

    const { data, isPending, error } = useQuery({
        queryKey: ['mycomments'],
        queryFn: async () => {
            return await myProfile()
        }
    })

    if (isPending) {
        return (
            <div className="flex flex-col gap-3">
                {[...Array(5)].map((_, i) => (
                    <MyCommentsLoader key={i} />
                ))}
            </div>
        )
    }


    return (
        <div className={`${data?.user.comments.length === 0 ? '' : 'flex flex-col gap-3'}`}>
            {data?.user.comments.map((i: CommentProp) => (
                <MyComment key={i.id} item={i} />
            ))}
            {data?.user.comments.length === 0 &&
                <p>No Comments yet</p>
            }
        </div>
    )
}