import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    percentage: string;
    since: string;
    icon?: React.ReactNode;
}

export function StatCard({ title, value, percentage, since, icon }: StatCardProps) {
    const isUp = percentage.includes("Up") || Number.parseFloat(percentage) > 0 || !title.includes("Total Leads"); // from Figma, Total leads is down

    return (
        <div className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground font-medium">{title}</h3>
                {icon && (
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary bg-background">
                        {icon}
                    </div>
                )}
            </div>

            <div className="text-4xl font-bold tracking-tight">{value}</div>

            <div className="flex items-center gap-2 text-sm mt-2">
                <span className={`flex items-center px-2 py-0.5 rounded font-medium ${isUp ? 'text-primary bg-primary/10' : 'text-red-500 bg-red-500/10'}`}>
                    {percentage} {isUp ? <ArrowUpRight size={14} className="ml-1" /> : <ArrowDownRight size={14} className="ml-1" />}
                </span>
                <span className="text-muted-foreground">{since}</span>
            </div>
        </div>
    );
}
