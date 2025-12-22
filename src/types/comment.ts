import { PostProp } from "./post";
import { UserProp } from "./user";

export interface CommentProp {
    id: string,
    text: string,
    userId: string,
    user: UserProp,
    postId: string,
    post: PostProp,
    createdAt: string
}