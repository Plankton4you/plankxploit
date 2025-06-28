"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Play, Download, Share } from "lucide-react"

interface ContentListProps {
  videoUrls: string[]
  onClose: () => void
}

const ContentList: React.FC<ContentListProps> = ({ videoUrls, onClose }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  // Tambahkan lebih banyak video untuk demo
  const allVideos = [
    { url: "https://files.catbox.moe/73h8it.mp4", title: "PlankXploit Demo 1", description: "Tutorial WhatsApp Bot" },
    { url: "https://files.catbox.moe/pzsila.mp4", title: "PlankXploit Demo 2", description: "AI Coding Assistant" },
    { url: "https://files.catbox.moe/u63jlv.mp4", title: "PlankXploit Demo 3", description: "Website Development" },
    { url: "https://files.catbox.moe/kwqkt2.mp4", title: "PlankXploit Demo 4", description: "Server Management" },
    { url: "https://files.catbox.moe/u4q8mf.mp4", title: "PlankXploit Demo 5", description: "Security Testing" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Tutorial Bot Setup",
      description: "Cara setup WhatsApp Bot",
    },
    { url: "/placeholder.svg?height=240&width=320", title: "AI Features", description: "Fitur AI Coding Assistant" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Payment Integration",
      description: "Integrasi sistem pembayaran",
    },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Customer Service",
      description: "Auto-reply customer service",
    },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Analytics Dashboard",
      description: "Dashboard analytics bisnis",
    },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Security Features",
      description: "Fitur keamanan aplikasi",
    },
    { url: "/placeholder.svg?height=240&width=320", title: "Mobile App", description: "Aplikasi mobile PlankXploit" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Database Management",
      description: "Manajemen database customer",
    },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "API Integration",
      description: "Integrasi dengan API eksternal",
    },
    { url: "/placeholder.svg?height=240&width=320", title: "Backup System", description: "Sistem backup otomatis" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Performance Optimization",
      description: "Optimasi performa aplikasi",
    },
    { url: "/placeholder.svg?height=240&width=320", title: "Multi-Platform", description: "Support multi-platform" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Cloud Integration",
      description: "Integrasi dengan cloud services",
    },
    { url: "/placeholder.svg?height=240&width=320", title: "Advanced Features", description: "Fitur-fitur advanced" },
    {
      url: "/placeholder.svg?height=240&width=320",
      title: "Future Updates",
      description: "Update dan fitur mendatang",
    },
  ]

  const handleVideoClick = (url: string) => {
    setCurrentVideo(url)
  }

  const downloadVideo = (url: string, title: string) => {
    // Simulasi download
    alert(`📥 Downloading: ${title}`)
  }

  const shareVideo = (title: string) => {
    // Simulasi share
    const shareText = `Check out this video: ${title} from PlankXploit!`
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(shareText)
      alert("📋 Link copied to clipboard!")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-[60] p-4">
      <div className="relative w-full max-w-7xl h-full flex flex-col">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 z-20 bg-red-600 border-red-500 text-white hover:bg-red-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="ml-1">CLOSE</span>
        </Button>

        <div className="text-center mb-6 pt-4">
          <div className="text-3xl font-bold text-green-500 mb-2">📹 Content Gallery</div>
          <div className="text-lg text-green-400">PlankXploit Video Collection ({allVideos.length} videos)</div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-900 border border-green-500 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allVideos.map((video, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all"
              >
                <div className="relative">
                  {video.url.includes("placeholder") ? (
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                      <Play className="text-green-500 w-16 h-16" />
                    </div>
                  ) : (
                    <video
                      src={video.url}
                      className="w-full h-48 object-cover"
                      controls={currentVideo === video.url}
                      onClick={() => handleVideoClick(video.url)}
                    />
                  )}

                  {currentVideo !== video.url && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 cursor-pointer transition-all"
                      onClick={() => handleVideoClick(video.url)}
                    >
                      <Play className="text-green-500 w-12 h-12 group-hover:scale-110 transition-transform" />
                    </div>
                  )}

                  {/* Video Number Badge */}
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Video {index + 1}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-green-400 font-semibold mb-1 truncate">{video.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{video.description}</p>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleVideoClick(video.url)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-xs"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Play
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => downloadVideo(video.url, video.title)}
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-xs"
                    >
                      <Download className="w-3 h-3" />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => shareVideo(video.title)}
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-xs"
                    >
                      <Share className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            📜 Scroll down to see more videos • Total: {allVideos.length} videos
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-4 bg-gray-900 border border-green-500 rounded-lg p-4 text-center">
          <div className="text-green-500 font-bold mb-2">🎬 Video Categories</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-green-400">
            <div>📱 Bot Tutorials</div>
            <div>🤖 AI Features</div>
            <div>💻 Development</div>
            <div>🔒 Security</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentList
