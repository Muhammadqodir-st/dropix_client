import Image from "next/image";
import { posts } from '@/data/data'
import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Post from "@/components/Post";

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col gap-3 py-18">
      {posts.map((i, index) => (
        <Post key={index} i={i} />
      ))}
    </div>
  );
}
