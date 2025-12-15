"use client"

import { RootState } from "@/lib/store";
import { Search } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    return (
        <div className="w-full sticky top-0 z-2 bg-black py-6 px-4 flex items-center gap-3">
            <label className="flex-1 flex items-center gap-2 border p-2 rounded-lg" htmlFor="searchInput">
                <Search />
                <input className="outline-0" type="text" name="search" id="searchInput" />
            </label>
            <div className="cursor-pointer">
                <Image className="w-9 h-9 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
            </div>
        </div>
    )
}