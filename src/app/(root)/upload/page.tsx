"use client"

// tanstack
import { useForm } from "@tanstack/react-form"

// next
import Image from "next/image"

// Iform
interface IForm {
    file: null | File,
    title: string
}

// redux
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"


export default function Upload() {

    // redux
    const user = useSelector((state: RootState) => state.user.data);

    // form
    const form = useForm({
        defaultValues: {
            file: null,
            title: ''
        } as IForm
    });

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-250 h-180 bg-zinc-900 rounded-xl overflow-hidden">
                <div className="w-full py-2 bg-black">
                    <p className="text-center font-semibold">Create new post</p>
                </div>

                <div className="w-full h-full flex gap-5">

                </div>
            </div>  
        </div>
    )
}