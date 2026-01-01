import { fetcher, getToken } from "../fetcher";

// get by id
export function getByIdUser({ id }: { id: string }) {
    return fetcher(`/user/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// update user
export function updateUser(data: { file?: File | null, name?: string, bio?: string }) {
    const token = getToken()

    const formData = new FormData()

    if (data.file) formData.append('file', data.file)
    if (data.name) formData.append('name', data.name)
    if (data.bio) formData.append('bio', data.bio)

    return fetcher('/user/update', {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}