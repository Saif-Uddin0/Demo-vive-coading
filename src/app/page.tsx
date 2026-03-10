import Header from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { ConversationChart } from "@/components/ConversationChart";
import { PlatformDistribution } from "@/components/PlatformDistribution";
import { RecentConversations } from "@/components/RecentConversations";
import { TrendingProducts } from "@/components/TrendingProducts";
import { MessageSquareText, Activity, Users, UserPlus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-background relative">
      <Header title="Dashboard" />

      <div className="flex-1 p-8 overflow-y-auto">
        {/* 4 Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
          <StatCard
            title="Total Leads"
            value="354"
            percentage="19.2%"
            since="From last Days"
            icon={<Users size={16} />}
          />
          <StatCard
            title="Potential Leads"
            value="571"
            percentage="12.2%"
            since="From last Days"
            icon={<UserPlus size={16} />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ConversationChart />
          </div>
          <div className="lg:col-span-1">
            <PlatformDistribution />
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentConversations />
          <TrendingProducts />
        </div>
      </div>
    </div>
  );
}
