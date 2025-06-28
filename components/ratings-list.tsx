"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { X, Star } from "lucide-react"

interface RatingsListProps {
  onClose: () => void
}

const ratingsData = [
  { name: "User 1", message: "Gacorr jing apk nya!", rating: 5 },
  { name: "User 2", message: "geloo bangsatt bug nya", rating: 4 },
  { name: "User 3", message: "tutor bikin nya bang plankdev", rating: 5 },
  { name: "User 4", message: "mantapp plank, cwe gua langsung ganti nomor wkwk", rating: 4 },
  { name: "User 5", message: "join murid mu brp plankdev?", rating: 5 },
  { name: "User 6", message: "baru tau gua ada apk beginian jirt", rating: 5 },
  { name: "User 7", message: "yahahaha nomor gua jadi aman ga kenon lagi wkwk", rating: 4 },
  { name: "User 8", message: "bagi source code nya plank", rating: 5 },
  { name: "User 9", message: "jirlah plankdev", rating: 4 },
  { name: "User 10", message: "gila sih sepuh emang beda", rating: 5 },
]

const RatingsList: React.FC<RatingsListProps> = ({ onClose }) => {
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

        <div className="text-2xl font-bold text-green-500 mb-6 text-center">User Ratings</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {ratingsData.map((rating, index) => (
            <div key={index} className="p-4 border border-green-500 rounded-md bg-gray-900">
              <div className="text-lg font-bold text-green-500">{rating.name}</div>
              <div className="text-sm text-gray-400 mb-2">{rating.message}</div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 ${starIndex < rating.rating ? "text-yellow-500 fill-current" : "text-gray-500"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RatingsList
