import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const instagramPosts = [
  "https://scontent-dfw5-2.cdninstagram.com/v/t51.29350-15/391447465_2049401978749431_4439736819479264537_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=8axSYhtn8pEQ7kNvwGEyakj&_nc_oc=AdmIMws-HnEGSOJzXwgAtXDkmdVu0srXyU23sZYFq2B92BreQ6QQaWyn1UtIBc4Qa-qcm4Gl8ct2TiHlarRcVIHl&_nc_zt=23&_nc_ht=scontent-dfw5-2.cdninstagram.com&edm=APCawUEEAAAA&_nc_gid=ebkggt8o018H7AZlMRsimw&oh=00_AfVyVTnr3y4GwiUivjzhU8g0ODLnqQJaouOvHunTSDA4TQ&oe=68A679FE",
  "https://scontent-dfw5-3.cdninstagram.com/v/t51.29350-15/391343971_232630596207095_5836359012798331309_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=jv7oR-VNRicQ7kNvwHQWQOg&_nc_oc=AdlUzjxr_5Gz0QuNFtfVEvLyzPnPZl1KEjuV-mpgZU4FLFXfMuCdFT7pvXZzr5yVlXlL8Abj4Qw6XFZ69HQNqzV-&_nc_zt=23&_nc_ht=scontent-dfw5-3.cdninstagram.com&edm=APCawUEEAAAA&_nc_gid=ebkggt8o018H7AZlMRsimw&oh=00_AfUiZBN3ZmoFuUPh_qccjRH-bc1C5C4rj8DAX0MLZec_1A&oe=68A67739",
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
