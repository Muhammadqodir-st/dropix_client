export default function Loading() {
    return (
        <div className="max-w-4xl mx-auto p-6 animate-pulse">

            {/* top */}
            <div className="flex gap-6 items-center">
                {/* avatar */}
                <div className="w-32 h-32 rounded-full bg-gray-800" />

                <div className="flex-1 space-y-4">
                    {/* username */}
                    <div className="h-5 w-40 bg-gray-800 rounded" />

                    {/* stats */}
                    <div className="flex gap-6">
                        <div className="h-4 w-20 bg-gray-800 rounded" />
                        <div className="h-4 w-24 bg-gray-800 rounded" />
                        <div className="h-4 w-24 bg-gray-800 rounded" />
                    </div>

                    {/* bio */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-800 rounded" />
                        <div className="h-4 w-2/3 bg-gray-800 rounded" />
                    </div>
                </div>
            </div>

            {/* buttons */}
            <div className="w-full mt-5 flex gap-5">
                <div className="w-full h-11 bg-gray-800 rounded-xl" />
                <div className="w-full h-11 bg-gray-800 rounded-xl" />
            </div>

            {/* tabs */}
            <div className="flex justify-center gap-25 mt-6">
                <div className="h-6 w-24 bg-gray-800 rounded" />
                <div className="h-6 w-24 bg-gray-800 rounded" />
            </div>

            <div className="border-t border-gray-800 mt-4" />

            {/* posts grid */}
            <div className="grid grid-cols-3 gap-3 mt-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="aspect-square bg-gray-800 rounded-xl"
                    />
                ))}
            </div>
        </div>
    )
}