"use client";

import { motion } from "framer-motion";
import { Menu, X, BarChart3, Package } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Big Think Capital</h1>
              <p className="text-xs text-gray-400">Asset Management</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#assets" className="text-gray-300 hover:text-white transition-colors">
              Assets
            </a>
            <a href="#employees" className="text-gray-300 hover:text-white transition-colors">
              Employees
            </a>
            <a href="#repairs" className="text-gray-300 hover:text-white transition-colors">
              Repairs
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">
              Analytics
            </a>
            <button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Reports
              </div>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#assets" className="text-gray-300 hover:text-white transition-colors">
              Assets
            </a>
            <a href="#employees" className="text-gray-300 hover:text-white transition-colors">
              Employees
            </a>
            <a href="#repairs" className="text-gray-300 hover:text-white transition-colors">
              Repairs
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">
              Analytics
            </a>
            <button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white px-6 py-2 rounded-full w-full">
              Reports
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}