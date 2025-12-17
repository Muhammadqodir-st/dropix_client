import { fetcher, getToken } from "../fetcher";

// get all
export function getAllLike() {
    return fetcher('/like', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// get post id
export function getByIdLike(data: { id: string }) {
    return fetcher(`/like/${data.id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// create like
export function createNewLike(data: { postId: string }) {
    const token = getToken()

    return fetcher('/like/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};