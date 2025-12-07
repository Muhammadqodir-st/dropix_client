export interface PostProp {
    id: string,
    title: string,
    image: string,
    autherId: string
    auther: AutherProp,
    createdAt: Date
    updateAt: Date
}

interface AutherProp {
    id: string,
    name: string,
    email: string
    avatar: string,
    Post: [],
    createdAt: Date
    updateAt: Date
}