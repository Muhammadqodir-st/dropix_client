"use client"

// api services
import { verifyUser } from "@/api/services/auth"

// tanstack
import { useQuery } from "@tanstack/react-query"

// lucide react
import { Hourglass } from "lucide-react"

// next
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// toast
import toast from "react-hot-toast"
import { Progress } from "../../../../components/ui/progress"

export default function Verify() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const { data, isPending, error } = useQuery({
        queryKey: ["verify", token],
        queryFn: () => verifyUser(token as string),
        enabled: !!token
    });

    console.log(data);


    useEffect(() => {
        if (data?.success) {
            localStorage.setItem("token", data?.token);
            toast.success(data?.message);
            router.replace('/');
            return window.location.reload();
        }

        if (data?.statusCode && !data?.success) {
            toast.error(data?.message);
            return router.replace('/auth/login');
        }

        if (error) {
            toast.error(error.message);
            console.log(error)
            return router.replace('/auth/login')
        }
    }, [data, error, router]);


    return (
        <div>
            <div className="p-8 bg-[#111] border border-[#1f1f1f] rounded-lg flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold text-center">Verify your email</h1>
                <p className="max-w-md text-center text-gray-400">We are verifying your email. Please wait a moment while we complete the process</p>
                <div className="w-15 h-15 rounded-full bg-blue-600/10 flex items-center justify-center  animate-pulse">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" >
                        <Hourglass />
                    </svg>
                </div>
                <div className="w-full bg-gray-900 rounded-lg flex items-center justify-start overflow-hidden">
                    <Progress value={isPending ? 90 : 100} className="h-3" />
                </div>
            </div>
        </div>
    )
}