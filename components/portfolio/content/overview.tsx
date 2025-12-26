import Image from "next/image"

export function OverviewContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start gap-6">
        <Image
          src="/avatar.jpg"
          alt="Lukas Jam"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-[#007acc]"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Lukas Jam</h1>
          <p className="text-xl text-[#007acc] mb-4">Full Stack AI Automation Developer</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/mygoldenhub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#333333] rounded-md hover:bg-[#404040] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
        <h2 className="text-lg font-semibold text-[#4ec9b0] mb-4 flex items-center gap-2">
          <span className="text-[#569cd6]">{"#"}</span> Summary
        </h2>
        <p className="text-[#d4d4d4] leading-relaxed">
          Full Stack AI Developer with <span className="text-[#ce9178]">7+ years</span> of experience designing
          automation systems, AI platforms, chatbots, and full-stack applications across startups, SMEs, and enterprise
          environments. I specialize in <span className="text-[#4ec9b0]">AI agent development</span>, AI-driven mobile &
          web apps, <span className="text-[#4ec9b0]">CRM automation</span>, and end-to-end workflow orchestration using
          tools like OpenAI, Zapier, n8n, Make.com, Zoho, HubSpot, and custom API pipelines.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#252526] rounded-lg p-4 border border-[#3c3c3c]">
          <div className="text-2xl font-bold text-[#007acc]">7+</div>
          <div className="text-sm text-[#858585]">Years Experience</div>
        </div>
        <div className="bg-[#252526] rounded-lg p-4 border border-[#3c3c3c]">
          <div className="text-2xl font-bold text-[#4ec9b0]">AI & Automation</div>
          <div className="text-sm text-[#858585]">Primary Focus</div>
        </div>
        <div className="bg-[#252526] rounded-lg p-4 border border-[#3c3c3c]">
          <div className="text-2xl font-bold text-[#ce9178]">Full Stack</div>
          <div className="text-sm text-[#858585]">Development Expertise</div>
        </div>
      </div>

      {/* Contact Info - Added email to contact section */}
      <div className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
        <h2 className="text-lg font-semibold text-[#4ec9b0] mb-4 flex items-center gap-2">
          <span className="text-[#569cd6]">{"#"}</span> Contact
        </h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">email:</span>
            <a href="mailto:earthbreaker0718@gmail.com" className="text-[#ce9178] hover:underline">
              "earthbreaker0718@gmail.com"
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">location:</span>
            <span className="text-[#ce9178]">"Germany"</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">languages:</span>
            <span className="text-[#ce9178]">"English (Advanced)"</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">availability:</span>
            <span className="text-[#ce9178]">"Full time"</span>
          </p>
        </div>
      </div>

      <div className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
        <h2 className="text-lg font-semibold text-[#4ec9b0] mb-4 flex items-center gap-2">
          <span className="text-[#569cd6]">{"#"}</span> Education
        </h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">university:</span>
            <span className="text-[#ce9178]">"Technical University of Berlin"</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">degree:</span>
            <span className="text-[#ce9178]">"Bachelor of Science in Computer Science"</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">duration:</span>
            <span className="text-[#ce9178]">"2014 – 2018"</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#569cd6]">country:</span>
            <span className="text-[#ce9178]">"Germany"</span>
          </p>
        </div>
      </div>
    </div>
  )
}
