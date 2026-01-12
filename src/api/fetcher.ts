export async function fetcher(url: string, options: RequestInit = {}) {
    const res = await fetch(`https://dropixuz.vercel.app${url}`, {
        ...options,
        headers: {
            ...options.headers
        },
        credentials: 'include'
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