import { CommentProp } from "./comment"
import { LikeProp } from "./like"
import { SaveProp } from "./save"
import { UserProp } from "./user"

export interface PostProp {
    id: string,
    title: string,
    image: string,
    autherId: string
    auther: UserProp,
    likes: LikeProp[],
    comments: CommentProp[],
    saves: SaveProp[],
    createdAt: string,
    updateAt: string
}