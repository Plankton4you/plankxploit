"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface VerificationProps {
  whatsappChannel1: string
  whatsappChannel2: string
  marga: string
  tiktok: string
  instagram: string
  onVerificationComplete: () => void
}

const AutomaticVerification: React.FC<VerificationProps> = ({
  whatsappChannel1,
  whatsappChannel2,
  marga,
  tiktok,
  instagram,
  onVerificationComplete,
}) => {
  const [verified, setVerified] = useState({
    whatsappChannel1: false,
    whatsappChannel2: false,
    marga: false,
    tiktok: false,
    instagram: false,
  })

  const handleClick = (channel: keyof typeof verified, url: string) => {
    window.open(url, "_blank")
    setVerified((prev) => ({ ...prev, [channel]: true }))
  }

  useEffect(() => {
    const allVerified = Object.values(verified).every((v) => v === true)
    if (allVerified) {
      setTimeout(() => {
        onVerificationComplete()
      }, 1000)
    }
  }, [verified, onVerificationComplete])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="matrix-bg"></div>
      <div className="relative z-10">
        <div className="text-2xl font-bold text-green-500 mb-8 text-center">Automatic Verification Required</div>
        <div className="flex flex-col space-y-4 w-80">
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => handleClick("whatsappChannel1", whatsappChannel1)}
            disabled={verified.whatsappChannel1}
          >
            WhatsApp Channel 1
            {verified.whatsappChannel1 ? (
              <CheckCircle className="ml-2 text-green-500" />
            ) : (
              <XCircle className="ml-2 text-red-500" />
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => handleClick("whatsappChannel2", whatsappChannel2)}
            disabled={verified.whatsappChannel2}
          >
            WhatsApp Channel 2
            {verified.whatsappChannel2 ? (
              <CheckCircle className="ml-2 text-green-500" />
            ) : (
              <XCircle className="ml-2 text-red-500" />
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => handleClick("marga", marga)}
            disabled={verified.marga}
          >
            Marga Group
            {verified.marga ? (
              <CheckCircle className="ml-2 text-green-500" />
            ) : (
              <XCircle className="ml-2 text-red-500" />
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => handleClick("tiktok", tiktok)}
            disabled={verified.tiktok}
          >
            TikTok
            {verified.tiktok ? (
              <CheckCircle className="ml-2 text-green-500" />
            ) : (
              <XCircle className="ml-2 text-red-500" />
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => handleClick("instagram", instagram)}
            disabled={verified.instagram}
          >
            Instagram
            {verified.instagram ? (
              <CheckCircle className="ml-2 text-green-500" />
            ) : (
              <XCircle className="ml-2 text-red-500" />
            )}
          </Button>
        </div>
        <div className="mt-6 text-center text-green-400 text-sm">Click all buttons to verify and continue</div>
      </div>
    </div>
  )
}

export default AutomaticVerification
