import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex-1">
                {children}
            </div>
            <Sidebar />
        </div>
    )
}