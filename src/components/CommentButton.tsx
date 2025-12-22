import { MessageCircle, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import Comments from "./Comments";
import { PostProp } from "@/types/post";
import AddComment from "./AddComment";

export default function CommentButton({ item }: { item: PostProp }) {
    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer"><MessageCircle size={22} /></PopoverTrigger>

            <PopoverContent className="w-90 flex flex-col gap-3">
                {/* top */}
                <div className="flex items-center justify-between">
                    <PopoverClose className="cursor-pointer" asChild>
                        <X size={20} />
                    </PopoverClose>
                    <p className="text-sm font-semibold">Comments</p>
                    <span />
                </div>

                <div className="">
                    <Comments id={item.id} />
                </div>

                <div className="">
                    <AddComment id={item.id} />
                </div>
            </PopoverContent>
        </Popover>
    )
}