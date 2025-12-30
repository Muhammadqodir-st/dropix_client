import { PostProp } from "@/types/post";
import Image from "next/image";
import { useState } from "react";

export default function PostImage({ item }: { item: PostProp }) {

    const [imageLoader, setImageLoader] = useState(true)

    return (
        <div className="w-full h-full">
            {imageLoader &&
                <div className="w-full h-full absolute top-0 bg-neutral-800 flex items-center justify-center animate-pulse">
                </div>
            }
            <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                loading="lazy"
                onLoad={() => setImageLoader(false)}
            />
        </div>
    );
};