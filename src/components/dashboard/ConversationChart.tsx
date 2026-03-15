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

// ── SimpleBarChart ─────────────────────────────────────────────────────────────
// Lightweight CSS-only bar chart (no recharts) for simple use cases
const simpleData = [
    { day: "Mon", value: 150 },
    { day: "Tue", value: 280 },
    { day: "Wed", value: 190 },
    { day: "Thu", value: 190 },
    { day: "Fri", value: 290 },
    { day: "Sat", value: 110 },
];

export function SimpleBarChart() {
    const maxValue = 300;

    return (
        <div className="bg-card p-6 rounded-xl border border-border h-[400px] flex flex-col">
            <h3 className="font-bold text-lg mb-6 shadow-sm inline-block px-3 py-1 bg-yellow-400 text-black rounded relative w-fit">
                Conversation
            </h3>

            <div className="flex-1 flex items-end justify-between relative">
                {/* Y Axis Grid lines */}
                <div className="absolute left-0 top-0 bottom-8 border-l border-border flex flex-col justify-between text-xs text-muted-foreground w-full">
                    {[300, 200, 100, 0].map((val) => (
                        <div key={val} className="flex items-center -ml-6 -mt-2">
                            <span className="w-8 text-right pr-2">{val}</span>
                        </div>
                    ))}
                </div>

                {/* Bars */}
                <div className="flex justify-between items-end w-full pl-8 h-[calc(100%-2rem)] pb-2 z-10">
                    {simpleData.map((item, index) => {
                        const heightPerc = (item.value / maxValue) * 100;
                        return (
                            <div key={index} className="flex flex-col items-center gap-3 w-10">
                                <div
                                    className="w-full bg-primary rounded-t-lg transition-all"
                                    style={{ height: `${heightPerc}%` }}
                                ></div>
                                <span className="text-muted-foreground text-sm">{item.day}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
