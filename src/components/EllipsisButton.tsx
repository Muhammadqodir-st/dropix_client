"use client"

import { Download, Ellipsis, Trash2, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { PostProp } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteByIdPost } from "@/api/services/post";
import ButtonLoader from "./loaders/ButtonLoader";
import Link from "next/link";

export default function EllipsisButton({ item }: { item: PostProp }) {

    // user
    const user = useSelector((state: RootState) => state.user.data)
    const queryClient = useQueryClient()

    const deletePost = useMutation({
        mutationFn: () => deleteByIdPost(item.id),
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ['myposts'] })

            const prev = queryClient.getQueryData<PostProp[]>(['myposts'])

            queryClient.setQueryData<PostProp[]>(['posts'], old =>
                old?.filter(p => p.id !== item.id)
            )

            return { prev }
        },
        onError: (_err, _variables, context) => {
            if (context?.prev) {
                queryClient.setQueryData(['myposts'], context.prev)
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['myposts'] })
        },
    })

    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer"><Ellipsis size={22} /></PopoverTrigger>

            <PopoverContent className="w-50 px-1 py-2 flex flex-col gap-1">
                {user?.id === item.autherId &&
                    <button onClick={() => deletePost.mutate()} className="flex items-center gap-2 font-semibold text-red-500 p-1 px-3 rounded-lg cursor-pointer">
                        {deletePost.isPending ? <ButtonLoader /> : <Trash2 size={20} />}
                        Delete post
                    </button>
                }
                <button>
                    <Link href={item.autherId === user?.id ? '/profile' : `/user/${item.autherId}`} className="flex items-center gap-2 font-semibold py-1 px-3 rounded-lg cursor-pointer">
                        <User size={20} />
                        {user?.id === item.autherId ? 'View profile' : 'View user'}
                    </Link>
                </button>
                {user?.id !== item.autherId &&
                    <button className="flex items-center gap-2 font-semibold py-1 px-3 rounded-lg cursor-pointer">
                        <Download size={20} />
                        Download
                    </button>
                }
            </PopoverContent>
        </Popover>
    )
}