"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "What's App", value: 52.0, color: "#22C55E" },
    { name: "Instagram", value: 25.0, color: "#E1306C" },
    { name: "Facebook", value: 15.0, color: "#1877F2" },
    { name: "Messenger", value: 8.0, color: "#0EA5E9" },
];

export function PlatformDistribution() {
    return (
        <div className="bg-card rounded-2xl border border-border p-6 flex flex-col h-full">
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
