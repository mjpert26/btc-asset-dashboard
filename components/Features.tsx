"use client";
import { motion } from "framer-motion";
import { Package, Users, Wrench, BarChart3, CheckCircle, AlertCircle, Clock } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Asset Inventory",
    description: "150+ devices tracked",
    detail: "Complete visibility of all IT assets across your organization with real-time status updates and comprehensive device information."
  },
  {
    icon: Users,
    title: "Employee Assignments",
    description: "Real-time tracking",
    detail: "Instantly see which employee has which device, track assignment history, and manage equipment distribution efficiently."
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Ticket system",
    detail: "Streamlined repair workflow with automated ticket creation, status tracking, and maintenance scheduling for all your assets."
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Usage insights",
    detail: "Powerful analytics dashboard providing actionable insights on asset utilization, costs, lifecycle management, and ROI metrics."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Powerful Features for Complete Asset Control
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage, track, and optimize your IT infrastructure in one comprehensive platform
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#3B82F6] font-semibold mb-3">{feature.description}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">99.8%</div>
            <div className="text-gray-400">Asset Tracking Accuracy</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Real-Time Monitoring</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">< 2hrs</div>
            <div className="text-gray-400">Average Response Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}