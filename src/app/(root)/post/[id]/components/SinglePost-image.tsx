"use client"

import { PostProp } from "@/types/post";
import Image from "next/image";
import { useState } from "react";

export default function SinglePostImage({ item }: { item: PostProp }) {

    const [imageLoader, setImageLoader] = useState(true)

    return (
        <div className="w-full h-full relative rounded">
            {imageLoader &&
                <div className="w-full h-full absolute top-0 bg-neutral-800 flex items-center justify-center animate-pulse">
                </div>
            }
            <Image className="object-cover" src={item.image} width={1500} height={1500} alt={item.title} onLoad={() => setImageLoader(false)} />
        </div>
    );
};