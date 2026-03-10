import Header from "@/components/Header";
import { LeadsTable } from "@/components/LeadsTable";

export default function LeadsPage() {
    return (
        <div className="flex flex-col h-full bg-background relative overflow-y-auto w-full">
            <Header title="" />
            <div className="p-8 pt-4 w-full max-w-[1600px] mx-auto">
                <LeadsTable />
            </div>
        </div>
    );
}
