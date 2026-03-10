const TRENDING_DATA = [
    { id: "01", name: "Easy Cheese", price: "$599", queries: 845 },
    { id: "02", name: "Magnetic Paper Clip", price: "$445", queries: 754 },
    { id: "03", name: "Secret Stadium Sauce", price: "$685", queries: 726 },
    { id: "04", name: "Teriyaki sauce", price: "$544", queries: 640 },
    { id: "05", name: "Doritos", price: "$487", queries: 627 },
    { id: "06", name: "Ruffles", price: "$845", queries: 574 },
    { id: "07", name: "Nutella", price: "$475", queries: 427 },
];

export function TrendingProducts() {
    return (
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-foreground">Trending Products</h3>

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
