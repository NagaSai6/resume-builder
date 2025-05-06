import React from "react"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Noto_Sans_Devanagari } from "next/font/google"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export default function AppSideBar() {

  return (
    <Sidebar className="bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-xl ">
      <SidebarContent className="p-4 font-aladin">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-300 uppercase text-xs tracking-wider mb-2">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
