import { AutherProp, PostProp } from "./post";

export interface LikeProp {
    id: string,
    userId: string,
    user: AutherProp,
    postId: string,
    post: PostProp,
    createdAt: Date
}