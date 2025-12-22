// tanstack
import { useForm } from "@tanstack/react-form"
import { useMutation, useQueryClient } from "@tanstack/react-query";

// redux
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

// lucide
import { SendHorizontal } from "lucide-react";

// next
import Image from "next/image";

// components
import ButtonLoader from "./loaders/ButtonLoader";

// api
import { createComment } from "@/api/services/comment";

// IForm
interface IForm {
    text: string;
}

export default function AddComment({ id }: { id: string }) {

    // user
    const user = useSelector((state: RootState) => state.user.data)

    // query 
    const queryClient = useQueryClient()

    // form
    const form = useForm({
        defaultValues: {
            text: ''
        } as IForm,
        onSubmit: async ({ value }) => {
            await commetnMutation.mutateAsync(value)
            form.reset()
        }
    })

    // mutation
    const commetnMutation = useMutation({
        mutationFn: ({ text }: { text: string }) => createComment(id, { text }),
    })

    return (
        <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="flex items-center justify-between gap-2 p-1 border border-blue-500 rounded-full">
            {/* user */}
            <div>
                <Image className="w-8 h-8 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={100} height={100} />
            </div>

            {/* input */}
            <form.Field name="text">
                {(field) => (
                    <input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} className="flex-1 outline-0" type="text" placeholder="Add a commet..." />
                )}
            </form.Field>

            <button disabled={commetnMutation.isPending} className="cursor-pointer" type="submit">
                {commetnMutation.isPending ? <ButtonLoader /> : <SendHorizontal size={23} />}
            </button>
        </form>
    )
}