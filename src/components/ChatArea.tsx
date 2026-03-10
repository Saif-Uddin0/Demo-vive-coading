"use client";

export function ChatArea() {
    return (
        <div className="flex-1 flex flex-col h-full bg-background/50 relative">
            {/* Header */}
            <div className="h-20 border-b border-border flex items-center px-8 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-[#DEEAFF] text-[#1A56DB]">
                        F
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg text-foreground">Floyd Miles</span>
                        <span className="text-xs text-muted-foreground mt-0.5">Active</span>
                    </div>
                </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">

                {/* Outgoing Message (Right) */}
                <div className="flex flex-col items-end w-full">
                    <div className="bg-[#1A1A1A] text-foreground p-4 px-6 rounded-[24px] rounded-br-sm max-w-[70%]">
                        Hi, I saw your message about helping construction businesses grow. Can you share more details?
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">10:30 AM</span>
                </div>

                {/* Incoming Message (Left) */}
                <div className="flex flex-col items-start w-full">
                    <div className="bg-[#2A2A2A] text-foreground p-5 px-6 rounded-[24px] rounded-bl-sm max-w-[70%] leading-relaxed">
                        <p className="font-semibold mb-1">Hi Floyd 👋</p>
                        <p>Thanks for responding!</p>
                        <p>We specialize in helping growing construction companies generate qualified leads consistently using automated outreach and AI-powered targeting.</p>
                        <p>May I ask — are you currently handling lead</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">10:33 AM</span>
                </div>

                {/* Outgoing Message (Right) */}
                <div className="flex flex-col items-end w-full">
                    <div className="bg-[#1A1A1A] text-foreground p-4 px-6 rounded-[24px] rounded-br-sm max-w-[70%] leading-relaxed">
                        Honestly, meal planning. I work 60+ hour weeks and end up ordering takeout constantly. I know it's not
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">10:36 AM</span>
                </div>

                {/* Incoming Message (Left) */}
                <div className="flex flex-col items-start w-full">
                    <div className="bg-[#2A2A2A] text-foreground p-5 px-6 rounded-[24px] rounded-bl-sm max-w-[70%] leading-relaxed">
                        That's such a common challenge! The good news is we can create a simple system that works with your schedule - no elaborate meal prep needed. I focus on strategic shortcuts and making healthy choices easy, even when you're ordering out. Would you be open to a quick 20-minute discovery call to see if my program would be a good fit?
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">10:37 AM</span>
                </div>

                {/* Outgoing Message (Right) */}
                <div className="flex flex-col items-end w-full">
                    <div className="bg-[#1A1A1A] text-foreground p-4 px-6 rounded-[24px] rounded-br-sm max-w-[70%] leading-relaxed">
                        Honestly, meal planning. I work 60+ hour weeks and end up ordering takeout constantly. I know it's not helping my energy levels.
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2">10:38 AM</span>
                </div>

                {/* Safe spacing for fixed input area if it overlaps */}
                <div className="h-10"></div>
            </div>

            {/* Input Area */}
            <div className="p-4 px-8 border-t border-border bg-background shrink-0">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Write message..."
                        className="w-full bg-card border border-border rounded-xl py-3.5 pl-4 pr-12 focus:outline-none focus:border-primary text-sm"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black hover:bg-opacity-90 transition-opacity">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
