export default function PostLoader() {
    return (
        <div className="w-80 flex flex-col gap-2 mb-5 animate-pulse">

            {/* header */}
            <div className="flex items-center justify-between px-1">
                {/* auther */}
                <div className="flex items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-neutral-700"></div>
                    <div className="w-20 h-3 rounded bg-neutral-700"></div>
                </div>
            </div>

            {/* body image */}
            <div className="w-full h-80 bg-neutral-800 rounded-lg"></div>

            {/* bottom */}
            <div className="w-full flex flex-col gap-3 px-1">

                {/* title */}
                <div className="w-4/5 h-3 bg-neutral-700 rounded"></div>
                <div className="w-3/5 h-3 bg-neutral-700 rounded"></div>
            </div>
        </div>
    )
}
