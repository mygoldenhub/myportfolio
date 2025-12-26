export function ExperienceContent() {
  const experiences = [
    {
      period: "2024 - 2025",
      title: "Full Stack AI & Automation Engineer",
      company: "Gain Energy",
      location: "Remote, United States",
      highlights: [
        "Architected an AI agent platform that automated geological analysis, drilling optimization, and operational intelligence for oil & gas companies",
        "Built multi-agent systems using LLMs (GPT, Claude, custom RAG pipelines) to interpret unstructured field data, documents, and sensor logs",
        "Developed automation workflows to collect, clean, and classify engineering data from PDFs, reports, SCADA systems, and external APIs",
        "Integrated geospatial analysis tools and ML models for predictive maintenance and extraction efficiency forecasting",
        "Delivered secure cloud architecture using AWS (ECS, Lambda, DynamoDB, KMS) with enterprise-grade IAM and audit logging",
      ],
    },
    {
      period: "2023 - 2024",
      title: "Full Stack Developer",
      company: "Butterflies.AI",
      location: "Remote, United States",
      highlights: [
        "Developed core backend automation workflows powering an AI-generated social platform, enabling autonomous content creation and user interactions",
        "Built AI agent pipelines using OpenAI GPT models to simulate human-like conversations, persona-based posting, and community engagement",
        "Designed scalable microservices for content generation, media rendering, user feed ranking, and moderation",
        "Implemented web scraping tools for trend extraction, sentiment analysis, and dataset generation",
        "Optimized prompt engineering and fine-tuned LLMs for distinct personalities and emotional tone",
      ],
    },
    {
      period: "2022 - 2023",
      title: "Full Stack Software Developer",
      company: "Freedom Property Investors",
      location: "Australia",
      highlights: [
        "Built an AI-powered member care management platform that automated customer communication, case tracking, and onboarding flows",
        "Integrated LLM-driven assistants to handle FAQs, schedule calls, and route inquiries to appropriate property experts",
        "Developed backend automation pipelines (Python and Node.js) for lead qualification, CRM updates, and personalized property recommendations",
        "Deployed cloud services on GCP to ensure secure data handling, scalability, and high availability",
      ],
    },
    {
      period: "2021 - 2022",
      title: "Automation & AI Developer",
      company: "Human Pixel",
      location: "Australia",
      highlights: [
        "Designed and implemented end-to-end automation solutions for web scraping, data extraction, and AI-driven workflows",
        "Built web scraping tools using Python, Selenium, and BeautifulSoup for product pricing and market data",
        "Developed cloud-native automation systems on AWS (Lambda, S3, EC2) for scalability and performance",
        "Integrated ML models for data-driven decision-making, automating scoring, sentiment analysis, and market trend prediction",
      ],
    },
    {
      period: "2020 - 2021",
      title: "Full Stack Software Developer",
      company: "Klarna AB",
      location: "Sweden",
      highlights: [
        "Created Firebase cloud-function backend with Node.js for Ellipsis mobile app and web dashboards",
        "Built front-end visualization dashboard with Vue.js, Chart.js, and D3",
        "Constructed automatic voice call center using Twilio and Node.js with NLP API",
        "Created React front-end admin dashboard for complex table data visualization",
        "Used Google Cloud Platform (Storage, BigQuery, Speech-to-Text API, Firebase)",
      ],
    },
    {
      period: "2019 - 2020",
      title: "Full Stack Developer",
      company: "Siemens",
      location: "Germany",
      highlights: [
        "Front and Back End development in various projects",
        "Converting mockups into HTML/CSS using Bootstrap, JavaScript, jQuery, Canvas",
        "Creating interactive websites and landing pages with various animations including parallax effects",
        "Working with different frameworks and libraries in team collaboration",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Work Experience</h1>
        <p className="text-[#858585]">Professional journey in software development and AI automation</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c]">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-[#4ec9b0]">{exp.title}</h2>
                <p className="text-[#007acc]">{exp.company}</p>
                <p className="text-sm text-[#858585]">{exp.location}</p>
              </div>
              <span className="px-3 py-1 bg-[#3c3c3c] rounded-md text-sm text-[#ce9178]">{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#d4d4d4]">
                  <span className="text-[#569cd6] mt-1">{"•"}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
