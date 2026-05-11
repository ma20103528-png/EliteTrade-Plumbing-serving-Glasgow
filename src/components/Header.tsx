import { Phone, Mail, Clock, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CONTACT = {
  phone: "0141 465 9021",
  email: "info@elitetradeplumbing.co.uk",
  hours: "24/7 Service"
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-secondary text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-primary transition-colors">
              <Phone size={14} className="text-brand-primary" />
              <span>{CONTACT.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-brand-primary" />
              <span>{CONTACT.hours} Emergency Response</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-primary" />
            <span>Serving Glasgow & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-end gap-1">
            <span className="text-2xl font-bold text-brand-secondary tracking-tighter">ELITETRADE</span>
            <span className="text-brand-primary font-bold mb-0.5">PLUMBING</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
            <a href="#areas" className="hover:text-brand-primary transition-colors">Service Areas</a>
            <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
            <a 
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="bg-brand-accent text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-accent/20 font-bold uppercase text-sm tracking-wide"
            >
              <Phone size={16} fill="currentColor" />
              Emergency Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-secondary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100 absolute left-0 right-0 top-full shadow-xl"
            >
              <div className="flex flex-col p-6 gap-6 font-medium">
                <a href="#services" onClick={() => setIsOpen(false)} className="text-lg">Services</a>
                <a href="#areas" onClick={() => setIsOpen(false)} className="text-lg">Service Areas</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="text-lg">About</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg">Contact</a>
                <a 
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="bg-brand-accent text-white p-4 rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <Phone size={18} fill="currentColor" />
                  Call Now (24/7)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
