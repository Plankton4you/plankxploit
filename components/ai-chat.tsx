"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface AIChatProps {
  onClose: () => void
}

const AIChat: React.FC<AIChatProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setResponse(
        `AI Response to: "${prompt}"\n\nThis is a simulated response. In a real implementation, this would connect to an AI service like Groq or OpenAI.`,
      )
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50">
      <div className="relative w-full max-w-2xl p-6">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-0 right-0 bg-gray-900 border-green-500 text-green-500"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-2xl font-bold text-green-500 mb-6 text-center">Chat AI</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your prompt..."
            className="w-full px-4 py-2 bg-gray-900 border-green-500 text-green-500 placeholder-green-300"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading} className="w-full bg-green-500 text-black hover:bg-green-600">
            {loading ? "Generating..." : "Send Message"}
          </Button>
        </form>

        {response && (
          <div className="mt-6 p-4 border border-green-500 rounded-md bg-gray-900 text-green-500 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  )
}

export default AIChat
