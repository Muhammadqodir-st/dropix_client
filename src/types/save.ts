import { PostProp } from "./post";
import { UserProp } from "./user";

export interface SaveProp {
    id: string;
    userId: string;
    user: UserProp;
    postId: string;
    post: PostProp;
    createdAt: string,
}