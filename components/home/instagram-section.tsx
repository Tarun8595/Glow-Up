import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const instagramPosts = [
  "https://i.pinimg.com/736x/60/30/68/6030685e3463acbe9e909bba27f5adf5.jpg",
  "https://i.pinimg.com/736x/7f/76/d6/7f76d66a6dd9a046cfe226f44cbcc9bd.jpg",
  "https://i.pinimg.com/736x/cb/3b/56/cb3b56d24f8f1274a63d2c6ac728e02f.jpg",
  "https://i.pinimg.com/736x/07/59/f7/0759f77d2d662b176b7051b6eeac6651.jpg",
]

export default function InstagramSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-6">Join Our Instagram Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on Instagram for daily inspiration, behind-the-scenes content, and exclusive offers.
          </p>
          <div className="flex items-center justify-center mb-8">
            <Instagram className="w-12 h-12 text-primary mr-4" />
            <span className="text-4xl heading-lg">Gtsyntax</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={post || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="https://www.instagram.com/gtsyntax/" target="_blank" rel="noopener noreferrer">
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
