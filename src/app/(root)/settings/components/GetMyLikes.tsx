import { myProfile } from "@/api/services/user"
import PostLoader from "@/components/loaders/PostLoader"
import Post from "@/components/Post"
import { LikeProp } from "@/types/like"
import { useQuery } from "@tanstack/react-query"

export default function GetMyLikes() {

    const { data, isPending, error } = useQuery({
        queryKey: ['mylikes'],
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
        <ul className={`${data?.user.likes.length === 0 ? 'flex items-center justify-center' : 'w-full columns-2 gap-3'}`}>
            {data?.user.likes.map((item: LikeProp) => (
                <Post key={item.id} item={item.post} />
            ))}
            {data?.user.likes.length === 0 &&
                <p>No Likes yet</p>
            }
        </ul>
    )
}