import { fetcher, getToken } from "../fetcher";


export function getSave() {
    return fetcher('/save/user', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function createSave(data: { postId: string }) {
    const token = getToken()

    return fetcher('/save/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}