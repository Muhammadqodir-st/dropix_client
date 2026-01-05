import Image from "next/image";
import { useState } from "react";

export default function MyCommentPostImage({ image }: { image: string }) {

    const [imageLoader, steImageLoader] = useState(true)
    return (
        <div className="w-full h-full">
            {imageLoader &&
                <div className="w-full h-full absolute top-0 bg-gray-800 flex items-center justify-center animate-pulse">
                </div>
            }
            <Image className="w-full h-full object-cover" src={image} alt='Image' width={800} height={800} loading="lazy" onLoad={() => steImageLoader(false)} />
        </div>
    )
}