"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import GetMyCommentsPost from "../../components/GetMyCommentsPost";

export default function Page() {

    // router
    const router = useRouter()
    return (
        <div className="max-w-2xl h-full mx-auto py-5 flex flex-col gap-2">
            {/* top */}
            <div onClick={() => router.back()} className="w-full bg-[#030712] sticky top-0 flex items-center gap-1 cursor-pointer z-2 py-3">
                <ChevronLeft size={27} />
                <p className="text-2xl font-bold">Comments</p>
            </div>

            {/* body */}
            <div>
                <GetMyCommentsPost />
            </div>
        </div>
    )
}