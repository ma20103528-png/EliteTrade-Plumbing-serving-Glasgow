import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581242163695-19d0acfd486f?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional Plumber Glasgow"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-primary/20 backdrop-blur-sm border border-brand-primary/30 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              24/7 Emergency Plumbing Glasgow
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Expert Plumbing Services When You Need It <span className="text-brand-primary">Most.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              From burst pipes to boiler breakdowns, EliteTrade Plumbing provides rapid, reliable, and professional solutions across GLASGOW. No call-out charge for emergencies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="tel:01414659021"
                className="bg-brand-accent hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/30"
              >
                <Phone size={20} fill="currentColor" />
                Call 0141 465 9021
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all"
              >
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Clock className="text-brand-primary shrink-0" size={24} />
                <div className="text-sm">
                  <p className="font-bold">Fast Response</p>
                  <p className="text-gray-400">Within 60 Mins</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-primary shrink-0" size={24} />
                <div className="text-sm">
                  <p className="font-bold">Gas Safe</p>
                  <p className="text-gray-400">Certified Engineers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-brand-primary shrink-0" size={24} />
                <div className="text-sm">
                  <p className="font-bold">Guaranteed</p>
                  <p className="text-gray-400">12-Month Warranty</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
