import { PostProp } from "@/types/post";
import MyLikePostImage from "./MyLikePostImage";
import Link from "next/link";

export default function MyLike({ item }: { item: PostProp }) {
    return (
        <div className="aspect-square border relative">
            <Link href={'/settings/liked/post'}>
                <MyLikePostImage item={item} />
            </Link>
        </div>
    )
}