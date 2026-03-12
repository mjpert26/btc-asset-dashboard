"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Global",
    image: "SC",
    rating: 5,
    text: "Big Think Capital's asset tracking dashboard has transformed how we manage our IT infrastructure. We've reduced asset loss by 95% and cut procurement costs significantly."
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "FinanceHub LLC",
    image: "MR",
    rating: 5,
    text: "The real-time tracking and automated alerts have made equipment management effortless. Our team can now focus on strategic initiatives instead of chasing down laptops."
  },
  {
    name: "Emily Watson",
    role: "CFO",
    company: "Quantum Innovations",
    image: "EW",
    rating: 5,
    text: "The ROI was immediate. We've saved over $200K in the first year alone through better asset utilization and reduced redundant purchases. Absolutely essential tool."
  },
  {
    name: "David Kim",
    role: "Head of Technology",
    company: "DataStream Systems",
    image: "DK",
    rating: 5,
    text: "Integration was seamless and the support team is outstanding. The analytics dashboard gives us insights we never had before about our equipment lifecycle."
  },
  {
    name: "Jennifer Martinez",
    role: "VP of Operations",
    company: "CloudScale Partners",
    image: "JM",
    rating: 5,
    text: "Managing 500+ assets across multiple locations used to be a nightmare. Now it's simple, organized, and we have complete visibility into every device."
  },
  {
    name: "Robert Thompson",
    role: "IT Manager",
    company: "SecureNet Solutions",
    image: "RT",
    rating: 5,
    text: "The maintenance tracking feature alone has saved us countless hours. We can predict failures before they happen and keep our team productive."
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their IT asset management with our platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Assets Tracked</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}