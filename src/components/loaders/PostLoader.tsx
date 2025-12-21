export default function PostLoader() {
    return (
        <div className="relative overflow-hidden rounded-4xl mb-5 animate-pulse">

            {/* image skeleton */}
            <div className="w-full h-100 bg-neutral-800" />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-between">

                {/* TOP */}
                <div className="flex items-start justify-between p-3">

                    {/* author */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-neutral-800" />
                        <div className="w-24 h-3 rounded bg-neutral-800" />
                    </div>

                    {/* actions */}
                    <div className="flex flex-col gap-4 backdrop-blur-md bg-white/10 p-2 rounded-4xl">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-neutral-800"
                            />
                        ))}
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="p-3">
                    <div className="w-[85%] h-3 rounded bg-neutral-800 mb-2" />
                    <div className="w-[60%] h-3 rounded bg-neutral-800" />
                </div>
            </div>
        </div>
    )
}
