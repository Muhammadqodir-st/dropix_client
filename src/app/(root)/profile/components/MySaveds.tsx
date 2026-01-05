import {  myProfile } from "@/api/services/user"
import { useQuery } from "@tanstack/react-query"
import MySaved from "./MySaved"
import { SaveProp } from "@/types/save"

export default function MySaveds() {

    const { data, isPending, error } = useQuery({
        queryKey: ['saved'],
        queryFn: async () => {
            return await myProfile()
        }
    })


    if (isPending) {
        return (
            <div className="w-full grid grid-cols-3 gap-1">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-800 animate-pulse rounded" />
                ))}
            </div>
        )
    }


    return (
        <div className={`${data?.user.saves.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-3 gap-1'}`}>
            {data?.user.saves.map((i: SaveProp) => (
                <MySaved key={i.id} item={i} />
            ))}
            {data?.user.saves.length === 0 &&
                <p>No Saved yet</p>
            }
        </div>
    )
}