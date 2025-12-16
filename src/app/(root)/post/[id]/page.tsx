
// api
import { getId } from "@/api/services/post"
import SinglePost from "./components/SinglePost"

export default async function Post({ params }: { params: { id: string } }) {

    const { id } = await params

    const { post, } = await getId(id)

    return (
        <div className="w-full px-4">
            <SinglePost item={post} />
        </div>
    )
}