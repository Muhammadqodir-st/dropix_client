import { PostProp } from "@/types/post";
import MyPostImage from "./MyPostImage";
import Link from "next/link";

export default function MyPost({ item }: { item: PostProp }) {
    return (
        <div className="aspect-square border relative">
            <Link href={'/profile/mypost'}>
                <MyPostImage item={item} />
            </Link>
        </div>
    )
}