"use client"

// tanstack
import { useForm } from "@tanstack/react-form"

// redux
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

// next
import Image from "next/image";

// IForm
interface IForm {
    file: null | File;
    name: string;
    bio: string;
}


export default function page() {

    // user
    const user = useSelector((state: RootState) => state.user.data)

    // use form
    const form = useForm({
        defaultValues: {
            file: null,
            name: '',
            bio: ''
        } as IForm
    })


    return (
        <div className="max-w-2xl h-full mx-auto py-5 flex flex-col gap-5">
            {/* top */}
            <div className="w-full text-start">
                <p className="text-2xl font-bold">Edit profile</p>
            </div>

            {/* body */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8 items-end">
                {/* image */}
                <form.Field name="file">
                    {(field) => (
                        <div className="w-full border flex items-center justify-between p-3 rounded-lg">
                            <input className="hidden" type="file" id="profileImage" onChange={(e) => field.handleChange(e.target.files ? e.target.files[0] : null)} />
                            <Image className="w-18 h-18 rounded-full object-cover" src={field.state.value ? URL.createObjectURL(field.state.value) : user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
                            <label htmlFor="profileImage" className="py-2 px-3 bg-blue-700 rounded-lg text-sm font-semibold cursor-pointer">change photo</label>
                        </div>
                    )}
                </form.Field>

                {/* name */}
                <form.Field name="name">
                    {(filed) => (
                        <label className="w-full flex flex-col gap-1" htmlFor="nameInput">
                            <p className="text-sm font-semibold">Name</p>
                            <input className="w-full border py-3 px-3 rounded-lg outline-0" type="text" value={filed.state.value} onChange={(e) => filed.handleChange(e.target.value)} id="nameInput" />
                        </label>
                    )}
                </form.Field>

                {/* bio */}
                <form.Field name="bio">
                    {(field) => (
                        <label className="w-full flex flex-col gap-1" htmlFor="">
                            <p className="text-sm font-semibold">Boi</p>
                            <textarea value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} className="w-full h-30 border py-2 px-3 rounded-lg outline-0" maxLength={150}></textarea>
                            <p className="text-sm text-end">{field.state.value?.length}/150</p>
                        </label>
                    )}
                </form.Field>

                <button className="py-2 px-4 bg-blue-700 rounded-lg text-sm font-semibold cursor-pointer">update profile</button>
            </form>
        </div>
    )
}