export function EducationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Education</h1>
        <p className="text-[#858585]">Academic background and qualifications</p>
      </div>

      <div className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#4ec9b0]">Bachelor of Science in Computer Science</h2>
            <p className="text-[#007acc]">Technical University of Berlin</p>
            <p className="text-sm text-[#858585]">Germany</p>
          </div>
          <span className="px-3 py-1 bg-[#3c3c3c] rounded-md text-sm text-[#ce9178]">2014 - 2018</span>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex items-start gap-2 text-sm text-[#d4d4d4]">
            <span className="text-[#569cd6]">{"•"}</span>
            <span>Focus: Software Engineering, Algorithms, Automation</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-[#d4d4d4]">
            <span className="text-[#569cd6]">{"•"}</span>
            <span>Early AI coursework & workflow automation</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-[#d4d4d4]">
            <span className="text-[#569cd6]">{"•"}</span>
            <span>Built foundational backend + API integration systems</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-[#d4d4d4]">
            <span className="text-[#569cd6]">{"•"}</span>
            <span>Built high-quality, scalable frontend applications</span>
          </div>
        </div>
      </div>

    </div>
  )
}
