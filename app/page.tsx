"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import AutomaticVerification from "@/components/automatic-verification"
import Loading from "@/components/loading"
import Dashboard from "@/components/dashboard"
import Sidebar from "@/components/sidebar"
// Import ContactSupport component
import ContactSupport from "@/components/contact-support"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showDashboard, setShowDashboard] = useState(false)
  const [touchPoints, setTouchPoints] = useState<Array<[number, number]>>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleVerificationComplete = () => {
    setIsVerified(true)
  }

  const handleEnterApp = () => {
    // Validate WhatsApp number before entering dashboard
    const whatsappRegex = /^\d{10,15}$/ // Basic WhatsApp number validation
    if (!whatsappRegex.test(phoneNumber)) {
      alert("Nomor WhatsApp tidak valid. Masukkan nomor yang benar.")
      return
    }
    setShowDashboard(true)
  }

  const handleTouch = useCallback((e: React.TouchEvent) => {
    const touches = Array.from(e.touches).map((touch) => [touch.clientX, touch.clientY] as [number, number])
    setTouchPoints(touches)
    setTimeout(() => setTouchPoints([]), 500)
  }, [])

  const renderTouchAnimations = () => {
    return touchPoints.map(([x, y], index) => (
      <div
        key={index}
        className="absolute pointer-events-none text-green-500 text-sm font-bold animate-ping"
        style={{
          left: x - 10,
          top: y - 10,
        }}
      >
        Plank Dev
      </div>
    ))
  }

  if (isLoading) {
    return <Loading />
  }

  if (!isVerified) {
    return (
      <AutomaticVerification
        whatsappChannel1="https://whatsapp.com/channel/0029Vay9jnG65yDFJDN6tG1j"
        whatsappChannel2="https://whatsapp.com/channel/0029Vb2QKduA89MpcV9yGr1z"
        marga="https://chat.whatsapp.com/Fqkb8bwnCUU9ZAyQXHljBY?mode=ac_c"
        tiktok="https://www.tiktok.com/@plankton_4you?_t=ZS-8tytCC9w0U3&_r=1"
        instagram="https://www.instagram.com/plankton4you.dev/#"
        onVerificationComplete={handleVerificationComplete}
      />
    )
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden" onTouchStart={handleTouch} onTouchMove={handleTouch}>
      <video src="/videos/background-video.mp4" autoPlay loop muted className="absolute object-cover w-full h-full" />
      <audio src="/audio/background-music.mpeg" autoPlay loop />
      <div className="absolute inset-0 bg-black opacity-70" />
      <Sidebar />
      {/* Tambahkan ContactSupport di dalam return statement setelah Sidebar */}
      <ContactSupport />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        <img src="/images/logo.jpeg" alt="PlankXploit Logo" className="rounded-full w-32 h-32 mb-4" />
        <div className="text-2xl font-bold text-green-500 mb-2">MASUKKAN NOMOR WHATSAPP TARGET!</div>
        <div className="text-lg mb-4 text-green-400">ATAU LU YANG GUA MASUKIN? AHH.. AHH..</div>
        <div className="text-sm mb-4 text-gray-400">Developed by PlankDev | @plankton4you.dev</div>
        <input
          type="tel"
          placeholder="Contoh: 628*********"
          className="w-64 px-4 py-2 rounded-md text-black"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          className="mt-4 px-6 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
          onClick={handleEnterApp}
          disabled={phoneNumber.length < 10}
        >
          MASUK DASHBOARD
        </button>
        {renderTouchAnimations()}
      </div>
      {showDashboard && <Dashboard phoneNumber={phoneNumber} onClose={() => setShowDashboard(false)} />}
    </div>
  )
}

export default Home
