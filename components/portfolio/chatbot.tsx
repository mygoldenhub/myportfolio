"use client"

import type React from "react"

import { useRef, useEffect, useState, useCallback } from "react"
import { X, Send, Bot, User } from "lucide-react"

interface ChatbotProps {
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const lukasKnowledge = {
  name: "Lukas Jam",
  title: "Full Stack AI Automation Developer",
  location: "Germany",
  email: "earthbreaker0718@gmail.com",
  github: "https://github.com/mygoldenhub",
  discord: "https://discord.com/users/1453085290183917835",
  experience: "7+ years",
  availability: "Full time",

  summary: `Full Stack AI Developer with 7+ years of experience designing automation systems, AI platforms, chatbots, and full-stack applications across startups, SMEs, and enterprise environments. Specializes in AI agent development, AI-driven mobile & web apps, CRM automation, and end-to-end workflow orchestration using tools like OpenAI, Zapier, n8n, Make.com, Zoho, HubSpot, and custom API pipelines.`,

  education: {
    university: "Technical University of Berlin",
    degree: "Bachelor of Science in Computer Science",
    duration: "2014 – 2018",
    country: "Germany",
    focus: "Software Engineering, Algorithms, Automation",
    highlights: [
      "Early AI coursework & workflow automation",
      "Built foundational backend + API integration systems",
      "Built a high-quality, scalable frontend",
    ],
  },

  skills: {
    fullstack: [
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
    ai: [
      "AI Chatbots",
      "OpenAI",
      "Custom LLMs",
      "AI Agents",
      "Autonomous Workflow Systems",
      "NLP",
      "Embeddings",
      "Vector DB Pipelines",
      "RAG Pipelines",
      "Prompt Engineering",
      "LLM Fine-tuning",
    ],
    automation: ["Zapier", "n8n", "Make.com", "Automation Design", "CRM Workflow Automation", "Zoho", "HubSpot"],
    cloud: ["AWS", "GCP", "Docker", "CI/CD", "Serverless Architectures", "Scalable Infrastructure", "API Optimization"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Git", "Docker", "AWS", "Vercel", "Postman", "Figma"],
    saas: [
      "SaaS API Integration",
      "Sync Systems",
      "AI-Powered Web Apps",
      "AI-Powered Mobile Apps",
      "Multi-Platform Automation Pipelines",
    ],
  },

  workExperience: [
    {
      role: "Full Stack AI & Automation Engineer",
      company: "Gain Energy",
      location: "United States (Remote)",
      period: "2024 - 2025",
      highlights: [
        "Architected an AI agent platform that automated geological analysis, drilling optimization, and operational intelligence for oil & gas companies",
        "Built multi-agent systems using LLMs (GPT, Claude, custom RAG pipelines) to interpret unstructured field data, documents, and sensor logs",
        "Developed automation workflows to collect, clean, and classify engineering data from PDFs, reports, SCADA systems, and external APIs",
        "Integrated geospatial analysis tools and ML models for predictive maintenance and extraction efficiency forecasting",
        "Delivered secure cloud architecture using AWS (ECS, Lambda, DynamoDB, KMS) with enterprise-grade IAM and audit logging",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Butterflies.AI",
      location: "United States (Remote)",
      period: "2023 - 2024",
      highlights: [
        "Developed core backend automation workflows powering an AI-generated social platform",
        "Built AI agent pipelines using OpenAI GPT models to simulate human-like conversations",
        "Designed scalable microservices for content generation, media rendering, user feed ranking",
        "Implemented web scraping tools for trend extraction, sentiment analysis",
        "Integrated distributed task queues and serverless jobs (Google Cloud Functions, Cloud Tasks)",
        "Optimized prompt engineering and fine-tuned LLMs for distinct personalities",
      ],
    },
    {
      role: "Full Stack Software Developer",
      company: "Freedom Property Investors",
      location: "Australia",
      period: "2022 - 2023",
      highlights: [
        "Built an AI-powered member care management platform that automated customer communication",
        "Integrated LLM-driven assistants to handle FAQs, schedule calls, and route inquiries",
        "Developed backend automation pipelines (Python and Node.js) for lead qualification",
        "Implemented data extraction tools to analyze property reports and market insights",
        "Deployed cloud services on GCP for secure data handling and scalability",
      ],
    },
    {
      role: "Automation & AI Developer",
      company: "Human Pixel",
      location: "Australia",
      period: "2021 - 2022",
      highlights: [
        "Designed and implemented end-to-end automation solutions for web scraping and data extraction",
        "Built web scraping tools using Python, Selenium, and BeautifulSoup",
        "Developed cloud-native automation systems on AWS (Lambda, S3, EC2)",
        "Integrated machine learning models for scoring, sentiment analysis, and market trend prediction",
      ],
    },
    {
      role: "Full Stack Software Developer",
      company: "Klarna AB",
      location: "Sweden",
      period: "2020 - 2021",
      highlights: [
        "Created a Firebase cloud-function backend with Node.js for the Ellipsis mobile app",
        "Built a front-end visualization dashboard with Vue.js, chart.js, and D3",
        "Constructed an automatic voice call center using Twilio and Node.js with NLP API",
        "Created a React front-end admin dashboard for complex table data visualization",
        "Used Google Cloud Platform heavily (Google Storage, BigQuery, Speech-to-Text API, Firebase)",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Siemens",
      location: "Germany",
      period: "2019 - 2020",
      highlights: [
        "Front and Back End development in various projects",
        "Converting mockups into HTML/CSS using Bootstrap, JavaScript, jQuery, Canvas",
        "Creating interactive websites and landing pages with parallax effects",
        "Working with different frameworks and libraries",
        "Teamwork with other developers",
      ],
    },
  ],

  languages: ["English (Advanced)"],
}

const greetingResponses = [
  `Hello! I'm Lukas's AI assistant. I have comprehensive knowledge about his background, skills, and experience. What would you like to know about him?`,
  `Hi there! Great to meet you. I can tell you all about Lukas Jam - his 7+ years of experience, his AI & automation expertise, projects, education, and more. What interests you?`,
  `Welcome! I'm here to help you learn about Lukas. He's a Full Stack AI Automation Developer with expertise in AI agents, LLMs, and workflow orchestration. Ask me anything!`,
  `Hey! I'd be happy to share information about Lukas Jam. I know about his work history, technical skills, education at Technical University of Berlin, and current projects. What would you like to explore?`,
  `Greetings! I'm Lukas's virtual assistant. I can discuss his experience at companies like Gain Energy, Butterflies.AI, Klarna, and Siemens, or his skills in AI, automation, and full-stack development. What's on your mind?`,
]

function generateResponse(query: string): string {
  const q = query.toLowerCase()

  // Greetings - varied responses
  if (q.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|what's up|howdy)/)) {
    return greetingResponses[Math.floor(Math.random() * greetingResponses.length)]
  }

  // Name/Who questions
  if (q.match(/who is|who's|tell me about lukas|introduce|about him|about lukas/)) {
    const responses = [
      `**${lukasKnowledge.name}** is a ${lukasKnowledge.title} based in ${lukasKnowledge.location} with ${lukasKnowledge.experience} of professional experience.\n\n${lukasKnowledge.summary}\n\nHe graduated from **${lukasKnowledge.education.university}** with a ${lukasKnowledge.education.degree} (${lukasKnowledge.education.duration}).`,
      `Let me introduce you to **Lukas Jam**!\n\nHe's a seasoned ${lukasKnowledge.title} who has spent ${lukasKnowledge.experience} building AI agents, automation systems, and full-stack applications.\n\n**Education:** ${lukasKnowledge.education.degree} from ${lukasKnowledge.education.university}\n\n**Current Focus:** AI agent development, RAG pipelines, CRM automation, and workflow orchestration with tools like OpenAI, n8n, Zapier, and Make.com.`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Education questions
  if (q.match(/education|university|degree|study|studied|school|college|academic/)) {
    return `**Education**\n\n🎓 **${lukasKnowledge.education.university}**\n📜 ${lukasKnowledge.education.degree}\n📅 ${lukasKnowledge.education.duration}\n🌍 ${lukasKnowledge.education.country}\n\n**Focus Areas:**\n${lukasKnowledge.education.highlights.map((h) => `• ${h}`).join("\n")}\n\nHis education provided a strong foundation in software engineering, algorithms, and automation that he's built upon throughout his career.`
  }

  // Contact information
  if (q.match(/contact|email|reach|get in touch|hire|connect|discord|github/)) {
    const responses = [
      `You can reach Lukas through multiple channels:\n\n📧 **Email:** ${lukasKnowledge.email}\n🐙 **GitHub:** ${lukasKnowledge.github}\n💬 **Discord:** ${lukasKnowledge.discord}\n\nHe's currently available for **${lukasKnowledge.availability}** opportunities and would love to hear from you!`,
      `Here's how to connect with Lukas:\n\n**Email:** ${lukasKnowledge.email}\n**GitHub:** ${lukasKnowledge.github}\n**Discord:** ${lukasKnowledge.discord}\n\n**Availability:** ${lukasKnowledge.availability} - He's open to exciting AI and automation projects!`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Skills - AI specific
  if (q.match(/ai|artificial intelligence|machine learning|ml|llm|gpt|openai|chatbot|agent|rag/)) {
    return `**AI & Machine Learning Expertise**\n\n🤖 **AI Technologies:**\n${lukasKnowledge.skills.ai.map((s) => `• ${s}`).join("\n")}\n\nLukas specializes in building **multi-agent systems** using LLMs (GPT, Claude), implementing **RAG pipelines** for unstructured data, and creating **AI-powered automation platforms**.\n\nAt Gain Energy, he architected an AI agent platform for geological analysis. At Butterflies.AI, he built AI pipelines for autonomous content creation with persona-based conversations.`
  }

  // Skills - Automation
  if (q.match(/automation|workflow|n8n|zapier|make\.com|integrate|orchestr/)) {
    return `**Automation & Workflow Expertise**\n\n⚡ **Automation Tools:**\n${lukasKnowledge.skills.automation.map((s) => `• ${s}`).join("\n")}\n\n**SaaS & Integration:**\n${lukasKnowledge.skills.saas.map((s) => `• ${s}`).join("\n")}\n\nLukas builds end-to-end workflow orchestration systems, connecting APIs and services to automate complex business processes. He's implemented CRM automation for companies using Zoho, HubSpot, and custom solutions.`
  }

  // Skills - Frontend
  if (q.match(/frontend|front-end|react|next|vue|angular|ui|interface|css|tailwind/)) {
    const frontendSkills = lukasKnowledge.skills.fullstack.filter((s) =>
      ["React", "JavaScript", "Next.js", "TypeScript", "AngularJS", "Vue.js", "React Native"].includes(s),
    )
    return `**Frontend Development Skills**\n\n🎨 **Technologies:**\n${frontendSkills.map((s) => `• ${s}`).join("\n")}\n\nLukas builds modern, responsive interfaces with a focus on performance and UX. He's created admin dashboards with Vue.js and D3, React applications with complex data visualization, and mobile apps with React Native.`
  }

  // Skills - Backend
  if (q.match(/backend|back-end|server|api|node|python|database|cloud/)) {
    return `**Backend & Cloud Expertise**\n\n⚙️ **Backend:**\n${lukasKnowledge.skills.fullstack
      .filter((s) =>
        [
          "Python",
          "Node.js",
          "FastAPI",
          "Flask",
          "Express.js",
          "Laravel",
          "PHP",
          "REST API",
          "OAuth",
          "Webhooks",
          "Microservices",
        ].includes(s),
      )
      .map((s) => `• ${s}`)
      .join("\n")}\n\n💾 **Databases:**\n${lukasKnowledge.skills.database
      .slice(0, 3)
      .map((s) => `• ${s}`)
      .join(
        "\n",
      )}\n\n☁️ **Cloud & DevOps:**\n${lukasKnowledge.skills.cloud.map((s) => `• ${s}`).join("\n")}\n\nLukas designs scalable architectures on AWS and GCP with serverless functions, containerized deployments, and robust API systems.`
  }

  // Skills - General
  if (q.match(/skill|tech|stack|expertise|know|capable|proficient|what can/)) {
    return `**Technical Skills Overview**\n\n🤖 **AI/ML:** ${lukasKnowledge.skills.ai.slice(0, 5).join(", ")}\n\n⚡ **Automation:** ${lukasKnowledge.skills.automation.slice(0, 4).join(", ")}\n\n🎨 **Frontend:** React, Next.js, Vue.js, TypeScript, React Native\n\n⚙️ **Backend:** Node.js, Python, FastAPI, Express.js, REST APIs\n\n☁️ **Cloud:** ${lukasKnowledge.skills.cloud.slice(0, 4).join(", ")}\n\n💾 **Databases:** ${lukasKnowledge.skills.database.slice(0, 3).join(", ")}\n\nWant me to dive deeper into any specific area?`
  }

  // Experience - specific company
  if (q.match(/gain energy|oil|gas|geological/)) {
    const exp = lukasKnowledge.workExperience[0]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  if (q.match(/butterfl|social platform|content creation/)) {
    const exp = lukasKnowledge.workExperience[1]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  if (q.match(/freedom|property|real estate/)) {
    const exp = lukasKnowledge.workExperience[2]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  if (q.match(/human pixel|scraping/)) {
    const exp = lukasKnowledge.workExperience[3]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  if (q.match(/klarna|payment|fintech/)) {
    const exp = lukasKnowledge.workExperience[4]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  if (q.match(/siemens/)) {
    const exp = lukasKnowledge.workExperience[5]
    return `**${exp.role} at ${exp.company}** (${exp.period})\n📍 ${exp.location}\n\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  }

  // Experience - general
  if (q.match(/experience|work history|career|job|employ|background|worked|companies/)) {
    const expSummary = lukasKnowledge.workExperience
      .map((exp) => `**${exp.role}** at ${exp.company} (${exp.period})`)
      .join("\n")
    return `**Work Experience** (${lukasKnowledge.experience})\n\n${expSummary}\n\nLukas has worked across startups, SMEs, and enterprise environments in the US, Australia, Sweden, and Germany. Would you like details about any specific role?`
  }

  // Projects
  if (q.match(/project|portfolio|built|created|developed|example|accomplish/)) {
    return `**Notable Projects**\n\n🛢️ **AI Agent Platform for Oil & Gas** (Gain Energy)\nMulti-agent system using LLMs for geological analysis and drilling optimization with RAG pipelines.\n\n🤖 **AI Social Platform Backend** (Butterflies.AI)\nAutonomous content creation system with persona-based AI agents for social media simulation.\n\n🏠 **Member Care AI Platform** (Freedom Property Investors)\nAI-powered customer communication with LLM assistants for automated case tracking.\n\n📞 **Voice Call Center Automation** (Klarna)\nAutomatic voice call center with Twilio integration and NLP capabilities.\n\nSee more at: ${lukasKnowledge.github}`
  }

  // Location
  if (q.match(/where|location|based|country|live|from|remote/)) {
    return `Lukas is based in **${lukasKnowledge.location}**. He has worked remotely with clients and companies across:\n\n🇺🇸 United States (Gain Energy, Butterflies.AI)\n🇦🇺 Australia (Freedom Property Investors, Human Pixel)\n🇸🇪 Sweden (Klarna AB)\n🇩🇪 Germany (Siemens, currently based)\n\nHe's available for remote opportunities worldwide!`
  }

  // Availability
  if (q.match(/available|hire|freelance|contract|opportunity|open to|looking/)) {
    const responses = [
      `Lukas is currently available for **${lukasKnowledge.availability}** opportunities!\n\nHe's particularly interested in:\n• AI agent development & LLM integration\n• Automation & workflow orchestration\n• Full-stack development with React/Next.js\n• CRM automation & SaaS development\n\n📧 Reach out: ${lukasKnowledge.email}`,
      `**Availability:** ${lukasKnowledge.availability}\n\nLukas is open to challenging projects involving AI, automation, and full-stack development. With ${lukasKnowledge.experience} of experience, he can help with:\n\n• Building AI-powered applications\n• Designing automation workflows\n• Developing scalable web/mobile apps\n\n**Contact:** ${lukasKnowledge.email}`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // CRM
  if (q.match(/crm|zoho|hubspot|salesforce|customer relationship/)) {
    return `**CRM & Customer Platform Expertise**\n\n📊 **Platforms:** ${lukasKnowledge.skills.automation.filter((s) => ["Zoho", "HubSpot", "CRM Workflow Automation"].includes(s)).join(", ")}\n\nLukas has extensive experience with:\n• CRM workflow automation\n• Custom CRM integrations\n• AI-powered customer communication platforms\n• Lead qualification automation\n• Member care management systems\n\nAt Freedom Property Investors, he built an AI-powered member care platform with LLM-driven assistants for FAQs, scheduling, and inquiry routing.`
  }

  // Languages
  if (q.match(/language|speak|english/)) {
    return `**Language Proficiency**\n\n🗣️ ${lukasKnowledge.languages.join("\n")}\n\nLukas communicates fluently in English and has worked with international teams across the US, Australia, Sweden, and Germany.`
  }

  // Thanks
  if (q.match(/thank|thanks|appreciate|helpful/)) {
    const responses = [
      `You're welcome! If you have any more questions about Lukas or want to discuss potential opportunities, feel free to ask. You can also reach him directly at ${lukasKnowledge.email}`,
      `Happy to help! Don't hesitate to ask more questions. Lukas is available for ${lukasKnowledge.availability} work - contact him at ${lukasKnowledge.email}`,
      `Glad I could help! Feel free to continue exploring Lukas's background, or reach out to him directly via email or Discord.`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Goodbye
  if (q.match(/bye|goodbye|see you|later|take care/)) {
    const responses = [
      `Goodbye! Feel free to return if you have more questions. You can always reach Lukas at ${lukasKnowledge.email} 👋`,
      `Take care! If you'd like to connect with Lukas, his email is ${lukasKnowledge.email}. Best of luck! 👋`,
      `See you! Remember, Lukas is available for ${lukasKnowledge.availability} opportunities. Reach out anytime! 👋`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Default response - varied
  const defaultResponses = [
    `I can help you learn about Lukas Jam, a ${lukasKnowledge.title} with ${lukasKnowledge.experience} of experience.\n\nI can tell you about:\n• His **skills** (AI, automation, frontend, backend, cloud)\n• His **work experience** (Gain Energy, Butterflies.AI, Klarna, Siemens, etc.)\n• His **education** (Technical University of Berlin)\n• His **projects** and accomplishments\n• How to **contact** him\n\nWhat would you like to know?`,
    `I'm knowledgeable about Lukas's entire background! Try asking about:\n\n🤖 **AI & Automation** - LLMs, RAG, n8n, Zapier\n💼 **Experience** - Companies he's worked with\n🎓 **Education** - University, degree, focus areas\n🛠️ **Skills** - Full technical stack\n📧 **Contact** - How to reach him\n\nWhat interests you most?`,
    `I have comprehensive information about Lukas! Some topics I can discuss:\n\n• His role as a **${lukasKnowledge.title}**\n• **${lukasKnowledge.experience}** of professional experience\n• Work at companies like **Gain Energy**, **Butterflies.AI**, **Klarna**\n• Education at **${lukasKnowledge.education.university}**\n• Technical skills in AI, automation, and full-stack development\n\nWhat would you like to explore?`,
  ]
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export function Chatbot({ onClose }: ChatbotProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: greetingResponses[Math.floor(Math.random() * greetingResponses.length)],
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() || isTyping) return

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: input.trim(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsTyping(true)

      // Simulate AI thinking delay
      await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000))

      const response = generateResponse(userMessage.content)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    },
    [input, isTyping],
  )

  return (
    <div className="fixed bottom-8 right-4 w-96 h-[500px] bg-[#252526] border border-[#3c3c3c] rounded-lg shadow-2xl flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#3c3c3c] bg-[#2d2d2d] rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-[#007acc]" />
          <span className="text-sm font-medium text-white">Ask about Lukas</span>
        </div>
        <button onClick={onClose} className="text-[#858585] hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-[#007acc] flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                message.role === "user" ? "bg-[#007acc] text-white" : "bg-[#3c3c3c] text-[#cccccc]"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-[#4d4d4d] flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-white" />
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#007acc] flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-[#3c3c3c] rounded-lg px-4 py-3 text-sm text-[#cccccc]">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#858585] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span
                  className="w-2 h-2 bg-[#858585] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-[#858585] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-[#3c3c3c]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about skills, projects, experience..."
            className="flex-1 bg-[#3c3c3c] border border-[#4d4d4d] rounded-lg px-3 py-2 text-sm text-white placeholder-[#858585] focus:outline-none focus:border-[#007acc]"
          />
          <button
            type="submit"
            disabled={isTyping || !input.trim()}
            className="px-3 py-2 bg-[#007acc] text-white rounded-lg hover:bg-[#1f8ad2] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  )
}
