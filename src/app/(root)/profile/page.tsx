"use client"

import { RootState } from "@/lib/store"
import Image from "next/image"
import { useSelector } from "react-redux"

export default function Profile() {

    // user
    const user = useSelector((state: RootState) => state.user.data)


    return (
        <div className="w-full h-full p-4">
            
        </div>
    )
}