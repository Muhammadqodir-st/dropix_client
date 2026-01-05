"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackBtn({ name }: { name: string }) {

    const router = useRouter()


    return (
        <div onClick={() => router.back()} className="w-full bg-[#030712] sticky top-0 flex items-center gap-1 cursor-pointer z-2 py-3">
            <ChevronLeft size={27} />
            <p className="text-2xl font-bold">{name} posts</p>
        </div>
    )
}