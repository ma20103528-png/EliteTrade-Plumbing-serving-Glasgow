import { MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const AREAS = [
  "Glasgow City Centre",
  "West End",
  "Southside",
  "Paisley",
  "East Kilbride",
  "Clydebank",
  "Bearsden",
  "Newton Mearns"
];

export function ServiceAreas() {
  return (
    <section id="areas" className="section-padding bg-brand-secondary text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Proudly Serving <span className="text-brand-primary">Glasgow</span> & Greater Districts
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Our fleet of fully-equipped vans is strategically positioned to reach any address in Glasgow and surrounding areas within 60 minutes for emergency calls.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AREAS.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 size={20} className="text-brand-primary shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-1">Response Time</p>
                  <p className="text-3xl font-bold">&lt; 1 Hour</p>
                </div>
                <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center">
                  <MapPin size={32} className="text-brand-primary" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Emergency Response</span>
                  <span className="font-mono text-green-400">AVAILABLE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Call-Out Fee</span>
                  <span className="font-bold text-white">£0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Coverage Radius</span>
                  <span className="font-bold">25 Miles</span>
                </div>
              </div>
              
              <a 
                href="tel:01414659021"
                className="mt-10 w-full bg-white text-brand-secondary py-4 rounded-xl font-bold text-center block hover:bg-gray-100 transition-colors"
              >
                Check Availability Near You
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
