"use client"

import { RootState } from "@/lib/store"
import Image from "next/image"
import { useSelector } from "react-redux"

export default function Suggested() {

    // user
    const user = useSelector((state: RootState) => state.user.data)
    return (
        <div className="w-80 ml-20">
            <div className="flex items-center gap-2">
                <Image className="w-10 h-10 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                <p className="font-semibold">{user ? user.name : 'username'}</p>
            </div>
        </div>
    )
}