export default function CommentLoader() {
    return (
        <div className="flex gap-2 animate-pulse">
            <div className="size-7 shrink-0 rounded-full bg-gray-300 dark:bg-gray-700" />

            <div className="flex flex-col gap-1 w-full">
                <div className="h-3 w-40 rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-3 w-full max-w-xs rounded bg-gray-300 dark:bg-gray-700" />
            </div>
        </div>
    )
}