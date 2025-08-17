import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/gettyimages-1055658672-scaled.jpg"
          alt="Luxurious salon interior"
          fill
          className="object-cover brightness-90  contrast-125"
          priority
        />
        {/*<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>*/}
      </div>

      <div className="container-custom pb-5 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl heading-lg text-white mb-6 leading-tight">
            Be Bold Be Beautiful <br></br>{" "}
            <span className="from-primary text-center heading-lg text-5xl md:text-6xl lg:text-9xl">
              Be You
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Indulge in premium beauty services tailored for you. Where style meets excellence and confidence is born.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-lg font-semilight px-8 py-4">
              <Link href="/booking">Book Your Experience</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 text-white border-white bg-transparent hover:bg-white/10"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                    alt={`Happy customer ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-yellow-400 flex text-2xl">{"★★★★★"}</div>
              <p className="text-sm text-gray-300">Trusted by 10,000+ happy clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 home-bottom-shadow"></div>
    </section>
  )
}
