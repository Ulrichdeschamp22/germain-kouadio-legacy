import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/2250787144278"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
    </a>
  );
};

export default WhatsAppButton;