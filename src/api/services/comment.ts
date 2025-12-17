import { fetcher, getToken } from "../fetcher";

// all
export function getAllComment() {
    return fetcher('/comment', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// post id
export function getByIdComment(data: { id: string }) {
    return fetcher(`/comment/${data.id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

// create
export function createComment(data: { text: string }, id: string) {
    const token = getToken()

    return fetcher(`/comment/create/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

// delete
export function deleteComment(data: { id: string }) {
    return fetcher(`comment/delete/${data.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}