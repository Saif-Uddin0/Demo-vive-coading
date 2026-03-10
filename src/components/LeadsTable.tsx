"use client";

import { Search, Filter, Download, MessageSquareText, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

// Platform styles matching the Figma reference
const PLATFORMS = {
    whatsapp: { name: "What's App", style: "text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20" },
    instagram: { name: "Instagram", style: "text-[#C2546D] bg-[#C2546D]/10 border border-[#C2546D]/20" },
    facebook: { name: "Facebook", style: "text-[#4D90FE] bg-[#4D90FE]/10 border border-[#4D90FE]/20" },
};

const DATA = [
    { id: "01", name: "Jane Cooper", product: "Sesame oil", date: "March 13, 2014", platform: PLATFORMS.instagram },
    { id: "02", name: "Jacob Jones", product: "Doritos", date: "April 28, 2016", platform: PLATFORMS.facebook },
    { id: "03", name: "Dianne Russell", product: "Teriyaki sauce", date: "May 12, 2019", platform: PLATFORMS.instagram },
    { id: "04", name: "Theresa Webb", product: "Magnetic Paper Clip", date: "February 29, 2012", platform: PLATFORMS.whatsapp },
    { id: "05", name: "Courtney Henry", product: "Popcorn seasoning", date: "October 30, 2017", platform: PLATFORMS.facebook },
    { id: "06", name: "Kathryn Murphy", product: "Nutella", date: "February 28, 2018", platform: PLATFORMS.instagram },
    { id: "08", name: "Eleanor Pena", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.facebook },
    { id: "09", name: "Brooklyn Simmons", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.facebook },
    { id: "10", name: "Bessie Cooper", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.whatsapp },
    { id: "11", name: "Floyd Miles", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.facebook },
    { id: "12", name: "Darrell Steward", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.facebook },
    { id: "13", name: "Dianne Russell", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.whatsapp },
    { id: "14", name: "Jacob Jones", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.facebook },
    { id: "15", name: "Arlene McCoy", product: "Easy Cheese", date: "March 23, 2013", platform: PLATFORMS.instagram },
];

export function LeadsTable() {
    return (
        <div className="bg-card rounded-[24px] p-8 w-full">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Leads</h1>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-[#111111] border border-border rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-primary text-sm w-full sm:w-64"
                        />
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-transparent text-sm font-medium hover:bg-muted/50 transition-colors">
                        <Filter size={18} className="text-muted-foreground" />
                        Filters
                    </button>

                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-black text-sm font-semibold hover:bg-primary/90 transition-opacity whitespace-nowrap">
                        <Download size={18} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead>
                        <tr className="border-b border-border/50 bg-[#131A15]">
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground rounded-tl-xl w-[5%]">#</th>
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground w-[20%]">Name</th>
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground w-[25%]">Interested Product</th>
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground w-[20%]">Date</th>
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground w-[15%]">Platform</th>
                            <th className="py-4 px-6 text-sm font-medium text-muted-foreground rounded-tr-xl w-[15%]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                        {DATA.map((row) => (
                            <tr key={row.id} className="hover:bg-muted/30 transition-colors group">
                                <td className="py-4 px-6 text-sm text-muted-foreground">
                                    {row.id}
                                </td>
                                <td className="py-4 px-6 text-sm text-foreground">
                                    {row.name}
                                </td>
                                <td className="py-4 px-6 text-sm text-muted-foreground">
                                    {row.product}
                                </td>
                                <td className="py-4 px-6 text-sm text-muted-foreground">
                                    {row.date}
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium ${row.platform.style}`}>
                                        {row.platform.name}
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <button className="text-muted-foreground hover:text-white transition-colors">
                                            <MessageSquareText size={18} />
                                        </button>
                                        <button className="text-red-500/70 hover:text-red-400 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                    Showing 1 to 15 of 120 entries
                </span>

                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                        Previous
                    </button>

                    <button className="w-10 h-10 rounded-xl bg-transparent border border-border flex items-center justify-center text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-primary text-black flex items-center justify-center text-sm font-bold shadow-sm">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-transparent border border-border flex items-center justify-center text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                        3
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-transparent border border-border flex items-center justify-center text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                        4
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-transparent border border-border flex items-center justify-center text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                        5
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-primary text-black text-sm font-semibold hover:bg-primary/90 transition-opacity ml-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
