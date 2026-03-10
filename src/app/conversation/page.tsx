import Header from "@/components/Header";
import { ChatList } from "@/components/ChatList";
import { ChatArea } from "@/components/ChatArea";

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
