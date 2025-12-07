import { CommentProp } from "./comment";
import { LikeProp } from "./like";
import { PostProp } from "./post";

export interface UserProp {
    id: string,
    name: string,
    email: string,
    avatar: string;
    Post: PostProp,
    likes: LikeProp,
    comments: CommentProp
    createdAt: string,
    updatedAt: string
}