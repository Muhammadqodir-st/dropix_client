"use client"

import { createSave } from "@/api/services/save"
import { RootState } from "@/lib/store"
import { PostProp } from "@/types/post"
import { SaveProp } from "@/types/save"
import { useMutation } from "@tanstack/react-query"
import { Bookmark } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function SaveButton({
    item,
    saves,
}: {
    item: PostProp
    saves: SaveProp[]
}) {
    const user = useSelector((state: RootState) => state.user.data)

    const [mounted, setMounted] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        setMounted(true)

        if (user) {
            const saved = saves.some((i) => i.userId === user.id)
            setIsSaved(saved)
        }
    }, [user, saves])

    const saveMutation = useMutation({
        mutationFn: () => createSave({ postId: item.id }),
        onMutate: () => {
            setIsSaved((prev) => !prev)
        },
        onError: () => {
            if (user) {
                const saved = saves.some((i) => i.userId === user.id)
                setIsSaved(saved)
            }
        },
    })

    if (!mounted) {
        return (
            <button className="cursor-pointer">
                <Bookmark size={22} />
            </button>
        )
    }

    return (
        <button
            className="cursor-pointer"
            onClick={() => saveMutation.mutate()}
        >
            <Bookmark
                size={22}
                className={isSaved ? "fill-white" : ""}
            />
        </button>
    )
}
