import { getByIdUser } from "@/api/services/user"
import { PostProp } from "@/types/post"
import { useQuery } from "@tanstack/react-query"
import Post from "./Post"

export default function MyPosts({ id }: { id: string }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['myposts', id],
        queryFn: async () => {
            return await getByIdUser({ id })
        }
    })

    if (isPending) {
        return (
            <div className="w-full grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded" />
                ))}
            </div>
        )
    }

    return (
        <div>
            {data?.user.posts.map((i: PostProp) => (
                <Post key={i.id} item={i} />
            ))}
        </div>
    )
}