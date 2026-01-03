"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import GetMyLikes from "../../components/GetMyLikes";

export default function Page() {

    // router
    const router = useRouter()
    return (
        <div className="max-w-2xl h-full mx-auto py-5 flex flex-col gap-5">
            {/* top */}
            <div onClick={() => router.back()} className="w-full flex items-center gap-1 cursor-pointer">
                <ChevronLeft size={27} />
                <p className="text-2xl font-bold">Liked posts</p>
            </div>

            {/* body */}
            <div>
                <GetMyLikes />
            </div>
        </div>
    )
}