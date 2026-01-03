import { myProfile } from "@/api/services/user"
import PostLoader from "@/components/loaders/PostLoader"
import Post from "@/components/Post"
import { CommentProp } from "@/types/comment"
import { useQuery } from "@tanstack/react-query"

export default function GetMyCommentsPost() {

    const { data, isPending, error } = useQuery({
        queryKey: ['mycomments'],
        queryFn: async () => {
            return await myProfile()
        }
    })

    if (isPending) {
        return (
            <div className="w-full columns-2">
                {Array.from({ length: 4 }).map((p, i) => (
                    <PostLoader key={i} />
                ))}
            </div>
        )
    }

    return (
        <ul className={`${data?.user.comments.length === 0 ? 'flex items-center justify-center' : 'w-full columns-2 gap-3'}`}>
            {data?.user.comments.map((item: CommentProp) => (
                <Post key={item.id} item={item.post} />
            ))}
            {data?.user.comments.length === 0 &&
                <p>No Comments yet</p>
            }
        </ul>
    )
}