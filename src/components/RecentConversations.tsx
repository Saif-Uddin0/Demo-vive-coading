import { Search, MessageSquare } from "lucide-react";

const DATA = [
    { id: "01", name: "Jane Cooper", product: "Sesame oil", platform: "Instagram", platformColor: "bg-pink-500/10 text-pink-500" },
    { id: "02", name: "Jacob Jones", product: "Doritos", platform: "Facebook", platformColor: "bg-blue-500/10 text-blue-500" },
    { id: "03", name: "Dianne Russell", product: "Teriyaki sauce", platform: "Instagram", platformColor: "bg-pink-500/10 text-pink-500" },
    { id: "04", name: "Theresa Webb", product: "Magnetic Paper Clip", platform: "What's App", platformColor: "bg-green-500/10 text-green-500" },
];

export function RecentConversations() {
    return (
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col mt-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold bg-primary text-primary-foreground px-4 py-1.5 rounded-md inline-block">
                    Recent Conversation
                </h2>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-background border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-primary text-sm"
                    />
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-muted-foreground border-b border-border/50">
                            <th className="font-medium pb-4 pl-4 font-mono">#</th>
                            <th className="font-medium pb-4">Name</th>
                            <th className="font-medium pb-4">Interested Product</th>
                            <th className="font-medium pb-4">Platform</th>
                            <th className="font-medium pb-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DATA.map((row) => (
                            <tr key={row.id} className="border-b border-border/20 hover:bg-muted/30 transition-colors">
                                <td className="py-4 pl-4 text-muted-foreground font-mono">{row.id}</td>
                                <td className="py-4 font-medium">{row.name}</td>
                                <td className="py-4 text-muted-foreground">{row.product}</td>
                                <td className="py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.platformColor}`}>
                                        {row.platform}
                                    </span>
                                </td>
                                <td className="py-4 text-muted-foreground">
                                    <button className="p-2 hover:bg-muted rounded-full transition-colors relative group">
                                        <MessageSquare size={18} />
                                        <span className="absolute right-2 top-2 w-2 h-2 rounded-full border border-card bg-foreground"></span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
