"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { day: "Mon", value: 150 },
    { day: "Tue", value: 280 },
    { day: "Wed", value: 190 },
    { day: "Thu", value: 190 },
    { day: "Fri", value: 290 },
    { day: "Sat", value: 110 },
    { day: "Sun", value: 230 },
];

export function ConversationChart() {
    return (
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col h-full min-h-[300px]">
            <h3 className="font-bold mb-6 text-foreground">Conversation</h3>
            <div className="flex-1 w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A2A2A" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#A0A0A0', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#A0A0A0', fontSize: 12 }}
                            domain={[0, 300]}
                            ticks={[0, 100, 200, 300]}
                        />
                        <Tooltip
                            cursor={{ fill: '#2A2A2A' }}
                            contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#2A2A2A', borderRadius: '8px' }}
                            itemStyle={{ color: '#00E55B' }}
                        />
                        <Bar
                            dataKey="value"
                            fill="#22C55E"
                            radius={[8, 8, 0, 0]}
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
