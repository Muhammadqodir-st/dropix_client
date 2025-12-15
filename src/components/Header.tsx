"use client"

// redux
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

// shadcn
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../../components/ui/popover";

// lucide react
import { Bolt, Pencil, Plus, Search, User, UserPen } from "lucide-react";

// next
import Image from "next/image";


export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    return (
        <header className="w-full sticky top-0 z-2 bg-black py-6 px-4 flex items-center gap-3">
            <label className="flex-1 flex items-center gap-2 border border-white p-1.75 rounded-lg" htmlFor="searchInput">
                <Search size={23} />
                <input className="outline-0" type="text" name="search" id="searchInput" />
            </label>
            <ul className="flex items-center justify-between gap-5">
                <li className="py-1.75 px-4 border border-white rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                    <Plus size={23} />
                    <p className="text-sm font-semibold">Create post</p>
                </li>
                {user && <li>
                    <Popover>
                        <PopoverTrigger>
                            <div className="cursor-pointer">
                                <Image className="w-9 h-9 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="mx-3 my-2 w-50 p-3 border border-gray-800 bg-black">
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <Image className="w-7 h-7 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                                    <p className="text-sm font-semibold">{user.name}</p>
                                </li>
                                <ul className="flex flex-col gap-1 border-t py-2">
                                    <li className="flex items-center gap-2 p-1 rounded-md cursor-pointer hover:bg-zinc-900">
                                        <User size={20} />
                                        <p className="text-sm font-semibold">Profile</p>
                                    </li>
                                    <li className="flex items-center gap-2 p-1 rounded-md cursor-pointer hover:bg-zinc-900">
                                        <UserPen size={20} />
                                        <p className="text-sm font-semibold">Edit profile</p>
                                    </li>
                                </ul>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </li>}
            </ul>
        </header>
    )
}