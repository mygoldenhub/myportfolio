import Image from "next/image"
import { Github, Mail } from "lucide-react"

export function LandingView() {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#1e1e1e]">
      <div className="flex items-center gap-8">
        {/* Name and Title */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-light text-white tracking-tight">Lukas Jam</h1>
          <p className="text-lg text-[#8b8b00] mt-2">Full Stack AI Automation Developer</p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/mygoldenhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#858585] hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="mailto:earthbreaker0718@gmail.com"
              className="text-[#858585] hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={24} />
            </a>

            {/* Discord - Updated to correct users URL */}
            <a
              href="https://discord.com/users/1453085290183917835"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#858585] hover:text-white transition-colors"
              title="Discord"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-[#8b8b00] overflow-hidden">
            <Image src="/images/avatar.jpg" alt="Lukas Jam" width={128} height={128} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
