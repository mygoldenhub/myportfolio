export function SkillsContent() {
  const skillCategories = [
    {
      title: "Full Stack & Backend Development",
      skills: [
        "React",
        "JavaScript",
        "Next.js",
        "TypeScript",
        "AngularJS",
        "Vue.js",
        "Python",
        "Laravel",
        "PHP",
        "Node.js",
        "React Native",
        "FastAPI",
        "Flask",
        "Express.js",
        "REST API",
        "OAuth",
        "Webhooks",
        "Microservices",
      ],
      color: "#007acc",
    },
    {
      title: "AI & Automation",
      skills: [
        "AI Chatbots",
        "OpenAI",
        "Custom LLMs",
        "AI Agents",
        "Autonomous Workflow Systems",
        "NLP",
        "Embeddings",
        "Vector DB Pipelines",
        "Zapier",
        "n8n",
        "Make.com",
        "CRM Workflow Automation",
        "Zoho",
        "HubSpot",
      ],
      color: "#4ec9b0",
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "GCP",
        "Docker",
        "CI/CD",
        "Serverless Architectures",
        "Scalable Infrastructure",
        "API Optimization",
      ],
      color: "#ce9178",
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Git", "AWS", "Vercel", "Postman", "Figma"],
      color: "#dcdcaa",
    },
    {
      title: "SaaS & Integrations",
      skills: [
        "SaaS API Integration",
        "Sync Systems",
        "AI-Powered Web Apps",
        "AI-Powered Mobile Apps",
        "Multi-Platform Automation Pipelines",
      ],
      color: "#c586c0",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Skills & Technologies</h1>
        <p className="text-[#858585]">Technical expertise across the full development stack</p>
      </div>

      {skillCategories.map((category) => (
        <div key={category.title} className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
          <h2 className="text-lg font-semibold mb-4" style={{ color: category.color }}>
            <span className="text-[#569cd6]">{"// "}</span>
            {category.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#3c3c3c] rounded-md text-sm text-[#d4d4d4] hover:bg-[#4c4c4c] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
