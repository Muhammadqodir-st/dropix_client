export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-3">
            <div className="w-300 h-[90%] flex rounded-xl bg-black overflow-hidden animate-pulse">
                {/* image skeleton */}
                <div className="flex items-center justify-center w-[70%] bg-zinc-900">
                    <div className="w-[90%] h-[90%] bg-zinc-800 rounded-lg" />
                </div>

                {/* right side */}
                <div className="w-[40%] bg-gray-800 flex flex-col">
                    {/* header */}
                    <div className="flex items-center justify-between border-b border-zinc-700 p-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-700" />
                            <div className="w-24 h-3 bg-zinc-700 rounded" />
                        </div>
                        <div className="w-6 h-6 bg-zinc-700 rounded" />
                    </div>

                    {/* body */}
                    <div className="flex-1 p-4 space-y-3 flex flex-col gap-8">
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
                    </div>

                    {/* footer */}
                    <div className="border-t border-zinc-700">
                        <div className="flex items-center justify-between px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 bg-zinc-700 rounded" />
                                <div className="w-6 h-6 bg-zinc-700 rounded" />
                                <div className="w-6 h-6 bg-zinc-700 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-zinc-700 rounded" />
                        </div>

                        {/* add comment */}
                        <div className="px-4 py-3">
                            <div className="w-full h-10 bg-zinc-700 rounded" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}