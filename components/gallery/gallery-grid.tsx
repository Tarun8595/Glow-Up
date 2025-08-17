"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Scissors, Palette, Sparkles, Users } from "lucide-react"

// Gallery data
const galleryItems = {
  all: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Salon interior",
      category: "interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Hairstyling",
      category: "hair",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Nail art design",
      category: "nails",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Makeup look",
      category: "makeup",
    },
    {
      id: 5,
      src: "https://coiffure.vamtam.com/wp-content/uploads/sb-instagram-feed-images/334704900_197080139630268_8276323361087041646_nfull.jpg",
      alt: "Beard trimming",
      category: "hair",
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/a8/15/4a/a8154a3e821c31500764aa87fb6ac996.jpg",
      alt: "Bridal makeup",
      category: "makeup",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Nail art design",
      category: "nails",
    },
    {
      id: 8,
      src: "https://i.pinimg.com/736x/f3/36/08/f33608e4d3738d349c06a0129c5f3f8d.jpg",
      alt: "Men's hair coloring",
      category: "hair",
    },
    {
      id: 9,
      src: "https://i.pinimg.com/736x/0a/1e/dd/0a1eddc0f25bcb4f962ee5888245ac48.jpg",
      alt: "Women's hair coloring",
      category: "hair",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Pedicure",
      category: "nails",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Party makeup",
      category: "makeup",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Women's haircut",
      category: "hair",
    },
  ],
  get hair() {
    return this.all.filter((item) => item.category === "hair")
  },
  get nails() {
    return this.all.filter((item) => item.category === "nails")
  },
  get makeup() {
    return this.all.filter((item) => item.category === "makeup")
  },
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="hair" className="flex items-center gap-2">
              <Scissors className="h-4 w-4" />
              <span>Hair</span>
            </TabsTrigger>
            <TabsTrigger value="nails" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Nails</span>
            </TabsTrigger>
            <TabsTrigger value="makeup" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Makeup</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.keys(galleryItems).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems[category as keyof typeof galleryItems].map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group salon-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => {
                        setSelectedImage(item.src)
                        setSelectedAlt(item.alt)
                      }}
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">{item.alt}</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative aspect-video w-full">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                    </div>
                    <p className="text-center text-gray-700 mt-2 font-medium">{item.alt}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
