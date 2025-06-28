"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Music, Globe } from "lucide-react"

const ContactSupport = () => {
  const contacts = {
    whatsapp: "628881382817",
    whatsappChannel: "https://whatsapp.com/channel/0029Vay9jnG65yDFJDN6tG1j",
    instagram: "https://www.instagram.com/plankton4you.dev/#",
    tiktok: "https://www.tiktok.com/@plankton_4you?_t=ZS-8tytCC9w0U3&_r=1",
    website: "https://kebutuhan-hostingplankdev.vercel.app",
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-gray-900 border border-green-500 rounded-lg p-4 w-64">
        <h3 className="text-green-500 font-bold mb-3 text-center">Contact Support</h3>
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-gray-800 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => window.open(`https://wa.me/${contacts.whatsapp}`, "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp: {contacts.whatsapp}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-gray-800 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => window.open(contacts.whatsappChannel, "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Channel
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-gray-800 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => window.open(contacts.instagram, "_blank")}
          >
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-gray-800 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => window.open(contacts.tiktok, "_blank")}
          >
            <Music className="mr-2 h-4 w-4" />
            TikTok
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-gray-800 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            onClick={() => window.open(contacts.website, "_blank")}
          >
            <Globe className="mr-2 h-4 w-4" />
            Website
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactSupport
