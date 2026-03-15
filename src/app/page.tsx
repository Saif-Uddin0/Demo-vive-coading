import Header from "@/components/shared/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { ConversationChart } from "@/components/dashboard/ConversationChart";
import { PlatformDistribution } from "@/components/dashboard/PlatformDistribution";
import { RecentConversations } from "@/components/dashboard/RecentConversations";
import { TrendingProducts } from "@/components/dashboard/TrendingProducts";
import { MessageSquareText, Activity, Users, UserPlus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-background relative">
      <Header title="Dashboard" />

      <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* 4 Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Conversations"
            value="1504"
            percentage="20.2%"
            since="From last Days"
            icon={<MessageSquareText size={20} />}
          />
          <StatCard
            title="Active Chat"
            value="547"
            percentage="30.5%"
            since="From last Days"
            icon={<Activity size={20} />}
          />
          <StatCard
            title="Total Leads"
            value="354"
            percentage="5.2%"
            since="From last Days"
            icon={<Users size={20} />}
          />
          <StatCard
            title="Potential Customers"
            value="571"
            percentage="2.2%"
            since="From last Days"
            icon={<UserPlus size={20} />}
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
