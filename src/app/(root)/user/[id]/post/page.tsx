// components
import GetUserPosts from "../components/GetUserPosts";
import BackBtn from "../components/BackBtn";

// api
import { getByIdUser } from "@/api/services/user";


export default async function Page({ params }: { params: { id: string } }) {

    // id
    const { id } = await params

    // user
    const { user } = await getByIdUser({ id })


    return (
        <div className="max-w-4xl h-full mx-auto py-5 flex flex-col gap-2">
            {/* top */}
            <BackBtn name={user.name} />

            {/* body */}
            <div>
                <GetUserPosts posts={user.posts} />
            </div>
        </div>
    )
}