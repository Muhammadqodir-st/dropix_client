// next
import Image from "next/image";

// lucide react
import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";

export default function Post({ i }: any) {
    return (
        <div className="w-135 bg-gray- rounded-lg overflow-hidden">

            {/* header */}
            <div className="p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image className="w-12 h-12 rounded-full" src={i.auther.avatar} alt={i.auther.name} width={100} height={100} />
                    <p>{i.auther.name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="py-1.5 px-5 bg-blue-700 rounded-lg">follow</button>
                    <Ellipsis />
                </div>
            </div>

            {/* body */}
            <div className="w-full">
                <Image className="w-full rounded-lg object-cover" src={i.image} alt={i.title} width={800} height={800} />
            </div>


            {/* bottom */}
            <div className="w-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Heart />
                        <p>{i.likes}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <MessageCircle />
                        <p>{i.comment}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <Send />
                    </div>
                </div>
                <Bookmark />
            </div>

            <p className="px-2 text-white/70 w-full overflow-hidden">
                <span className="pr-1 text-white">{i.auther.name}</span>
                {i.title.length > 40 ? i.title.slice(0, 80) + '... more' : i.title}
            </p>
        </div>
    )
}