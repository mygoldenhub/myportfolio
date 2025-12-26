"use client"

import { useState } from "react"
import { Sidebar } from "./portfolio/sidebar"
import { TabBar } from "./portfolio/tab-bar"
import { ContentPanel } from "./portfolio/content-panel"
import { StatusBar } from "./portfolio/status-bar"
import { ActivityBar } from "./portfolio/activity-bar"
import { LandingView } from "./portfolio/landing-view"

export type TabId = "overview" | "skills" | "experience" | "education" | "projects"

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabId | null>(null) // Start with null to show landing view
  const [openTabs, setOpenTabs] = useState<TabId[]>([]) // Start with no open tabs
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleTabClick = (tab: TabId) => {
    setActiveTab(tab)
    if (!openTabs.includes(tab)) {
      setOpenTabs([...openTabs, tab])
    }
  }

  const handleCloseTab = (tab: TabId) => {
    const newTabs = openTabs.filter((t) => t !== tab)
    setOpenTabs(newTabs)
    if (activeTab === tab) {
      if (newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1])
      } else {
        setActiveTab(null)
      }
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1e1e1e] text-[#cccccc] flex flex-col">
      {/* Title Bar */}
      <div className="h-8 bg-[#323233] flex items-center px-4 text-xs border-b border-[#252526]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
        </div>
        <div className="flex-1 text-center text-[#969696]">Lukas.J — Portfolio</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Sidebar */}
        {sidebarOpen && <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {openTabs.length > 0 && (
            <TabBar openTabs={openTabs} activeTab={activeTab} onTabClick={handleTabClick} onCloseTab={handleCloseTab} />
          )}
          {activeTab === null ? <LandingView /> : <ContentPanel activeTab={activeTab} />}
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  )
}
