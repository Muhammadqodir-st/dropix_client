import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-4 py-3 border-t border-zinc-900">
            <div className="w-full flex items-center justify-between">
                <p className="text-gray-700 text-sm">© 2025 Dropix · Social platform</p>
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">Created by
                    <Link href={'https://github.com/Muhammadqodir-st'} className="text-blue-800 hover:underline">Muhammadqodir</Link>
                </p>
            </div>
        </footer>
    )
}