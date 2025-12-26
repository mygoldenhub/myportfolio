"use client"

import type React from "react"

import { X, FileText } from "lucide-react"
import type { TabId } from "../portfolio"

interface TabBarProps {
  openTabs: TabId[]
  activeTab: TabId | null
  onTabClick: (tab: TabId) => void
  onCloseTab: (tab: TabId) => void
}

const tabLabels: Record<TabId, string> = {
  overview: "overview.md",
  skills: "skills.md",
  experience: "experience.md",
  education: "education.md",
  projects: "projects.md",
}

export function TabBar({ openTabs, activeTab, onTabClick, onCloseTab }: TabBarProps) {
  const handleMiddleClick = (e: React.MouseEvent, tab: TabId) => {
    if (e.button === 1) {
      e.preventDefault()
      e.stopPropagation()
      onCloseTab(tab)
    }
  }

  return (
    <div className="h-9 bg-[#252526] flex items-end border-b border-[#1e1e1e] overflow-x-auto">
      {openTabs.map((tab) => (
        <div
          key={tab}
          onClick={() => onTabClick(tab)}
          onMouseDown={(e) => handleMiddleClick(e, tab)}
          className={`h-full flex items-center gap-2 px-3 text-xs cursor-pointer border-r border-[#1e1e1e] ${
            activeTab === tab
              ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
              : "bg-[#2d2d2d] text-[#969696] hover:bg-[#2d2d2d]"
          }`}
        >
          <FileText size={14} className="text-[#519aba]" />
          <span>{tabLabels[tab]}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onCloseTab(tab)
            }}
            className="ml-1 p-0.5 rounded hover:bg-[#3c3c3c]"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
