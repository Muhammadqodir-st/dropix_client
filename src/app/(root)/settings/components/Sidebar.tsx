"use client"

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// lucide react
import { UserPen } from "lucide-react";

export default function Sidebar() {

    // pathname
    const pathname = usePathname()


    return (
        <div className="w-65 h-screen sticky top-0 p-5 border-l border-gray-800 flex flex-col gap-5">
            {/* top */}
            <div>
                <p className="text-xl font-semibold">Settings</p>
            </div>

            {/* navigate */}
            <ul className="flex flex-col gap-1">
                <Link href={'/settings/edit'} className={`flex items-center gap-2 py-3 px-4 rounded-lg ${pathname === '/settings/edit' ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <UserPen size={22} />
                    <p className="font-semibold">Edit profile</p>
                </Link>
            </ul>
        </div>
    )
}