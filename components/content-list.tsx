"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Play } from "lucide-react"

interface ContentListProps {
  videoUrls: string[]
  onClose: () => void
}

const ContentList: React.FC<ContentListProps> = ({ videoUrls, onClose }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const handleVideoClick = (url: string) => {
    setCurrentVideo(url)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-0 right-0 z-10 bg-gray-900 border-green-500 text-green-500"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-2xl font-bold text-green-500 mb-6 text-center">Content Gallery</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoUrls.map((url, index) => (
            <div key={index} className="relative group">
              <video
                src={url}
                className="w-full h-48 object-cover rounded-md border border-green-500"
                controls={currentVideo === url}
                onClick={() => handleVideoClick(url)}
              />
              {currentVideo !== url && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-30 transition-all"
                  onClick={() => handleVideoClick(url)}
                >
                  <Play className="text-green-500 w-12 h-12" />
                </div>
              )}
              <div className="text-green-500 text-sm mt-2 text-center">Video {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentList
