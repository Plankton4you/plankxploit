"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, User, Mail, Phone, Lock } from "lucide-react"

interface SettingsAccountProps {
  onClose: () => void
}

const SettingsAccount: React.FC<SettingsAccountProps> = ({ onClose }) => {
  const [username, setUsername] = useState("PlankUser")
  const [email, setEmail] = useState("user@plankxploit.com")
  const [phone, setPhone] = useState("+62888888888")

  const handleSave = () => {
    // Simulate saving settings
    alert("Settings saved successfully!")
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

        <div className="text-2xl font-bold text-green-500 mb-6 text-center">Account Settings</div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="text-green-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Username"
              className="flex-1 px-4 py-2 bg-gray-900 border-green-500 text-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Mail className="text-green-500 w-5 h-5" />
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-gray-900 border-green-500 text-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="text-green-500 w-5 h-5" />
            <Input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-2 bg-gray-900 border-green-500 text-green-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Lock className="text-green-500 w-5 h-5" />
            <Input
              type="password"
              placeholder="New Password"
              className="flex-1 px-4 py-2 bg-gray-900 border-green-500 text-green-500"
            />
          </div>

          <Button onClick={handleSave} className="w-full bg-green-500 text-black hover:bg-green-600">
            Save Settings
          </Button>

          <div className="grid grid-cols-2 gap-2 mt-6">
            <Button variant="outline" className="bg-gray-900 border-green-500 text-green-500">
              Export Data
            </Button>
            <Button variant="outline" className="bg-gray-900 border-red-500 text-red-500">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsAccount
