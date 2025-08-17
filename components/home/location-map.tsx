"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Define salon locations
const locations = [
{ name: "GTSyntax - Dwarka Mor Metro Station, New Delhi", position: [28.6216, 77.0431] as [number, number] }
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState(null)
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
      <div className="h-[400px] rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[19.076, 72.8777]} zoom={11} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={customIcon}
            eventHandlers={{
              click: () => setActiveLocation(location),
            }}
          >
            <Popup>
              <div className="font-semibold">{location.name}</div>
              <Button asChild size="sm" className="mt-2 bg-primary text-white">
                <Link href="/booking">Book Now</Link>
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
