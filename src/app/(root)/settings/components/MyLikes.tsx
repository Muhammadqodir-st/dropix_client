import { myProfile } from "@/api/services/user"
import { LikeProp } from "@/types/like"
import { useQuery } from "@tanstack/react-query"
import MyLike from "./MyLike"

export default function MyLikes() {

    const { data, isPending, error } = useQuery({
        queryKey: ['mylikes'],
        queryFn: async () => {
            return await myProfile()
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
        <div className={`${data?.user.likes.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-3 gap-1'}`}>
            {data?.user.likes.map((i: LikeProp) => (
                <MyLike key={i.id} item={i.post} />
            ))}
            {data?.user.likes.length === 0 &&
                <p>No Likes yet</p>
            }
        </div>
    )
}