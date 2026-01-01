
// api server
import { getByIdUser } from "@/api/services/user"

// components
import PostLoader from "@/components/loaders/PostLoader"
import Post from "@/components/Post"

// type
import { PostProp } from "@/types/post"

// tanstack
import { useQuery } from "@tanstack/react-query"

export default function GetMyPosts({ id }: { id: string }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['myposts', id],
        queryFn: async () => {
            return await getByIdUser({ id })
        }
    })

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
        <ul className={`${data?.user.posts.length === 0 ? 'flex items-center justify-center' : 'w-full columns-2 sm:columns-3 md:columns-4 lg:columns-4 gap-3'}`}>
            {data?.user.posts.map((item: PostProp) => (
                <Post key={item.id} item={item} />
            ))}
            {data?.user.posts.length === 0 &&
                <p>No Posts yet</p>
            }
        </ul>
    )
}