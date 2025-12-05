import { posts } from '@/data/data'
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
