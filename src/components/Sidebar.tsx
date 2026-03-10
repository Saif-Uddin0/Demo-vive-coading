"use client";

import Link from "next/link";
import { LayoutDashboard, MessageSquare, Users, Settings, ShieldAlert, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Conversation", href: "/conversation", icon: MessageSquare },
    { name: "Leads", href: "/leads", icon: Users },
    { name: "Agent Manage", href: "/agent-manage", icon: Settings },
    { name: "Admin Manage", href: "/admin-manage", icon: ShieldAlert },
  ];

  return (
    <div className="w-[260px] bg-background h-screen flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        <div className="p-8 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-bold tracking-tight">Swich</span>
        </div>
        <nav className="mt-4 flex flex-col gap-1 px-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-colors text-sm ${isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 px-8 mb-8">
        <button className="flex items-center gap-4 text-muted-foreground hover:text-red-400 font-medium transition-colors text-sm w-full">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
