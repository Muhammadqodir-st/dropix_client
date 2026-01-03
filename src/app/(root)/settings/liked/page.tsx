"use client"

import MyLikes from "../components/MyLikes"

export default function Page() {

    return (
        <div className="max-w-2xl h-full mx-auto py-5 flex flex-col gap-5">
            {/* top */}
            <div className="w-full text-start">
                <p className="text-2xl font-bold">Liked posts</p>
            </div>

            {/* body */}
            <div>
                <MyLikes />
            </div>
        </div>
    )
}