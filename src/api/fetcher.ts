export async function fetcher(url: string, options: RequestInit = {}) {
    const res = await fetch(`http://localhost:8000${url}`, {
        ...options,
        headers: {
            ...options.headers
        }
    });

    if (!res.ok) {
        const error = await res.json().catch(() => null)
        throw new Error(error.message || `Https Error ${res.status}`)
    }

    return res.json()
};

export function getToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("token")
    };

    return null
}

export function logOut() {
    if (typeof window !== "undefined") {
        localStorage.removeItem('token')
        window.location.reload()
        return
    };
}