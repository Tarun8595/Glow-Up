import Image from "next/image"

export default function ServicesBanner() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://coiffure.vamtam.com/wp-content/uploads/2023/10/GettyImages-1454817345.jpg"
          alt="Salon services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl text-white font-lighta mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover our comprehensive range of beauty and grooming services designed for both men and women.
          </p>
        </div>
      </div>
    </section>
  )
}
