import Header from "@/components/shared/Header";
import { ChatList } from "@/components/conversation/ChatList";
import { ChatArea } from "@/components/conversation/ChatArea";

export default function ConversationPage() {
    return (
        <div className="flex flex-col h-full bg-background relative">
            <Header title="Conversation" />
            <div className="flex-1 flex overflow-hidden">
                <ChatList />
                <ChatArea />
            </div>
        </div>
    );
}
