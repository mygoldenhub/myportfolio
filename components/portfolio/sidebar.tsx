"use client"

import { ChevronDown, FileText } from "lucide-react"
import type { TabId } from "../portfolio"
import Image from "next/image"

interface SidebarProps {
  activeTab: TabId | null
  onTabClick: (tab: TabId) => void
}

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "overview.md" },
  { id: "skills", label: "skills.md" },
  { id: "experience", label: "experience.md" },
  { id: "education", label: "education.md" },
  { id: "projects", label: "projects.md" },
]

export function Sidebar({ activeTab, onTabClick }: SidebarProps) {
  return (
    <div className="w-64 bg-[#252526] flex flex-col border-r border-[#1e1e1e]">
      {/* Explorer Header */}
      <div className="px-4 py-2 text-xs font-semibold text-[#bbbbbb] uppercase tracking-wider">Explorer</div>

      {/* Portfolio Folder */}
      <div className="px-2">
        <div className="flex items-center gap-1 py-1 text-xs text-[#cccccc] hover:bg-[#2a2d2e] px-2 cursor-pointer">
          <ChevronDown size={16} />
          <span>Lukas Jam</span>
        </div>

        {/* Files */}
        <div className="ml-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`w-full flex items-center gap-2 py-1 px-2 text-xs text-left hover:bg-[#2a2d2e] ${
                activeTab === tab.id ? "bg-[#37373d]" : ""
              }`}
            >
              <FileText size={14} className="text-[#519aba]" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-[#1e1e1e]">
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatar.jpg"
            alt="Lukas Jam"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium text-white">Lukas Jam</h3>
            <p className="text-xs text-[#858585]">Full Stack AI Automation Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
