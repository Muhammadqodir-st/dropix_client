export async function fetcher(url: string, options: RequestInit = {}) {
    const res = await fetch(`http://localhost:8000${url}`, {
        ...options,
        headers: {
            ...options.headers
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch")
    }

    return res.json()
};

export function getToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("token")
    };

    return null
}