"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, Clock } from "lucide-react";

const stats = [
  {
    label: "Total Assets",
    value: "150+",
    change: "+12%",
    trend: "up",
    icon: Activity,
  },
  {
    label: "Active Employees",
    value: "48",
    change: "+8%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Assets in Repair",
    value: "7",
    change: "-15%",
    trend: "down",
    icon: Clock,
  },
  {
    label: "Utilization Rate",
    value: "94%",
    change: "+3%",
    trend: "up",
    icon: TrendingUp,
  },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 px-6 bg-[#09090B] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    <span>{stat.change}</span>
                    <TrendingUp className={`w-4 h-4 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}