export default function MyCommentsLoader() {
    return (
        <div className="w-full h-25 flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800 animate-pulse">
            {/* left accent */}
            <div className="w-1 bg-gray-700" />

            {/* content */}
            <div className="flex-1 p-4">
                <div className="flex items-start gap-3">
                    {/* avatar */}
                    <div className="w-10 h-10 rounded-full bg-gray-700 ring-2 ring-gray-800" />

                    {/* text */}
                    <div className="flex flex-col gap-2 w-full">
                        {/* name + time */}
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-24 bg-gray-700 rounded" />
                            <div className="h-3 w-14 bg-gray-800 rounded" />
                        </div>

                        {/* comment lines */}
                        <div className="h-3 w-full bg-gray-700 rounded" />
                        <div className="h-3 w-3/4 bg-gray-700 rounded" />
                    </div>
                </div>
            </div>

            {/* post image */}
            <div className="w-24 relative shrink-0 bg-gray-800" />
        </div>
    );
}
