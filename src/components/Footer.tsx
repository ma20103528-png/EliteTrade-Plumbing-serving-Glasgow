import { Shield, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold tracking-tighter">ELITETRADE</span>
              <span className="text-brand-primary font-bold mb-0.5">PLUMBING</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your local plumbing and heating experts in Glasgow. Committed to excellence, safety, and rapid response times.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/5 p-2 pr-4 rounded-lg border border-white/10">
                <Shield className="text-brand-primary" size={20} />
                <span className="text-xs font-bold uppercase tracking-tighter">Gas Safe Registered</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Popular Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <ChevronRight size={14} className="text-brand-primary" />
                Boiler Repairs
              </li>
              <li className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <ChevronRight size={14} className="text-brand-primary" />
                Emergency Leaks
              </li>
              <li className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <ChevronRight size={14} className="text-brand-primary" />
                Power Flushing
              </li>
              <li className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <ChevronRight size={14} className="text-brand-primary" />
                Bath Installation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Service Areas</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Glasgow City Centre</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">West End & Merchant City</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">East Kilbride & Paisley</li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">Clydebank & Bearsden</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Emergency?</h4>
            <p className="text-gray-400 mb-6">Call our 24/7 dispatch line for immediate assistance.</p>
            <a 
              href="tel:01414659021"
              className="text-2xl font-bold text-brand-accent hover:text-red-500 transition-colors"
            >
              0141 465 9021
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EliteTrade Plumbing Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
