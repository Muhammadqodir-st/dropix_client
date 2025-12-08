"use client"

// lucide react
import { Mail } from "lucide-react";

// next
import Image from "next/image";
import Link from "next/link";

// tanstack
import { AnyFieldApi, useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";

// toast 
import toast from "react-hot-toast";

// api service
import { loginUser } from "@/api/services/auth";

// loader
import ButtonLoader from "@/components/loaders/ButtonLoader";

// form interface
interface IForm {
    email: string
}

// form info
function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <em className="text-sm text-red-500">{field.state.meta.errors.join(',')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}

export default function Login() {

    // login mutation
    const loginMutation = useMutation({
        mutationFn: async ({ email }: IForm) => {
            return await loginUser({ email } as IForm);
        },
        onSuccess: (res: { message: string }) => {
            toast.success(res.message)
        },
        onError: (err: { message: string }) => {
            toast.error(err.message)
            console.log(err, 'this error auth login');
        }
    })

    // use form
    const form = useForm({
        defaultValues: {
            email: ''
        } as IForm,
        onSubmit: async ({ value }) => {
            await loginMutation.mutateAsync(value)
            form.reset()
        }
    })

    return (
        <div className="flex flex-col gap-3 max-[500px]:w-full">
            <h1 className="text-6xl font-bold max-[500px]:text-4xl">Welcome back</h1>
            <p className="max-[500px]:hidden">When you want to connect, Dropix delivers the link to you.</p>

            {/* mail */}
            <a href="https://mail.google.com/">
                <button className="w-full py-3 bg-gray-800 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-3">
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
                {/* email input */}
                <form.Field name="email" validators={{
                    onChange: ({ value }) => {
                        if (typeof value !== "string") {
                            return "Invalid input";
                        }

                        if (!value.trim()) {
                            return "Please enter email";
                        }

                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                        if (!emailRegex.test(value.trim())) {
                            return "Please enter an email address";
                        }

                        return undefined;
                    }

                }}>
                    {(field) => (
                        <label className="flex flex-col gap-1" htmlFor="emailInput">
                            <p className="text-gray-600">Your email</p>
                            <div className={`p-3 bg-gray-800 flex rounded-lg ${!field.state.meta.isValid && 'border border-red-500'}`}>
                                <div className={`cursor-pointer ${!field.state.meta.isValid ? 'text-red-500' : 'text-gray-500'}`}>
                                    <Mail size={23} />
                                </div>
                                <input value={field.state.value} onChange={(e) => { field.handleChange(e.target.value) }} className="flex-1 outline-0 px-3" type="email" id="emailInput" placeholder="mail@example.com" />
                            </div>
                            <FieldInfo field={field} />
                        </label>
                    )}
                </form.Field>

                <p className="text-sm text-gray-600 font-semibold">Don't have an account? <Link className="underline text-white" href={'register'}>Register</Link></p>

                {/* submit btn */}
                <button disabled={loginMutation.isPending} type="submit" className={`h-10 ${loginMutation.isPending ? 'bg-blue-950' : 'bg-blue-700 hover:bg-blue-600'} rounded-lg font-semibold cursor-pointer flex items-center justify-center`}>{loginMutation.isPending ? <ButtonLoader /> : 'login'}</button>
            </form>

        </div >
    )
}