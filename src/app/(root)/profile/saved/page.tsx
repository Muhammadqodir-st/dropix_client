"use client"

import { useRouter } from "next/navigation"
// components
import GetMySaveds from "../components/GetMySaveds"
import { ChevronLeft } from "lucide-react"


export default function Page() {

    // router
    const router = useRouter()

    return (
        <div className="max-w-4xl h-full mx-auto py-5 flex flex-col gap-2">
            {/* top */}
            <div onClick={() => router.back()} className="w-full bg-[#030712] sticky top-0 flex items-center gap-1 cursor-pointer z-2 py-3">
                <ChevronLeft size={27} />
                <p className="text-2xl font-bold">Saved posts</p>
            </div>

            {/* body */}
            <div>
                <GetMySaveds />
            </div>
        </div>
    )
}