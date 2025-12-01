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
        <div className="w-70 h-screen sticky top-0">
            <div className="w-full h-full border-r border-gray-800 p-4 flex flex-col gap-4">
                {/* logo image */}
                <Link href={"/"} className="px-2 py-5">
                    <Image className="w-45" src="/assets/logo-title.svg" alt="logo" width={200} height={200} loading="eager" />
                </Link>

                {/* navigate */}
                <ul className="flex flex-col gap-3">
                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <House strokeWidth={`${pathname === "/" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/" ? 'font-bold' : 'font-semibold'}`}>Home</p>
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/search" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <Search strokeWidth={`${pathname === "/search" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/search" ? 'font-bold' : 'font-semibold'}`}>Search</p>
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/notifications" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <Bell strokeWidth={`${pathname === "/notifications" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/s" ? 'font-bold' : 'font-semibold'}`}>Notifications</p>
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/direct" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <Send strokeWidth={`${pathname === "/direct" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/s" ? 'font-bold' : 'font-semibold'}`}>Messages</p>
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/upload" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <Plus strokeWidth={`${pathname === "/upload" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/upload" ? 'font-bold' : 'font-semibold'}`}>Create</p>
                    </Link>

                    <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/profile" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                        <UserRound strokeWidth={`${pathname === "/profile" ? '2.7' : '2'}`} />
                        <p className={`${pathname === "/profile" ? 'font-bold' : 'font-semibold'}`}>Profile</p>
                    </Link>

                    {!user && (
                        <Link href={'/auth/login'} className={`flex items-center gap-3 py-2 px-3 rounded-lg bg-blue-700`}>
                            <Key strokeWidth={`${pathname === "/auth/login" ? '2.7' : '2'}`} />
                            <p className={`${pathname === "/auth/login" ? 'font-bold' : 'font-semibold'}`}>Login</p>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}