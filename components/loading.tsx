"use client"

import { useState, useEffect } from "react"

const Loading = () => {
  const [dots, setDots] = useState("")
  const [currentDev, setCurrentDev] = useState(0)

  const developers = [
    "PlankDev (Application)",
    "MalzHost (Script)",
    "Windy (Support)",
    "VinnXploit (Security & Server)",
  ]

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    const devInterval = setInterval(() => {
      setCurrentDev((prev) => (prev + 1) % developers.length)
    }, 1000)

    return () => {
      clearInterval(dotsInterval)
      clearInterval(devInterval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="matrix-bg"></div>
      <div className="relative z-10 text-center">
        <div className="text-4xl font-bold text-green-500 mb-4 animate-pulse">PlankXploit</div>
        <div className="text-xl text-green-400 mb-6">Senju Kawaragi v4.0</div>
        <div className="text-lg text-green-400">Loading{dots}</div>

        <div className="mt-8 mb-6">
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full animate-pulse" style={{ width: "100%" }}></div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4 w-80">
          <div className="text-green-500 font-bold mb-2">Development Team:</div>
          <div className="text-green-400 text-sm animate-pulse">{developers[currentDev]}</div>
        </div>
      </div>
    </div>
  )
}

export default Loading
