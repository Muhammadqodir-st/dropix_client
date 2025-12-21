import { createComment } from "@/api/services/comment"
import { useForm } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import ButtonLoader from "./loaders/ButtonLoader"
import { SendHorizontal } from "lucide-react"

interface IForm {
    text: string
}

export default function AddComment({ id }: { id: string }) {

    const addComment = useMutation({
        mutationFn: async ({ text }: IForm) => {
            return await createComment(id, { text })
        },
        onSuccess: (res: { message: string }) => {
            toast.success("text added")
        },
        onError: (err: { message: string }) => {
            toast.error(err.message)
        }
    })

    const form = useForm({
        defaultValues: {
            text: ''
        } as IForm,
        onSubmit: async ({ value }) => {
            await addComment.mutateAsync(value)
            form.reset()
        }
    })


    return (
        <div className="w-full">
            <form.Field name="text">
                {(field) => (
                    <form className="w-full flex items-center justify-center" onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }}>
                        <input className="flex-1 outline-0" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} type="text" placeholder="Add comment..." />
                        <button disabled={addComment.isPending || !form.getFieldValue('text')} type="submit">
                            {addComment.isPending ? <ButtonLoader /> : <SendHorizontal className={`${!form.getFieldValue('text') ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer'}`} />}
                        </button>
                    </form>
                )}
            </form.Field>
        </div>
    )
}