import Header from "@/components/shared/Header";
import { AgentMessageSetup, ToneAndPersonality } from "@/components/agent-manage/AgentMessageSetup";

export default function AgentManagePage() {
    return (
        <div className="flex flex-col h-full bg-background relative overflow-y-auto w-full">
            <Header title="Agent Manage" />
            <div className="flex-1 p-6 lg:p-10">
                <div className="max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AgentMessageSetup />
                    <ToneAndPersonality />
                </div>
            </div>
        </div>
    );
}
