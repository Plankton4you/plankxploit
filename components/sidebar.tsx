"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MessageSquare, Star, Settings, ListVideo, LayoutDashboard, Menu } from "lucide-react"
import AIChat from "./ai-chat"
import ContentList from "./content-list"
import RatingsList from "./ratings-list"
import SettingsAccount from "./settings-account"
import MessageDeveloper from "./message-developer"

const Sidebar = () => {
  const [activePage, setActivePage] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const videoUrls = [
    "https://files.catbox.moe/73h8it.mp4",
    "https://files.catbox.moe/pzsila.mp4",
    "https://files.catbox.moe/u63jlv.mp4",
    "https://files.catbox.moe/kwqkt2.mp4",
    "https://files.catbox.moe/u4q8mf.mp4",
  ]

  const handleMenuClick = (page: string) => {
    setActivePage(page)
    setIsOpen(false)
  }

  const renderContent = () => {
    switch (activePage) {
      case "message-developer":
        return <MessageDeveloper onClose={() => setActivePage(null)} />
      case "content":
        return <ContentList videoUrls={videoUrls} onClose={() => setActivePage(null)} />
      case "rating":
        return <RatingsList onClose={() => setActivePage(null)} />
      case "chat-ai":
        return <AIChat onClose={() => setActivePage(null)} />
      case "settings-account":
        return <SettingsAccount onClose={() => setActivePage(null)} />
      default:
        return null
    }
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="absolute top-4 left-4 z-50 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-4 w-4" />
            <span className="ml-2">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-black text-green-500 border-green-500">
          <SheetHeader className="border-b border-green-500 pb-4">
            <SheetTitle className="text-green-500 text-xl font-bold">PlankXploit Menu</SheetTitle>
            <div className="text-green-400 text-sm">Developed by PlankDev</div>
          </SheetHeader>

          <div className="grid gap-3 py-6">
            <Button
              variant="outline"
              className="justify-start h-12 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => handleMenuClick("message-developer")}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              <span className="text-base">Message Developer</span>
            </Button>

            <Button
              variant="outline"
              className="justify-start h-12 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => handleMenuClick("content")}
            >
              <ListVideo className="mr-3 h-5 w-5" />
              <span className="text-base">Content Gallery</span>
            </Button>

            <Button
              variant="outline"
              className="justify-start h-12 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => handleMenuClick("rating")}
            >
              <Star className="mr-3 h-5 w-5" />
              <span className="text-base">User Ratings</span>
            </Button>

            <Button
              variant="outline"
              className="justify-start h-12 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => handleMenuClick("chat-ai")}
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              <span className="text-base">Chat AI</span>
            </Button>

            <Button
              variant="outline"
              className="justify-start h-12 bg-gray-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => handleMenuClick("settings-account")}
            >
              <Settings className="mr-3 h-5 w-5" />
              <span className="text-base">Account Settings</span>
            </Button>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gray-900 border border-green-500 rounded-lg p-3">
              <div className="text-green-500 font-bold text-sm mb-1">Developer Info:</div>
              <div className="text-green-400 text-xs space-y-1">
                <div>• PlankDev Team</div>
                <div>• Instagram: @plankton4you.dev</div>
                <div>• TikTok: @plankton_4you</div>
                <div>• WhatsApp: +6288214173300</div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {renderContent()}
    </>
  )
}

export default Sidebar
