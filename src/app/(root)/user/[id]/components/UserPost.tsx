import { PostProp } from "@/types/post";
import Link from "next/link";
import UserPostImage from "./UserPostImage";

export default function UserPost({ item }: { item: PostProp }) {
    return (
        <div className="aspect-square border relative">
            <Link href={`/user/${item.autherId}/post`}>
                <UserPostImage item={item} />
            </Link>
        </div>
    )
}