import { fetcher } from "../fetcher";

export function getByIdUser({ id }: { id: string }) {
    return fetcher(`/user/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}