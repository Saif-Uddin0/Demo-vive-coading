"use client";

import { Search } from "lucide-react";

// Platform colors matched to the badges
const PLATFORMS = {
    whatsapp: { name: "Whats app", bg: "bg-green-500", text: "text-white" },
    instagram: { name: "Instagram", bg: "bg-pink-500", text: "text-white" },
    facebook: { name: "Facebook", bg: "bg-blue-500", text: "text-white" },
};

const DATA = [
    { id: 1, name: "Floyd Miles", platform: PLATFORMS.whatsapp, time: "2 min ago", message: "Vestibulum eu quam nec neque ...", avatar: "F", active: true, avatarBg: "bg-[#DEEAFF] text-[#1A56DB]" },
    { id: 2, name: "Conversations", platform: PLATFORMS.instagram, time: "10 min ago", message: "Donec sed erat ut magna suscipit ...", avatar: "C", avatarBg: "bg-[#F3E8FF] text-[#9333EA]" },
    { id: 3, name: "Albert Flores", platform: PLATFORMS.whatsapp, time: "2h ago", message: "In a laoreet purus. Integer turpis q...", avatar: "A", avatarBg: "bg-[#FFEDD5] text-[#EA580C]" },
    { id: 4, name: "Darlene", platform: PLATFORMS.facebook, time: "3h ago", message: "Vestibulum eu quam nec neque ...", avatar: "D", avatarBg: "bg-[#CCFBF1] text-[#0F766E]" },
    { id: 5, name: "Jerome Bell", platform: PLATFORMS.facebook, time: "4h ago", message: "Aliquam porta nisl dolor, molestie ...", avatar: "J", avatarBg: "bg-[#E0E7FF] text-[#4338CA]" },
    { id: 6, name: "Guy Hawkins", platform: PLATFORMS.whatsapp, time: "5h ago", message: "Aliquam pulvinar vestibulum blandit...", avatar: "G", avatarBg: "bg-[#FFEDD5] text-[#EA580C]" },
    { id: 7, name: "Jenny Wilson", platform: PLATFORMS.instagram, time: "5h ago", message: "Aliquam porta nisl dolor, molestie...", avatar: "J", avatarBg: "bg-[#CCFBF1] text-[#0F766E]" },
    { id: 8, name: "Brooklyn", platform: PLATFORMS.whatsapp, time: "5h ago", message: "Donec sed erat ut magna suscipit...", avatar: "B", avatarBg: "bg-[#E0E7FF] text-[#4338CA]" },
];

export function ChatList() {
    return (
        <div className="w-[350px] border-r border-border flex flex-col h-full bg-background shrink-0">
            {/* Header & Search */}
            <div className="p-6 pb-4">
                <h2 className="text-xl font-bold mb-4 tracking-tight">Conversations</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-primary text-sm"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 px-6 pb-4 overflow-x-auto no-scrollbar">
                <button className="px-3.5 py-1 rounded-full text-[11px] font-semibold bg-primary text-black shrink-0">All</button>
                <button className="px-3.5 py-1 rounded-full text-[11px] font-medium bg-[#2A2A2A] text-muted-foreground hover:text-foreground shrink-0 transition-colors">Facebook</button>
                <button className="px-3.5 py-1 rounded-full text-[11px] font-medium bg-[#2A2A2A] text-muted-foreground hover:text-foreground shrink-0 transition-colors">Instagram</button>
                <button className="px-3.5 py-1 rounded-full text-[11px] font-medium bg-[#2A2A2A] text-muted-foreground hover:text-foreground shrink-0 transition-colors">Whats app</button>
            </div>

            {/* List items */}
            <div className="flex-1 overflow-y-auto w-full">
                {DATA.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-4 p-4 pl-6 cursor-pointer transition-colors border-l-2 ${item.active ? "bg-[#1A1A1A] border-[#2A2A2A]" : "border-transparent hover:bg-[#1A1A1A]"
                            }`}
                    >
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-bold text-sm ${item.avatarBg}`}>
                            {item.avatar}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-sm truncate text-foreground flex items-center gap-1.5">
                                    {item.name}
                                    {/* Mock platform indicator */}
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${item.platform.bg}`}>
                                        {/* Use very simple visual differentiation here for the icon. Real app might use Brand logos. */}
                                        <span className="w-2 h-2 rounded-sm bg-white mix-blend-overlay"></span>
                                    </div>
                                </span>
                                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{item.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{item.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
