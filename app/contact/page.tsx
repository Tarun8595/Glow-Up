import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Create By GTSyntax | Beauty for Alls ",
  description: "Get in touch with Glow Up & GTSyntax. Find our location, contact information, and business hours.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-primary py-20 mb-12 bg-[url('https://coiffure.vamtam.com/wp-content/uploads/2023/02/GettyImages-1269070582-scaled.jpg')] bg-center bg-cover">
        <div className="container-custom">
          <h1 className="heading-xl font-light text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services or to book your next appointment.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-20">
          <h2 className="heading-md mb-6">Find Us</h2>
          <LocationMap />
        </div>
      </div>
    </>
  )
}
