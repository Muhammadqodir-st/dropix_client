"use client"

// lucide react
import { Mail, User } from "lucide-react";

// next
import Image from "next/image";
import Link from "next/link";

// tanstack 
import { useForm } from '@tanstack/react-form';
import { useMutation } from "@tanstack/react-query";

// toast 
import toast from "react-hot-toast";

// api service
import { registerUser } from "@/api/services/auth";

// loader
import ButtonLoader from "@/components/loaders/ButtonLoader";

// form interface
interface IForm {
    name: string;
    email: string;
}

export default function Register() {

    // register mutation
    const registerMutation = useMutation({
        mutationFn: async ({ name, email }: IForm) => {
            return await registerUser({ name, email } as IForm);
        },
        onSuccess: (res: { message: string }) => {
            toast.success(res.message);
        },
        onError: (err: { message: string }) => {
            toast.error(err.message);
            console.log(err, 'this error auth register')
        }
    });

    // use form
    const form = useForm({
        defaultValues: {
            name: '',
            email: ''
        } as IForm,
        onSubmit: async ({ value }) => {
            await registerMutation.mutateAsync(value);
            form.reset()
        },
    });

    return (
        <div className="flex flex-col gap-3 max-[500px]:w-full">
            <h1 className="text-6xl font-bold">Welcome</h1>
            <p className="max-[500px]:hidden">When you want to connect, Dropix delivers the link to you.</p>

            {/* mail */}
            <a href="https://mail.google.com/">
                <button className="w-full py-2.5 bg-gray-800 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-3">
                    <Image className="w-5 h-5" src="/auth/mail.png" alt="mail" width={300} height={300} />
                    <p className="text-gray-400"> Open Mail</p>
                </button>
            </a>

            <div className="w-full flex items-center justify-between gap-3">
                <div className="flex-1 h-px bg-gray-700"></div>
                <p className="text-gray-600 font-bold">OR</p>
                <div className="flex-1 h-px bg-gray-700"></div>
            </div>


            <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="flex flex-col gap-4">
                {/* name input */}
                <form.Field name="name" validators={{
                    onChange: ({ value }) => {
                        if (!value) {
                            return toast.error('Please enter name')
                        }
                    }
                }}>
                    {(field) => (
                        <label className="flex flex-col gap-1" htmlFor="nameInput">
                            <p className="text-gray-600">Your name</p>
                            <div className="p-3 bg-gray-800 flex rounded-lg">
                                <div className="cursor-pointer text-gray-500">
                                    <User size={23} />
                                </div>
                                <input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} className="flex-1 outline-0 px-3" type="text" id="nameInput" placeholder="your name" autoFocus />
                            </div>
                        </label>
                    )}
                </form.Field>

                {/* email input */}
                <form.Field name="email">
                    {(field) => (
                        <label className="flex flex-col gap-1" htmlFor="emailInput">
                            <p className="text-gray-600">Your email</p>
                            <div className="p-3 bg-gray-800 flex rounded-lg">
                                <div className="cursor-pointer text-gray-500">
                                    <Mail size={23} />
                                </div>
                                <input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} className="flex-1 outline-0 px-3" type="email" id="emailInput" placeholder="mail@example.com" />
                            </div>
                        </label>
                    )}
                </form.Field>

                <p className="text-sm text-gray-600 font-semibold">Have an account? <Link className="underline text-white" href={'login'}>Login</Link></p>

                {/* submit btn */}
                <button disabled={registerMutation.isPending} type="submit" className={`h-10 ${registerMutation.isPending ? 'bg-blue-950' : 'bg-blue-700 hover:bg-blue-600'} rounded-lg font-semibold cursor-pointer flex items-center justify-center`}>{registerMutation.isPending ? <ButtonLoader /> : 'register'}</button>
            </form>

        </div>
    )
}