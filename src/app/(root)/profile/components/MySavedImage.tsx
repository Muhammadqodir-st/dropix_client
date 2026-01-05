import { SaveProp } from "@/types/save";
import Image from "next/image";
import { useState } from "react";

export default function MySavedImage({ item }: { item: SaveProp }) {

    const [imageLoader, setImageLoader] = useState(true)

    return (
        <div className="w-full h-full">
            {imageLoader &&
                <div className="w-full h-full absolute top-0 bg-gray-800 flex items-center justify-center animate-pulse">
                </div>
            }
            <Image className="w-full h-full object-cover"
                src={item.post.image}
                alt={item.post.title}
                width={800}
                height={800}
                loading="lazy"
                onLoad={() => setImageLoader(false)}
            />
        </div>
    );
};