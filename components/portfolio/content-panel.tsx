import type { TabId } from "../portfolio"
import { OverviewContent } from "./content/overview"
import { SkillsContent } from "./content/skills"
import { ExperienceContent } from "./content/experience"
import { EducationContent } from "./content/education"
import { ProjectsContent } from "./content/projects"

interface ContentPanelProps {
  activeTab: TabId
}

export function ContentPanel({ activeTab }: ContentPanelProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />
      case "skills":
        return <SkillsContent />
      case "experience":
        return <ExperienceContent />
      case "education":
        return <EducationContent />
      case "projects":
        return <ProjectsContent />
      default:
        return <OverviewContent />
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-[#1e1e1e] p-8">
      <div className="max-w-4xl mx-auto">{renderContent()}</div>
    </div>
  )
}
