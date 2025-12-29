"use client"

// redux
import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"

// next
import Image from "next/image"
import { useRouter } from "next/navigation"

// lucide
import { Bookmark, Edit3, PanelsTopLeft, UserPen } from "lucide-react"

// components
import MyPosts from "@/components/MyPosts"


export default function Profile() {

    // user
    const user = useSelector((state: RootState) => state.user.data)

    // router
    const router = useRouter()


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
                        <button className="flex items-center gap-2 px-4 py-1.5 border rounded-md text-sm cursor-pointer">
                            <UserPen size={18} />
                            Edit profile
                        </button>
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

            <div className="flex items-center justify-center gap-25 mt-8">
                <button className="flex items-center gap-2 font-semibold p-3 border-b-2 border-white hover:border-white cursor-pointer"><PanelsTopLeft size={20} />Posts</button>
                <button className="flex items-center gap-2 font-semibold p-3 border-b-2 border-transparent hover:border-white cursor-pointer"><Bookmark size={20} />Saved</button>
                <button className="flex items-center gap-2 font-semibold p-3 border-b-2 border-transparent hover:border-white cursor-pointer"><PanelsTopLeft size={20} />Posts</button>
            </div>


            <div className="border-t"></div>

            {/* Posts */}
            <div className="mt-6">
                {user && <MyPosts id={user.id} />}
            </div>
        </div>
    )
}
