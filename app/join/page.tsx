import { FaWhatsapp } from "react-icons/fa";
export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="title-hero mb-6">Join Our Learning Community!</h1>
      <p className="text-body-xl text-text-secondary max-w-2xl mx-auto mb-8">
        While we process your registration, stay updated and connected by
        joining our WhatsApp group. We'll reach out to you soon with more
        details!
      </p>
      <a
        href={process.env.NEXT_PUBLIC_APP_WAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 text-white px-8 py-3 rounded-lg text-body-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="absolute left-2 top-2 size-7" />

        <span className="pl-3">Join WhatsApp Group</span>
      </a>
    </div>
  );
}
