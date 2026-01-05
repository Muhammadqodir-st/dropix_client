import PostLoader from "@/components/loaders/PostLoader";

export default function Loading() {
    return (
        <div className="max-w-4xl h-full mx-auto py-5 flex flex-col gap-4 animate-pulse">

            {/* BackBtn skeleton */}
            <div className="h-10 w-40 bg-gray-800 rounded-xl" />

            {/* Posts skeleton */}
            <div className="grid grid-cols-3 gap-3 mt-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <PostLoader key={i} />
                ))}
            </div>

        </div>
    )
}
