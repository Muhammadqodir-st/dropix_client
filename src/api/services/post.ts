import { fetcher, getToken } from "../fetcher";

// get all post
export function getAll() {
    const token = getToken()

    if (!token) {
        alert("Token not found")
    }

    fetcher("/post", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export function getId(id: string) {
    const token = getToken()

    if (!token) {
        alert("Token not found")
    };

    fetcher(`post/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};