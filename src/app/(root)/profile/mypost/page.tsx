"use client"

import { useSelector } from "react-redux";
import GetMyPosts from "../components/GetMyPosts";
import { RootState } from "@/lib/store";

export default function Page() {

    // user
    const user = useSelector((state: RootState) => state.user.data)
    return (
        <div className="px-4 py-8">
            {user && <GetMyPosts id={user.id} />}
        </div>
    )
}