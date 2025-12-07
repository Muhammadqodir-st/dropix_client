import { AutherProp, PostProp } from "./post";

export interface CommentProp {
    id: string,
    text: string,
    userId: string,
    user: AutherProp,
    postId: string,
    post: PostProp,
    createdAt: Date
}