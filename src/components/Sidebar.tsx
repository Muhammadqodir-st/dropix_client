"use client"

// next
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// lucide react
import { Bell, House, Key, Plus, Search, Send, UserRound } from "lucide-react"

// redux 
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

export default function Sidebar() {

    // path
    const pathname = usePathname();

    // user
    const user = useSelector((state: RootState) => state.user.data);


    return (
        <div className="w-20 h-screen sticky top-0 left-0">
            <div className="w-full h-full border-r border-gray-800 px-4 py-3 flex flex-col gap-4">
                {/* logo image */}
                <Link href={"/"} className="px-2 py-5">
                    <Image className="w-10" src="/auth/logo.svg" alt="logo" width={200} height={200} loading="eager" />
                </Link>

                {/* navigate */}
                <ul className="flex flex-col gap-3">
                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <House strokeWidth={`${pathname === "/" ? '2.7' : '2'}`} />
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/search" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <Search strokeWidth={`${pathname === "/search" ? '2.7' : '2'}`} />
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/notifications" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <Bell strokeWidth={`${pathname === "/notifications" ? '2.7' : '2'}`} />
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/direct" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <Send strokeWidth={`${pathname === "/direct" ? '2.7' : '2'}`} />
                    </Link>

                    <Link href={'/upload'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/upload" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <Plus strokeWidth={`${pathname === "/upload" ? '2.7' : '2'}`} />
                    </Link>

                    <Link href={'/profile'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/profile" ? 'bg-gray-900' : 'bg-none hover:bg-gray-900'}`}>
                        <UserRound strokeWidth={`${pathname === "/profile" ? '2.7' : '2'}`} />
                    </Link>

                    {!user && (
                        <Link href={'/auth/login'} className={`flex items-center gap-3 py-2 px-3 rounded-lg bg-blue-700`}>
                            <Key strokeWidth={`${pathname === "/auth/login" ? '2.7' : '2'}`} />
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}