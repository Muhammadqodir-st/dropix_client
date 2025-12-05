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

// lucide
import { SmilePlus } from "lucide-react"


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

                <form className="w-full h-full">
                    <form.Field name="file">
                        {(field) => {
                            const value = field.state.value as File || null
                            const image = value ? URL.createObjectURL(value) : ''
                            return (
                                <div className="w-full h-full flex  gap-3">

                                    {/* file left */}
                                    <label className={`${value ? 'w-[55%]' : 'w-full'} h-full flex justify-center cursor-pointer overflow-hidden`} htmlFor="imageInput">
                                        <input className="hidden" type="file" id="imageInput" onChange={(e) => {
                                            const file = e.target.files?.[0] || null
                                            field.handleChange(file)
                                        }} />
                                        {image ? (
                                            <div className="w-full h-full flex items-center justify-center bg-zinc-00">
                                                <Image className="w-full  object-center" src={image} width={800} height={800} alt="image" />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                                                <Image className="" src="/assets/upload.png" width={100} height={100} alt="upload" />
                                                <p className="text-xl font-semibold">Drag photos and videos here</p>
                                                <label htmlFor="imageInput" className="py-1 px-3 bg-blue-700 rounded-lg font-semibold cursor-pointer">click to select an image</label>
                                            </div>
                                        )}
                                    </label>


                                    {/* title right */}
                                    {value && (
                                        <div className="w-[45%] p-3">
                                            <div className="flex items-center gap-2">
                                                <Image className="w-8 h-8 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} width={200} height={200} alt={`${user ? user.name : 'username'}`} />
                                                <p className="text-sm font-semibold">{user ? user.name : 'username'}</p>
                                            </div>
                                            <form.Field name="title">
                                                {(field) => {
                                                    const length = field.state.value?.length

                                                    return (
                                                        <div>
                                                            <textarea className="w-full h-50 p-2 outline-0" onChange={(e) => { field.handleChange(e.target.value) }} maxLength={200} autoFocus></textarea>
                                                            <div className="w-full flex items-center justify-between text-zinc-500">
                                                                <SmilePlus size={20} />
                                                                <p className="text-sm">{`${length}/200`}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </form.Field>
                                        </div>
                                    )}
                                </div>
                            )
                        }}
                    </form.Field>
                </form>
            </div>
        </div>
    )
}