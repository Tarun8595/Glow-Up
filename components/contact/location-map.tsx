"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

export default function LocationMap() {
  const [isClient, setIsClient] = useState(false)
  const [customIcon, setCustomIcon] = useState(null)

  useEffect(() => {
    setIsClient(true)

    const loadLeaflet = async () => {
      if (typeof window !== "undefined") {
        // Import Leaflet CSS
        await import("leaflet/dist/leaflet.css")

        // Import Leaflet Icon
        const { Icon } = await import("leaflet")

        const icon = new Icon({
          iconUrl: "/placeholder.svg?height=41&width=32&text=📍",
          iconSize: [32, 41],
          iconAnchor: [16, 41],
          popupAnchor: [0, -41],
        })

        setCustomIcon(icon)
      }
    }

    loadLeaflet()
  }, [])

  if (!isClient || !customIcon) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <MapContainer center={[19.076, 72.8777]} zoom={11} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[19.076, 72.8777]} icon={customIcon}>
          <Popup>Glow Unisex Salon</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
