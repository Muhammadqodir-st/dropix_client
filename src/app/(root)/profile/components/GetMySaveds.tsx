import { getByIdUser } from "@/api/services/user"
import PostLoader from "@/components/loaders/PostLoader"
import Post from "@/components/Post"
import { SaveProp } from "@/types/save"
import { useQuery } from "@tanstack/react-query"

export default function GetMySaveds({ id }: { id: string }) {

    const { data, isPending, error } = useQuery({
        queryKey: ['saved', id],
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
        <ul className={`${data?.user.saves.length === 0 ? 'flex items-center justify-center' : 'w-full columns-2 sm:columns-3 md:columns-4 lg:columns-4 gap-3'}`}>
            {data?.user.saves.map((i: SaveProp) => (
                <Post key={i.id} item={i.post} />
            ))}
            {data?.user.saves.length === 0 &&
                <p>No Saved yet</p>
            }
        </ul>
    )
}