"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Database, Bot, Globe, Zap, Users, MessageSquare } from "lucide-react"

interface DashboardProps {
  phoneNumber: string
  onClose: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ phoneNumber, onClose }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)
  const [ddosTarget, setDdosTarget] = useState("")
  const [bugTarget, setBugTarget] = useState("")
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const checkAuthorization = async () => {
    const authorizedNumbers = ["628881382817", "6283824299082", "6283159519570"]
    const cleanNumber = phoneNumber.replace(/\D/g, "")
    const isAuth = authorizedNumbers.includes(cleanNumber)
    setIsAuthorized(isAuth)

    if (isAuth) {
      alert("✅ Nomor terverifikasi! Akses diberikan ke semua fitur.")
    } else {
      alert("❌ Nomor tidak terdaftar dalam database!")
    }
  }

  const executeWhatsAppBot = () => {
    alert(`🤖 Senju Kawaragi Bot v4.0 dijalankan untuk nomor: ${phoneNumber}`)
    setTimeout(() => {
      alert("Bot berhasil dijalankan! Runtime: 3 hrs, 21 mins")
    }, 2000)
  }

  const executeBugMenu = (bugType: string) => {
    if (!bugTarget) {
      alert("Masukkan nomor target terlebih dahulu!")
      return
    }
    alert(`🔥 ${bugType.toUpperCase()} executed to ${bugTarget}`)
  }

  const executeDDOS = () => {
    if (!ddosTarget) {
      alert("Masukkan website/domain target terlebih dahulu!")
      return
    }
    alert(`⚡ DDOS Attack launched to ${ddosTarget}`)
    setTimeout(() => {
      alert("DDOS Attack completed! Target may be down.")
    }, 3000)
  }

  const renderBugMenu = () => (
    <div className="space-y-4">
      <div className="text-green-500 font-bold text-lg mb-4">🔥 BUG MENU - SENJU V4</div>
      <Input
        placeholder="Masukkan nomor target (628xxx)"
        value={bugTarget}
        onChange={(e) => setBugTarget(e.target.value)}
        className="bg-gray-900 border-green-500 text-green-500"
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => executeBugMenu("senjudelay")} className="bg-red-600 hover:bg-red-700">
          SENJUDELAY
        </Button>
        <Button onClick={() => executeBugMenu("invisible")} className="bg-red-600 hover:bg-red-700">
          INVISIBLE
        </Button>
        <Button onClick={() => executeBugMenu("bulldozer")} className="bg-red-600 hover:bg-red-700">
          BULLDOZER
        </Button>
        <Button onClick={() => executeBugMenu("crash-ios")} className="bg-red-600 hover:bg-red-700">
          CRASH-IOS
        </Button>
        <Button onClick={() => executeBugMenu("force-close")} className="bg-red-600 hover:bg-red-700">
          FORCE-CLOSE
        </Button>
        <Button onClick={() => executeBugMenu("xblank")} className="bg-red-600 hover:bg-red-700">
          XBLANK
        </Button>
      </div>
    </div>
  )

  const renderBugSaluran = () => (
    <div className="space-y-4">
      <div className="text-green-500 font-bold text-lg mb-4">📺 BUG SALURAN</div>
      <Input
        placeholder="Masukkan ID Channel"
        value={bugTarget}
        onChange={(e) => setBugTarget(e.target.value)}
        className="bg-gray-900 border-green-500 text-green-500"
      />
      <div className="grid grid-cols-1 gap-2">
        <Button onClick={() => executeBugMenu("bugch")} className="bg-orange-600 hover:bg-orange-700">
          BUGCH &lt; IDCH &gt;
        </Button>
        <Button onClick={() => executeBugMenu("crash-saluran")} className="bg-orange-600 hover:bg-orange-700">
          CRASH-SALURAN &lt; IDCH &gt;
        </Button>
      </div>
    </div>
  )

  const renderBugGroup = () => (
    <div className="space-y-4">
      <div className="text-green-500 font-bold text-lg mb-4">👥 BUG GROUP</div>
      <Input
        placeholder="Masukkan ID Group"
        value={bugTarget}
        onChange={(e) => setBugTarget(e.target.value)}
        className="bg-gray-900 border-green-500 text-green-500"
      />
      <div className="grid grid-cols-1 gap-2">
        <Button onClick={() => executeBugMenu("blanking-group")} className="bg-purple-600 hover:bg-purple-700">
          BLANKING-GROUP &lt; IDGC &gt;
        </Button>
        <Button onClick={() => executeBugMenu("delay-group")} className="bg-purple-600 hover:bg-purple-700">
          DELAY-GROUP &lt; IDGC &gt;
        </Button>
        <Button onClick={() => executeBugMenu("combobug-group")} className="bg-purple-600 hover:bg-purple-700">
          COMBOBUG-GROUP &lt; IDGC &gt;
        </Button>
      </div>
    </div>
  )

  const renderDDOSTools = () => (
    <div className="space-y-4">
      <div className="text-green-500 font-bold text-lg mb-4">⚡ DDOS TOOLS</div>
      <Input
        placeholder="Masukkan website/domain (example.com)"
        value={ddosTarget}
        onChange={(e) => setDdosTarget(e.target.value)}
        className="bg-gray-900 border-green-500 text-green-500"
      />
      <Button onClick={executeDDOS} className="w-full bg-red-600 hover:bg-red-700">
        🚀 LAUNCH DDOS ATTACK
      </Button>
      <div className="text-yellow-500 text-xs">⚠️ Gunakan dengan bijak! Hanya untuk testing server sendiri.</div>
    </div>
  )

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "bug-menu":
        return renderBugMenu()
      case "bug-saluran":
        return renderBugSaluran()
      case "bug-group":
        return renderBugGroup()
      case "ddos-tools":
        return renderDDOSTools()
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-0 right-0 z-10 bg-gray-900 border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-green-500 mb-2">PlankXploit Dashboard</div>
          <div className="text-lg text-green-400">Nomor: {phoneNumber}</div>
          {isAuthorized !== null && (
            <div className={`text-sm mt-2 ${isAuthorized ? "text-green-500" : "text-red-500"}`}>
              Status: {isAuthorized ? "✅ Terverifikasi" : "❌ Tidak Terverifikasi"}
            </div>
          )}
        </div>

        {!activeFeature ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <Button
                onClick={checkAuthorization}
                className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Database className="h-6 w-6 mb-2" />
                <span className="text-sm">Cek Database</span>
              </Button>

              <Button
                onClick={executeWhatsAppBot}
                className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white"
              >
                <Bot className="h-6 w-6 mb-2" />
                <span className="text-sm">Senju Bot v4.0</span>
              </Button>

              <Button
                onClick={() => setActiveFeature("bug-menu")}
                className="h-20 flex flex-col items-center justify-center bg-red-600 hover:bg-red-700 text-white"
              >
                <Zap className="h-6 w-6 mb-2" />
                <span className="text-sm">Bug Menu</span>
              </Button>

              <Button
                onClick={() => setActiveFeature("bug-saluran")}
                className="h-20 flex flex-col items-center justify-center bg-orange-600 hover:bg-orange-700 text-white"
              >
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">Bug Saluran</span>
              </Button>

              <Button
                onClick={() => setActiveFeature("bug-group")}
                className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">Bug Group</span>
              </Button>

              <Button
                onClick={() => setActiveFeature("ddos-tools")}
                className="h-20 flex flex-col items-center justify-center bg-red-800 hover:bg-red-900 text-white"
              >
                <Globe className="h-6 w-6 mb-2" />
                <span className="text-sm">DDOS Tools</span>
              </Button>
            </div>

            <div className="bg-gray-900 border border-green-500 rounded-lg p-4 mb-4">
              <h3 className="text-green-500 font-bold mb-2">🔥 Fitur Senju Kawaragi v4.0:</h3>
              <ul className="text-green-400 text-sm space-y-1">
                <li>• Bug Menu (6 jenis serangan)</li>
                <li>• Bug Saluran WhatsApp</li>
                <li>• Bug Group WhatsApp</li>
                <li>• DDOS Website Tools</li>
                <li>• Database Verification</li>
                <li>• Runtime: 3 hrs, 21 mins</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
            <Button onClick={() => setActiveFeature(null)} className="mb-4 bg-gray-700 hover:bg-gray-600">
              ← Kembali ke Menu Utama
            </Button>
            {renderActiveFeature()}
          </div>
        )}

        <div className="mt-4 bg-gray-900 border border-green-500 rounded-lg p-4">
          <div className="text-green-500 font-bold text-center mb-3">👨‍💻 Development Team</div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-green-400 font-semibold">PlankDev</div>
              <div className="text-gray-400 text-xs">(Application)</div>
            </div>
            <div className="space-y-1">
              <div className="text-green-400 font-semibold">MalzHost</div>
              <div className="text-gray-400 text-xs">(Script)</div>
            </div>
            <div className="space-y-1">
              <div className="text-green-400 font-semibold">Windy</div>
              <div className="text-gray-400 text-xs">(Support)</div>
            </div>
            <div className="space-y-1">
              <div className="text-green-400 font-semibold">VinnXploit</div>
              <div className="text-gray-400 text-xs">(Security & Server)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
