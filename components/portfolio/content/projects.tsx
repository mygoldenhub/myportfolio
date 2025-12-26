"use client"

import { ExternalLink, Github, Lock, Globe, Loader2, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics: string[]
  visibility: string
}

const ITEMS_PER_PAGE = 10
const AUTO_REFRESH_INTERVAL = 30000

export function ProjectsContent() {
  const [currentPage, setCurrentPage] = useState(1)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchRepos = useCallback(async (showLoadingState = true) => {
    if (showLoadingState) {
      setIsLoading(true)
    }
    setError(null)
    try {
      const response = await fetch(
        `https://api.github.com/users/mygoldenhub/repos?sort=updated&per_page=100&t=${Date.now()}`,
        {
          cache: "no-store",
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        },
      )

      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded. Please try again later.")
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch repositories (Status: ${response.status})`)
      }

      const data = await response.json()

      if (Array.isArray(data)) {
        setRepos(data)
        setLastUpdated(new Date())
        if (showLoadingState) {
          setCurrentPage(1)
        }
      } else {
        throw new Error("Invalid response from GitHub API")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load repositories")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRepos(true)

    // Set up auto-refresh interval
    const intervalId = setInterval(() => {
      fetchRepos(false) // Don't show loading state for background refresh
    }, AUTO_REFRESH_INTERVAL)

    return () => clearInterval(intervalId)
  }, [fetchRepos])

  const totalPages = repos.length > 0 ? Math.ceil(repos.length / ITEMS_PER_PAGE) : 1
  const paginatedRepos = repos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const getPageNumbers = () => {
    const pages: number[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) pages.push(i)
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i)
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i)
    }
    return pages
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Projects</h1>
          <p className="text-[#858585]">
            {repos.length > 0 ? `${repos.length} repositories from GitHub` : "Loading repositories..."}
          </p>
          {lastUpdated && (
            <p className="text-xs text-[#6a6a6a] mt-1">
              Last updated: {lastUpdated.toLocaleTimeString()} (auto-refreshes every 30s)
            </p>
          )}
        </div>
        <button
          onClick={() => fetchRepos(true)}
          disabled={isLoading}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#252526] border border-[#3c3c3c] rounded hover:border-[#007acc] transition-colors disabled:opacity-50"
        >
          <RefreshCw size={14} className={`text-[#858585] ${isLoading ? "animate-spin" : ""}`} />
          <span className="text-xs text-[#858585]">Refresh</span>
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#007acc]" />
          <span className="ml-2 text-[#858585]">Loading projects from GitHub...</span>
        </div>
      ) : error ? (
        <div className="text-center py-12 text-[#858585]">
          <p className="text-red-400 mb-2">{error}</p>
          <button
            onClick={() => fetchRepos(true)}
            className="mt-4 px-4 py-2 bg-[#007acc] rounded text-white hover:bg-[#005f99] transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : repos.length === 0 ? (
        <div className="text-center py-12 text-[#858585]">
          <p>No repositories found.</p>
          <button
            onClick={() => fetchRepos(true)}
            className="mt-4 px-4 py-2 bg-[#007acc] rounded text-white hover:bg-[#005f99] transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginatedRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#252526] rounded-lg p-5 border border-[#3c3c3c] hover:border-[#007acc] transition-colors block"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-[#4ec9b0] font-medium">{repo.name}</h3>
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded ${
                      repo.visibility === "public" ? "bg-[#1e3a2f] text-[#4ec9b0]" : "bg-[#3a2f1e] text-[#ce9178]"
                    }`}
                  >
                    {repo.visibility === "public" ? <Globe size={12} /> : <Lock size={12} />}
                    {repo.visibility === "public" ? "Public" : "Private"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="px-2 py-0.5 bg-[#1e1e1e] rounded text-xs text-[#ce9178]">{repo.language}</span>
                  )}
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <span key={topic} className="px-2 py-0.5 bg-[#1e1e1e] rounded text-xs text-[#569cd6]">
                      {topic}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded bg-[#252526] border border-[#3c3c3c] hover:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} className="text-white" />
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-8 h-8 rounded text-sm transition-colors ${
                      currentPage === pageNum
                        ? "bg-[#007acc] text-white"
                        : "bg-[#252526] text-[#858585] border border-[#3c3c3c] hover:border-[#007acc]"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded bg-[#252526] border border-[#3c3c3c] hover:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} className="text-white" />
              </button>
            </div>
          )}

          {/* Page info */}
          {totalPages > 1 && (
            <div className="text-center text-xs text-[#858585]">
              Page {currentPage} of {totalPages} ({repos.length} repositories)
            </div>
          )}
        </>
      )}

      {/* GitHub CTA */}
      <div className="bg-[#252526] rounded-lg p-6 border border-[#3c3c3c] text-center">
        <p className="text-[#858585] mb-4">Explore more projects on GitHub</p>
        <a
          href="https://github.com/mygoldenhub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-[#007acc] rounded-md text-white hover:bg-[#005f99] transition-colors"
        >
          <Github size={18} />
          <span>View GitHub Profile</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
