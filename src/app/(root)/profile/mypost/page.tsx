"use client"

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

// components
import GetMyPosts from "../components/GetMyPosts";


export default function Page() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    return (
        <div className="px-4 py-5">
            {user && <GetMyPosts id={user.id} />}
        </div>
    )
}