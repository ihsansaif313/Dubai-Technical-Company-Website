import React from 'react';
import { MessageCircle } from 'lucide-react';
interface WhatsAppButtonProps {
  language: string;
}
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  language
}) => {
  const phoneNumber = '+971588892256'; // Remove any non-numeric characters
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const tooltipText = language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp';
  return <div className="fixed bottom-8 right-8 z-50">
      <div className="group relative">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110" aria-label="Chat on WhatsApp">
          <MessageCircle className="w-8 h-8 text-white" />
          {/* Pulsing effect */}
          <span className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-75"></span>
        </a>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gray-900 text-white text-sm py-1 px-3 rounded shadow-lg whitespace-nowrap">
            {tooltipText}
          </div>
        </div>
      </div>
    </div>;
};
export default WhatsAppButton;