export default function CommentLoader() {
    return (
        <div className="flex items-start gap-2 animate-pulse">
            {/* avatar skeleton */}
            <div className="w-7 h-7 rounded-full bg-gray-700"></div>

            {/* text skeleton */}
            <div className="flex-1 space-y-1">
                {/* comment text lines */}
                <div className="w-full h-3 bg-gray-700 rounded"></div>
                <div className="w-[85%] h-3 bg-gray-700 rounded"></div>
            </div>
        </div>

    )
}