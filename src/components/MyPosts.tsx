import { getByIdUser } from "@/api/services/user"
import { PostProp } from "@/types/post"
import { useQuery } from "@tanstack/react-query"
import Post from "./Post"
import MyPost from "./MyPost"

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
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-neutral-800 animate-pulse rounded" />
                ))}
            </div>
        )
    }

    return (
        <div className={`${data?.user.posts.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-3 gap-1'}`}>
            {data?.user.posts.map((i: PostProp) => (
                <MyPost key={i.id} item={i} />
            ))}
            {data?.user.posts.length === 0 &&
                <p>No Posts yet</p>
            }
        </div>
    )
};