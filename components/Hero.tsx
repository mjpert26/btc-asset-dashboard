"use client";
import { motion } from "framer-motion";
import { Laptop, Monitor, Keyboard, HardDrive, Clock, CheckCircle, AlertCircle, Users, BarChart3, Wrench } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { label: "Total Assets", value: "150+", icon: HardDrive },
  { label: "Active Employees", value: "85", icon: Users },
  { label: "Pending Repairs", value: "12", icon: Wrench },
  { label: "Asset Utilization", value: "94%", icon: BarChart3 }
];

const features = [
  {
    title: "Asset Inventory",
    description: "150+ devices tracked across all departments with real-time status updates",
    icon: Laptop,
    stat: "150+ devices"
  },
  {
    title: "Employee Assignments",
    description: "Real-time tracking of who has what equipment with assignment history",
    icon: Users,
    stat: "85 employees"
  },
  {
    title: "Repair & Maintenance",
    description: "Integrated ticket system for managing repairs and maintenance schedules",
    icon: Wrench,
    stat: "12 active tickets"
  },
  {
    title: "Reports & Analytics",
    description: "Comprehensive usage insights and depreciation tracking for informed decisions",
    icon: BarChart3,
    stat: "94% utilization"
  }
];

const assets = [
  { id: "MAC-001", type: "MacBook Pro", model: "16-inch M3 Max", assignedTo: "Sarah Chen", status: "Active", location: "Engineering", serial: "C02XG0ECG8WP", purchased: "2024-01-15" },
  { id: "MAC-002", type: "MacBook Pro", model: "14-inch M3 Pro", assignedTo: "James Wilson", status: "Active", location: "Design", serial: "C02YH1FDH7JY", purchased: "2024-02-20" },
  { id: "MAC-003", type: "MacBook Pro", model: "16-inch M3 Max", assignedTo: "Maria Garcia", status: "Active", location: "Engineering", serial: "C02ZJ2GEJ8KL", purchased: "2024-01-10" },
  { id: "MAC-004", type: "MacBook Pro", model: "14-inch M3", assignedTo: "David Park", status: "In Repair", location: "IT Department", serial: "C02AK3HFK9MN", purchased: "2023-11-05" },
  { id: "MAC-005", type: "MacBook Pro", model: "16-inch M3 Pro", assignedTo: "Emma Thompson", status: "Active", location: "Marketing", serial: "C02BL4JGL0PQ", purchased: "2024-03-12" },
  { id: "MON-001", type: "Dell Monitor", model: "27-inch 4K U2723DE", assignedTo: "Sarah Chen", status: "Active", location: "Engineering", serial: "CN0987ABCD12", purchased: "2024-01-15" },
  { id: "MON-002", type: "Dell Monitor", model: "27-inch 4K U2723DE", assignedTo: "James Wilson", status: "Active", location: "Design", serial: "CN0987EFGH34", purchased: "2024-02-20" },
  { id: "MON-003", type: "Dell Monitor", model: "27-inch 4K U2723DE", assignedTo: "Maria Garcia", status: "Active", location: "Engineering", serial: "CN0987IJKL56", purchased: "2024-01-10" },
  { id: "MON-004", type: "Dell Monitor", model: "27-inch 4K U2723DE", assignedTo: "Unassigned", status: "Available", location: "Storage", serial: "CN0987MNOP78", purchased: "2024-03-01" },
  { id: "MON-005", type: "Dell Monitor", model: "27-inch 4K U2723DE", assignedTo: "Emma Thompson", status: "Active", location: "Marketing", serial: "CN0987QRST90", purchased: "2024-03-12" },
  { id: "PER-001", type: "Keyboard", model: "Logitech MX Keys", assignedTo: "Sarah Chen", status: "Active", location: "Engineering", serial: "LG1234567890", purchased: "2024-01-15" },
  { id: "PER-002", type: "Mouse", model: "Logitech MX Master 3S", assignedTo: "James Wilson", status: "Active", location: "Design", serial: "LG2345678901", purchased: "2024-02-20" },
  { id: "PER-003", type: "Docking Station", model: "CalDigit TS4", assignedTo: "Maria Garcia", status: "Active", location: "Engineering", serial: "CD3456789012", purchased: "2024-01-10" },
  { id: "PER-004", type: "Keyboard", model: "Logitech MX Keys", assignedTo: "David Park", status: "Active", location: "IT Department", serial: "LG4567890123", purchased: "2023-11-05" },
  { id: "PER-005", type: "Docking Station", model: "CalDigit TS4", assignedTo: "Emma Thompson", status: "Active", location: "Marketing", serial: "CD5678901234", purchased: "2024-03-12" }
];

const employees = [
  { name: "Sarah Chen", department: "Engineering", assets: 3, email: "sarah.chen@bigthinkcapital.com", avatar: "SC" },
  { name: "James Wilson", department: "Design", assets: 3, email: "james.wilson@bigthinkcapital.com", avatar: "JW" },
  { name: "Maria Garcia", department: "Engineering", assets: 3, email: "maria.garcia@bigthinkcapital.com", avatar: "MG" },
  { name: "David Park", department: "IT Department", assets: 2, email: "david.park@bigthinkcapital.com", avatar: "DP" },
  { name: "Emma Thompson", department: "Marketing", assets: 3, email: "emma.thompson@bigthinkcapital.com", avatar: "ET" },
  { name: "Michael Chen", department: "Finance", assets: 2, email: "michael.chen@bigthinkcapital.com", avatar: "MC" },
  { name: "Lisa Anderson", department: "HR", assets: 2, email: "lisa.anderson@bigthinkcapital.com", avatar: "LA" },
  { name: "Robert Martinez", department: "Sales", assets: 3, email: "robert.martinez@bigthinkcapital.com", avatar: "RM" }
];

const repairLogs = [
  { ticket: "TKT-001", asset: "MAC-004", issue: "Battery replacement needed", status: "In Progress", priority: "High", created: "2024-12-15", assignedTo: "IT Support" },
  { ticket: "TKT-002", asset: "MON-008", issue: "Display flickering", status: "Pending", priority: "Medium", created: "2024-12-14", assignedTo: "David Park" },
  { ticket: "TKT-003", asset: "PER-012", issue: "Docking station not charging", status: "Completed", priority: "Medium", created: "2024-12-13", assignedTo: "IT Support" },
  { ticket: "TKT-004", asset: "MAC-007", issue: "Keyboard keys sticking", status: "In Progress", priority: "Low", created: "2024-12-12", assignedTo: "IT Support" },
  { ticket: "TKT-005", asset: "MON-015", issue: "No power", status: "Pending", priority: "High", created: "2024-12-11", assignedTo: "David Park" },
  { ticket: "TKT-006", asset: "PER-018", issue: "Mouse scroll wheel broken", status: "Completed", priority: "Low", created: "2024-12-10", assignedTo: "IT Support" },
  { ticket: "TKT-007", asset: "MAC-011", issue: "Software update required", status: "Completed", priority: "Medium", created: "2024-12-09", assignedTo: "IT Support" },
  { ticket: "TKT-008", asset: "MON-019", issue: "Color calibration needed", status: "In Progress", priority: "Low", created: "2024-12-08", assignedTo: "David Park" },
  { ticket: "TKT-009", asset: "PER-022", issue: "USB-C port malfunction", status: "Pending", priority: "High", created: "2024-12-07", assignedTo: "IT Support" },
  { ticket: "TKT-010", asset: "MAC-014", issue: "Fan noise excessive", status: "Completed", priority: "Medium", created: "2024-12-06", assignedTo: "IT Support" }
];

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1E40AF]/10 to-[#0A0A0F]">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-full text-white text-sm font-semibold">
                Big Think Capital
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              IT Asset Management
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive tracking and management of all IT assets across your organization
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <stat.icon className="w-8 h-8 text-[#3B82F6] mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to manage IT assets effectively
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="text-[#3B82F6] font-semibold">{feature.stat}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Asset Inventory
            </h2>
            <p className="text-xl text-gray-400">
              Real-time overview of all tracked devices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Asset ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Assigned To</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <motion.tr
                      key={asset.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-white font-mono">{asset.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{asset.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{asset.model}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{asset.assignedTo}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          asset.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                          asset.status === 'In Repair' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {asset.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                          {asset.status === 'In Repair' && <Wrench className="w-3 h-3" />}
                          {asset.status === 'Available' && <Clock className="w-3 h-3" />}
                          {asset.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{asset.location}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Employee Assignments
            </h2>
            <p className="text-xl text-gray-400">
              Track equipment assigned to each team member
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {employees.map((employee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">
                    {employee.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{employee.name}</h3>
                    <p className="text-sm text-gray-400">{employee.department}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 mb-2">{employee.email}</div>
                <div className="flex items-center gap-2 text-[#3B82F6]">
                  <HardDrive className="w-4 h-4" />
                  <span className="text-sm font-semibold">{employee.assets} assets assigned</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Repair & Maintenance Log
            </h2>
            <p className="text-xl text-gray-400">
              Recent service tickets and their status
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Ticket ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Asset</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Issue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Assigned To</th>
                  </tr>
                </thead>
                <tbody>
                  {repairLogs.map((log, index) => (
                    <motion.tr
                      key={log.ticket}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-white font-mono">{log.ticket}</td>
                      <td className="px-6 py-4 text-sm text-gray-300 font-mono">{log.asset}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{log.issue}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          log.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                          log.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {log.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                          {log.status === 'In Progress' && <Clock className="w-3 h-3" />}
                          {log.status === 'Pending' && <AlertCircle className="w-3 h-3" />}
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          log.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                          log.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {log.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{log.created}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{log.assignedTo}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}