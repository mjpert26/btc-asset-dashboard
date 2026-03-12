"use client";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-[#09090B] border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Big Think Capital</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Advanced IT asset tracking and management solutions for modern enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Asset Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Press Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@bigthinkcapital.com" className="hover:text-white transition-colors">info@bigthinkcapital.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2 text-sm">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Big Think Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Built with</span>
              <span className="text-[#3B82F6]">♥</span>
              <span className="text-gray-400 text-sm">for IT teams worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}