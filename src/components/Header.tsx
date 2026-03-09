import { Bell, UserCircle } from "lucide-react";

export default function Header({ title }: { title: string }) {
    return (
        <header className="h-20 flex items-center justify-between px-8 bg-background border-b border-border">
            <h1 className="text-2xl font-bold bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block">
                {title}
            </h1>
            <div className="flex items-center gap-6">
                <button className="text-muted-foreground hover:text-foreground transition-colors relative">
                    <Bell size={24} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full">
                        <UserCircle size={28} className="text-muted-foreground" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium">Floyd Miles</p>
                        <p className="text-xs text-primary font-medium">Active</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
