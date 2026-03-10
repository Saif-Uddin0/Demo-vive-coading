"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "What's App", value: 52.1, color: "#00E55B" },
    { name: "Instagram", value: 22.8, color: "#EC4899" },
    { name: "Facebook", value: 13.9, color: "#3B82F6" },
];

export function PlatformDistribution() {
    return (
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col h-full">
            <h3 className="font-bold mb-6 text-foreground">Platform Distribution</h3>
            <div className="flex-1 flex items-center justify-between">
                <div className="w-[180px] h-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#2A2A2A', borderRadius: '8px' }}
                                itemStyle={{ color: '#F1F1F1' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-4">
                    {data.map((item) => (
                        <div key={item.name} className="flex items-center justify-between gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-muted-foreground">{item.name}</span>
                            </div>
                            <span className="font-medium">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
