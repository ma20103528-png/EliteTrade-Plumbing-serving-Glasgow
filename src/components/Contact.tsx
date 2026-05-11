import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-brand-primary p-10 md:p-14 text-white">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-blue-100 mb-12 text-lg leading-relaxed">
                Need a quote or a quick repair? Send us a message or call our dispatch team directly.
              </p>
              
              <div className="space-y-8">
                <a href="tel:01414659021" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-bold tracking-wider">Phone</p>
                    <p className="text-xl font-bold tracking-tight text-white group-hover:text-white/90">0141 465 9021</p>
                  </div>
                </a>
                
                <a href="mailto:info@elitetradeplumbing.co.uk" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-bold tracking-wider">Email</p>
                    <p className="text-lg font-bold group-hover:text-white/90">info@elitetradeplumbing.co.uk</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-bold tracking-wider">HQ Location</p>
                    <p className="text-lg font-bold">Glasgow, G1 1XQ</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-10 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-bold">Available Now for Emergencies</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-2/3 p-10 md:p-14">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="07xxx xxxxxx"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Service Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Boiler Repair</option>
                    <option>General Plumbing</option>
                    <option>Emergency Leak</option>
                    <option>Drain Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Postcode</label>
                  <input 
                    type="text" 
                    placeholder="G1, PA1, etc."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Describe your issue</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe what you need help with..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand-secondary text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <Send size={20} />
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
