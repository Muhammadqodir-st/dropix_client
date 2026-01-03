"use client"

import MyComments from "../components/MyComments";

export default function Comments() {
    return (
        <div className="max-w-2xl h-full mx-auto py-5 flex flex-col gap-5">
            {/* top */}
            <div className="w-full text-start">
                <p className="text-2xl font-bold">Comments</p>
            </div>

            {/* body */}
            <div>
                <MyComments />
            </div>
        </div>
    )
}