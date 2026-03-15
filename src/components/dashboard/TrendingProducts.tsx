"use client";

import { Download } from "lucide-react";

const TRENDING_DATA = [
    { id: "01", name: "Easy Cheese", price: "$599", queries: 845 },
    { id: "02", name: "Magnetic Paper Clip", price: "$440", queries: 754 },
    { id: "03", name: "Secret Stadium Sauce", price: "$485", queries: 726 },
    { id: "04", name: "Teriyaki sauce", price: "$544", queries: 640 },
    { id: "05", name: "Doritos", price: "$487", queries: 627 },
    { id: "06", name: "Ruffles", price: "$845", queries: 574 },
    { id: "07", name: "Nutella", price: "$475", queries: 427 },
];

export function TrendingProducts() {
    const handleExportCSV = () => {
        const headers = ["ID", "Product Name", "Prices", "Customer Queries"];
        const csvRows = TRENDING_DATA.map(row => {
            return [
                row.id,
                `"${row.name}"`,
                `"${row.price}"`,
                row.queries
            ].join(",");
        });
        const csvContent = [headers.join(","), ...csvRows].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "trending_products.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-card rounded-2xl border border-border p-6 flex flex-col mt-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-foreground">Trending Products</h3>
                <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                    <Download size={14} />
                    Export CSV
                </button>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-muted-foreground border-b border-border/50">
                            <th className="font-medium pb-4 pl-4 font-mono w-16">#</th>
                            <th className="font-medium pb-4">Product Name</th>
                            <th className="font-medium pb-4 text-center">Prices</th>
                            <th className="font-medium pb-4 text-right pr-4">Customer Queries</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TRENDING_DATA.map((row) => (
                            <tr key={row.id} className="border-b border-border/20 hover:bg-muted/30 transition-colors">
                                <td className="py-4 pl-4 text-muted-foreground font-mono">{row.id}</td>
                                <td className="py-4 font-medium">{row.name}</td>
                                <td className="py-4 text-center text-muted-foreground">{row.price}</td>
                                <td className="py-4 text-right pr-4 text-muted-foreground">{row.queries}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
