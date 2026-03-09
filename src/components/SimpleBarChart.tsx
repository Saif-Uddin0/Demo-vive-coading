export function SimpleBarChart() {
    const data = [
        { day: "Mon", value: 150 },
        { day: "Tue", value: 280 },
        { day: "Wed", value: 190 },
        { day: "Thu", value: 190 },
        { day: "Fri", value: 290 },
        { day: "Sat", value: 110 },
    ];

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
                    {data.map((item, index) => {
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
