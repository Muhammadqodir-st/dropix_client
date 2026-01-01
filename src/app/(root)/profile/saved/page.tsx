"use client"

// redux
import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"

// components
import GetMySaveds from "../components/GetMySaveds"


export default function Page() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    return (
        <div className="px-4 py-8">
            {user && <GetMySaveds id={user.id} />}
        </div>
    )
}