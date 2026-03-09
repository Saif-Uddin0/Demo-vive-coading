import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    percentage: string;
    since: string;
    icon?: React.ReactNode;
}

export function StatCard({ title, value, percentage, since, icon }: StatCardProps) {
    return (
        <div className="bg-card p-6 rounded-xl border border-border flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground font-medium">{title}</h3>
                {icon && (
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary">
                        {icon}
                    </div>
                )}
            </div>
            <div className="text-4xl font-bold">{value}</div>
            <div className="flex items-center gap-2 text-sm">
                <span className="flex items-center text-primary bg-primary/10 px-2 py-0.5 rounded font-medium">
                    {percentage} <ArrowUpRight size={14} className="ml-1" />
                </span>
                <span className="text-muted-foreground">{since}</span>
            </div>
        </div>
    );
}
