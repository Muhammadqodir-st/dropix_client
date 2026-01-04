"use client"

// next
import Image from "next/image"
import Link from "next/link"

// lucide
import { Bookmark, PanelsTopLeft } from "lucide-react"


// react
import { useState } from "react"
import { UserProp } from "@/types/user"


export default function UserProfile({ user }: { user: UserProp }) {

    // state
    const [activePage, setActivePage] = useState<'posts' | 'saved' | 'tagged'>('posts')

    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="flex gap-6 items-center">
                {/* image */}
                <div className="relative w-32 h-32">
                    <Image src={user ? user.avatar : "/avatar.png"} alt={user ? user.name : 'username'} fill className="rounded-full object-cover" />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-semibold">{user ? user.name : 'username'}</h2>
                    </div>

                    <div className="flex gap-6 mt-3 text-sm">
                        <p><span className="font-semibold">12</span> posts</p>
                        <p><span className="font-semibold">120</span> followers</p>
                        <p><span className="font-semibold">80</span> following</p>
                    </div>

                    <p className="mt-3 text-sm text-gray-700 max-w-md">
                        {user?.bio || "This user has no bio yet."}
                    </p>
                </div>
            </div>

            <div className="w-full mt-5 flex items-center gap-5">
                <button className=" w-full p-2.5 bg-blue-700 rounded-xl">follow</button>
                <button className=" w-full p-2.5 bg-gray-700 rounded-xl">message</button>
            </div>

            <div className="flex items-center justify-center gap-25 mt-5">
                <button onClick={() => setActivePage('posts')} className={`flex items-center gap-2 font-semibold p-3 border-b-2 ${activePage === 'posts' ? 'border-white' : 'border-transparent'} hover:border-white cursor-pointer`}><PanelsTopLeft size={20} />Posts</button>
                <button onClick={() => setActivePage('saved')} className={`flex items-center gap-2 font-semibold p-3 border-b-2 ${activePage === 'saved' ? 'border-white' : 'border-transparent'} hover:border-white cursor-pointer`}><Bookmark size={20} />Saved</button>
            </div>


            <div className="border-t"></div>

            {/* Posts */}
            <div className="mt-6">
                {/* {activePage === 'posts' && <MyPosts />} */}
                {/* {activePage === 'saved' && <MySaveds />} */}
            </div>
        </div>
    )
}
