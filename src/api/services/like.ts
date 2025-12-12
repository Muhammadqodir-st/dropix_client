import { fetcher, getToken } from "../fetcher";

export function createNewLike(data: { postId: string }) {
    const token = getToken()

    return fetcher('/like/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
};