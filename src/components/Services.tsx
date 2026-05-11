import { Droplets, Flame, Hammer, Wrench, Siren, Timer } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  {
    title: "Emergency Plumbing",
    desc: "Burst pipes, major leaks, and drainage issues. Available 24/7 with immediate dispatch.",
    icon: Siren,
    color: "bg-red-50 text-brand-accent"
  },
  {
    title: "Boiler Repairs",
    desc: "Prompt repairs and diagnostic services for all major boiler brands. Gas Safe registered.",
    icon: Flame,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Drain Cleaning",
    desc: "High-pressure water jetting and CCTV surveys to clear even the most stubborn blockages.",
    icon: Droplets,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "General Maintenance",
    desc: "Tap replacements, radiator bleeding, and pipework upgrades to keep your home running smoothly.",
    icon: Wrench,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Bathroom Fitting",
    desc: "Complete design and installation services for premium, modern bathrooms and wet rooms.",
    icon: Hammer,
    color: "bg-gray-50 text-gray-600"
  },
  {
    title: "Landlord Safety",
    desc: "Gas Safety Certificates (CP12) and annual plumbing health checks for rental properties.",
    icon: Timer,
    color: "bg-green-50 text-green-600"
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600">
              EliteTrade Plumbing offers a comprehensive range of solutions handled by certified experts. We pride ourselves on transparent pricing and rapid turnaround.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="text-brand-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Enquire Now
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
