import { fetcher, getToken } from "../fetcher";

// get all post
export function getAll() {
    const token = getToken()

    if (!token) {
        alert("Token not found")
    }

    return fetcher("/post", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

// get by id
export function getId(id: string) {
    const token = getToken()

    if (!token) {
        alert("Token not found")
    };

    return fetcher(`/post/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

// create
export async function createPost(post: { file: File | null, title: string }) {
    const token = getToken()

    if (!token) {
        alert("Token not found")
    };

    const formData = new FormData()

    if (post.file) formData.append("file", post.file)
    if (post.title) formData.append("title", post.title)

    return fetcher('/post/create', {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}