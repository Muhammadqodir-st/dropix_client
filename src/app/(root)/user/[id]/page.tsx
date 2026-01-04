import { getByIdUser } from "@/api/services/user"
import UserProfile from "./components/UserProfile"

export default async function Page({ params }: { params: { id: string } }) {

    // id
    const { id } = await params

    // get user
    const { user } = await getByIdUser({ id })

    return (
        <div>
            <UserProfile user={user} />
        </div>
    )
}