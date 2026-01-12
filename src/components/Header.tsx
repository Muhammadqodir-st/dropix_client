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

// api
import { logOut } from "@/api/services/auth";


export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    // state
    const [open, setOpen] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    // pathname
    const pathname = usePathname()

    const hiddenRegex = [
        /^\/profile$/,
        /^\/upload$/,
        /^\/profile\/mypost$/,
        /^\/profile\/saved$/,
        /^\/settings\/edit$/,
        /^\/settings\/liked$/,
        /^\/settings\/liked\/post$/,
        /^\/settings\/comments$/,
        /^\/settings\/comments\/post$/,
        /^\/user\/[^/]+$/,
        /^\/user\/[^/]+\/post$/,
    ]

    const isHidden = hiddenRegex.some(regex => regex.test(pathname))


    return (
        <header className={`w-full sticky top-0 z-2 py-6 px-4 flex items-center gap-3 bg-[#030712] ${isHidden ? 'hidden' : ''}`}>
            <label className="flex-1 flex items-center gap-2 border border-white p-1.75 rounded-lg" htmlFor="searchInput">
                <Search size={23} />
                <input className="outline-0" type="text" name="search" id="searchInput" />
            </label>
            <ul className="flex items-center justify-between gap-5">
                <li>
                    <Link className="py-2 px-4 border border-white rounded-lg flex items-center justify-center gap-2 cursor-pointer" href={'/upload'}>
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
                        <PopoverContent className="mx-3 my-2 w-65 border border-gray-800 z-3">
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
                                <li onClick={() => { setModal(!modal); setOpen(!open) }} className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-800">
                                    <LogOut size={20} />
                                    <p className="text-sm font-semibold">LogOut</p>
                                </li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </li>}
            </ul>

            {modal &&
                <div
                    onClick={() => setModal(false)}
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md rounded-2xl bg-gray-900 border border-gray-800 p-6 shadow-2xl animate-fadeIn"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-red-500/15">
                                <LogOut className="text-red-500" size={28} />
                            </div>

                            <h2 className="text-xl font-semibold text-white">
                                Log out of your account?
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                You can always log back in at any time.
                            </p>

                            <div className="mt-6 flex w-full gap-3">
                                <button
                                    onClick={() => setModal(false)}
                                    className="flex-1 rounded-xl border border-gray-700 bg-gray-800 py-2.5 text-gray-300 hover:bg-gray-700 transition cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button onClick={() => logOut()}
                                    className="flex-1 rounded-xl bg-red-500 py-2.5 text-white hover:bg-red-600 transition cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </header>
    )
}