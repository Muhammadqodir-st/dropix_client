import { PostProp } from "@/types/post";
import UserPost from "./UserPost";

export default function UserPosts({ posts }: { posts: PostProp[] }) {

    return (
        <div className={`${posts.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-3 gap-1'}`}>
            {posts.map((i: PostProp) => (
                <UserPost key={i.id} item={i} />
            ))}
            {posts.length === 0 &&
                <p>No Posts yet</p>
            }
        </div>
    )
}