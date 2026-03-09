import Header from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { SimpleBarChart } from "@/components/SimpleBarChart";
import { RecentConversations } from "@/components/RecentConversations";
import { MessageSquareText, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-background relative">
      <Header title="Dashboard" />

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 lg:h-[400px]">

          {/* Main Chart Card */}
          <div className="bg-card rounded-xl border border-border p-6 flex items-center justify-center">
            {/* Placeholder for Main Logo / Illustration */}
            <div className="flex items-center gap-4 text-primary">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,229,91,0.5)]">
                <span className="text-black font-bold text-2xl">*</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground tracking-tight">LoGo</h1>
            </div>
          </div>

          {/* Stats & Bar Chart Section */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 h-1/2">
              <StatCard
                title="Total Conversations"
                value="1504"
                percentage="20.2%"
                since="From last Days"
                icon={<MessageSquareText size={16} />}
              />
              <StatCard
                title="Active Chat"
                value="547"
                percentage="30.5%"
                since="From last Days"
                icon={<Activity size={16} />}
              />
            </div>

            <div className="bg-card rounded-xl border border-border p-6 flex-1 relative overflow-hidden flex flex-col justify-end pb-0">
              <h3 className="font-bold absolute top-6 left-6 text-foreground">Conversation</h3>
              {/* Simplified Bars */}
              <div className="flex justify-between items-end w-full h-[150px] mb-[-4px] z-10">
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[50%] opacity-80" />
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[90%]" />
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[60%] opacity-80" />
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[60%] opacity-80" />
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[100%]" />
                <div className="w-8 bg-primary rounded-t flex-1 max-w-[40px] h-[35%] opacity-70" />
              </div>

              <div className="flex justify-between w-full pb-4 text-xs mt-2 text-muted-foreground">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </div>
        </div>

        <RecentConversations />
      </div>
    </div>
  );
}
