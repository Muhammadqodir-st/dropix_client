"use client"

// redux slice
import { getUser } from "@/api/services/auth";
import { setUser } from "@/lib/feature/userSlice";
import { useDispatch } from "react-redux"

// tanstack
import { useQuery } from "@tanstack/react-query";

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

// react
import { useEffect, useState } from "react";


export default function StoreUser() {
    // router
    const router = useRouter()

    // redux dispatch
    const dispatch = useDispatch();

    // token
    const [token, setToken] = useState<string | null>(null);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem("token"))
        }

        if (typeof window !== 'undefined') {
            if (!token) {
                router.push('/auth/login')
            }
        }
    }, []);


    const data = useQuery({
        queryKey: ['user', token],
        queryFn: () => getUser({ token }),
        enabled: !!token,
        retry: false
    });



    useEffect(() => {
        if (data.data?.success) {
            dispatch(setUser(data.data.user));
        }
    }, [data.data, dispatch]);


    if (data.isLoading) {
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-between bg-black z-50 py-5">
                <span />
                <Image className="" src="/auth/logo.svg" alt="" width={150} height={150} />
                <p>Loading your accaunt...</p>
            </div>
        );
    }

    return null
}