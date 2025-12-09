import { CommentProp } from "./comment"
import { LikeProp } from "./like"

export interface PostProp {
    id: string,
    title: string,
    image: string,
    autherId: string
    auther: AutherProp,
    likes: LikeProp[],
    comments: CommentProp[],
    createdAt: Date,
    updateAt: Date
}

export interface AutherProp {
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