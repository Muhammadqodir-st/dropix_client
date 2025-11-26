// fetcher
import { fetcher } from "../fetcher";


// register
export function registerUser(data: { name: string, email: string }) {
    return fetcher('/auth/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json'
        }
    });
};


// login
export function loginUser(data: { email: string }) {
    return fetcher('/auth/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json'
        }
    });
};

// verify
export function verifyUser(token: string) {
    return fetcher(`/auth/verify?token=${token}`)
};


// get user
export function getUser(data: { token: string }) {
    return fetcher('/auth/profile', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${data.token}`
        }
    });
};