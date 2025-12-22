import { CommentProp } from "./comment";
import { LikeProp } from "./like";
import { PostProp } from "./post";
import { SaveProp } from "./save";

export interface UserProp {
    id: string,
    name: string,
    email: string,
    avatar: string;
    post: PostProp,
    likes: LikeProp,
    comments: CommentProp,
    save: SaveProp,
    createdAt: string,
    updatedAt: string
}