"use client"

// redux
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

// shadcn
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../../components/ui/popover";

// lucide react
import { LogOut, Plus, Search, Settings, UserPen } from "lucide-react";

// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// react
import { useState } from "react";


export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    // state
    const [open, setOpen] = useState<boolean>(false)

    // pathname
    const pathname = usePathname()

    // hidden header
    const hidden = ['/profile', '/upload', '/profile/mypost', '/profile/saved', '/settings/edit', '/settings/liked', '/settings/liked/post', '/settings/comments', '/settings/comments/post']

    return (
        <header className={`w-full sticky top-0 z-2 py-6 px-4 flex items-center gap-3 bg-[#030712] ${hidden.includes(pathname) ? 'hidden' : ''}`}>
            <label className="flex-1 flex items-center gap-2 border border-white p-1.75 rounded-lg" htmlFor="searchInput">
                <Search size={23} />
                <input className="outline-0" type="text" name="search" id="searchInput" />
            </label>
            <ul className="flex items-center justify-between gap-5">
                <li>
                    <Link className="py-1.75 px-4 border border-white rounded-lg flex items-center justify-center gap-2 cursor-pointer" href={'/upload'}>
                        <Plus size={23} />
                        <p className="text-sm font-semibold">Create post</p>
                    </Link>
                </li>
                {user && <li>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger>
                            <div className="cursor-pointer">
                                <Image className="w-9 h-9 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="mx-3 my-2 w-65 border border-gray-800">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2 px-1">
                                    <Image className="w-7 h-7 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                                    <p className="text-sm font-semibold">{user.name}</p>
                                </li>
                                <ul className="flex flex-col border-t border-b py-1">
                                    <Link onClick={() => setOpen(false)} href={'/settings/edit'} className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-800">
                                        <UserPen size={20} />
                                        <p className="text-sm font-semibold">Edit profile</p>
                                    </Link>
                                    <Link onClick={() => setOpen(false)} href={'/settings/edit'} className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-800">
                                        <Settings size={20} />
                                        <p className="text-sm font-semibold">Settings</p>
                                    </Link>
                                </ul>
                                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-800">
                                    <LogOut size={20} />
                                    <p className="text-sm font-semibold">LogOut</p>
                                </li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </li>}
            </ul>
        </header>
    )
}