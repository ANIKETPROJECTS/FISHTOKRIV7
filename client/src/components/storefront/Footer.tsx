import { FishTokriLogo } from "@/components/storefront/FishTokriLogo";
import { SiInstagram, SiFacebook, SiX, SiWhatsapp, SiYoutube } from "react-icons/si";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#364F9F] text-white mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FishTokriLogo className="h-9 w-auto mb-4 brightness-0 invert" />
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Mumbai's freshest fish, seafood & meat — cleaned, packed, and delivered straight to your doorstep.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05B4E] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05B4E] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05B4E] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05B4E] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05B4E] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Shop Fish", href: "/category/Fish" },
                { label: "Shop Prawns", href: "/category/Prawns" },
                { label: "Shop Chicken", href: "/category/Chicken" },
                { label: "Shop Mutton", href: "/category/Mutton" },
                { label: "Combo Deals", href: "/category/Combo" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-blue-200 text-sm hover:text-[#F05B4E] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "My Orders", href: "/profile" },
                { label: "My Profile", href: "/profile" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "FAQ", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-blue-200 text-sm hover:text-[#F05B4E] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F05B4E] shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm leading-snug">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F05B4E] shrink-0" />
                <a href="tel:+919999999999" className="text-blue-200 text-sm hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F05B4E] shrink-0" />
                <a href="mailto:hello@fishtokri.com" className="text-blue-200 text-sm hover:text-white transition-colors">
                  hello@fishtokri.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F05B4E] shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm leading-snug">
                  Mon – Sun: 6:00 AM – 9:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} FishTokri. All rights reserved. Made with ❤️ in Mumbai.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-300 text-xs">Delivery available today</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
