// components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex dark:bg-black">
            <Sidebar />
            <div className="flex-1">
                <Header />
                {children}
            </div>
        </main>
    )
}