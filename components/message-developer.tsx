"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface MessageDeveloperProps {
  onClose: () => void
}

const MessageDeveloper: React.FC<MessageDeveloperProps> = ({ onClose }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate sending message
    setTimeout(() => {
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setName("")
        setEmail("")
        setMessage("")
      }, 3000)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-0 right-0 z-10 bg-gray-900 border-green-500 text-green-500"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-2xl font-bold text-green-500 mb-6 text-center">Message Developer</div>

        {sent ? (
          <div className="text-center text-green-500">
            <div className="text-lg mb-2">Message Sent Successfully!</div>
            <div className="text-sm">Thank you for your feedback.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-900 border-green-500 text-green-500 placeholder-green-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-900 border-green-500 text-green-500 placeholder-green-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-900 border-green-500 text-green-500 placeholder-green-300 min-h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-green-500 text-black hover:bg-green-600">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

export default MessageDeveloper
