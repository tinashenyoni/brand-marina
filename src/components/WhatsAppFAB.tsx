"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const phoneNumber = "263772800883";
  const defaultMessage = encodeURIComponent(
    "Hi Brand Marina! I'd like to enquire about your products."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative overflow-hidden">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
        {/* Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-lg shadow-whatsapp/30 group-hover:scale-110 transition-transform duration-200">
          <MessageCircle size={24} className="text-white" fill="white" />
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-charcoal text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-5 w-2 h-2 bg-charcoal rotate-45 -translate-y-1" />
        </div>
      </div>
    </a>
  );
}
