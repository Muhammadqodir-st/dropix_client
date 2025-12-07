"use client"

// next
import Image from "next/image"
import { useRouter } from "next/navigation"

// tanstack
import { useForm } from "@tanstack/react-form"

// redux
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

// lucide
import { SmilePlus, X } from "lucide-react"

// emoji mart
import EmojiPicker from "@/components/EmojiPicker"

// react
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

// api service
import { createPost } from "@/api/services/post"

// loader or toast
import toast from "react-hot-toast"

// Iform
interface IForm {
    file: null | File,
    title: string
}

export default function Upload() {

    // router
    const router = useRouter()

    // state
    const [openEmoji, setOpenEmoji] = useState<boolean>(false);

    // redux
    const user = useSelector((state: RootState) => state.user.data);

    // matation
    const uploadMutation = useMutation({
        mutationFn: async ({ file, title }: IForm) => {
            return await createPost({ file, title })
        },
        onSuccess: (res: { message: string }) => {
            toast.success(res.message)
        },
        onError: (err: { message: string }) => {
            toast.error(err.message)
            console.log(err);
        }
    })

    // form
    const form = useForm({
        defaultValues: {
            file: null,
            title: ''
        } as IForm,
        onSubmit: async ({ value }) => {
            await uploadMutation.mutateAsync(value)
            form.reset()
        }
    });


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            {/* router back */}
            <button onClick={() => router.back()} className="absolute top-4 right-4 cursor-pointer">
                <X size={28} />
            </button>

            <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="w-250 h-180 bg-zinc-900 rounded-xl overflow-hidden">
                <div className="w-full py-2 bg-black">
                    <p className="text-center font-semibold">Create new post</p>
                </div>

                <div className="w-full h-full">
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
                                            <form.Field name="title" validators={{
                                                onChange: ({ value }) => {
                                                    if (typeof value !== "string") {
                                                        return "Title must be a string";
                                                    }

                                                    if (!value.trim()) {
                                                        return "Title should not be empty";
                                                    }

                                                    if (value.length > 200) {
                                                        return "Title must not be greater than 200 characters";
                                                    }

                                                    return undefined;
                                                }
                                            }}>
                                                {(field) => {
                                                    const length = field.state.value?.length || 0

                                                    return (
                                                        <div className="flex flex-col gap-3">
                                                            <textarea className="w-full h-50 p-2 outline-0" value={field.state.value} onChange={(e) => { field.handleChange(e.target.value) }} maxLength={200} autoFocus></textarea>
                                                            <div className="w-full flex items-center justify-between text-zinc-500">
                                                                <SmilePlus className="cursor-pointer" onClick={() => setOpenEmoji(!openEmoji)} size={20} />
                                                                <p className="text-sm">{`${length}/200`}</p>
                                                            </div>

                                                            {/* emoji modal */}
                                                            {openEmoji && (
                                                                <EmojiPicker onSelect={(e: { native: string }) => {
                                                                    field.handleChange(field.state.value + e.native);
                                                                    setOpenEmoji(false)
                                                                }} />
                                                            )}

                                                            <button disabled={uploadMutation.isPending} type="submit" className={`w-full p-2 ${uploadMutation.isPending ? 'bg-blue-950' : 'bg-blue-700'} rounded-lg font-semibold cursor-pointer`}>create</button>
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
                </div>
            </form>
        </div>
    )
}