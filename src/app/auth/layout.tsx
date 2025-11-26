// next
import Image from "next/image"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex ">
            <Image className="w-155 h-screen object-cover" src="/auth/back.jpg" alt="backroundImage" width={1000} height={400} loading="eager" />
            <div className="py-10 px-10 flex flex-col justify-between gap-15">
                <Link className="w-full" href={'/'}>
                    <Image className="w-19" src="/auth/logo.svg" alt="logo" width={100} height={100} />
                </Link>

                {children}

                <span />
            </div>
        </div>
    )
}