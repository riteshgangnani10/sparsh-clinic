import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Services', value: '6', color: 'bg-blue-500' },
    { label: 'Testimonials', value: '45', color: 'bg-green-500' },
    { label: 'Case Studies', value: '12', color: 'bg-purple-500' },
    { label: 'Team Members', value: '8', color: 'bg-orange-500' },
    { label: 'Gallery Items', value: '150', color: 'bg-pink-500' },
    { label: 'Inquiries', value: '23', color: 'bg-red-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-2xl shadow-soft p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg opacity-20`}></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-soft p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn btn-outline">Add Service</button>
          <button className="btn btn-outline">Add Testimonial</button>
          <button className="btn btn-outline">Upload Media</button>
          <button className="btn btn-outline">View Inquiries</button>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h3 className="font-semibold text-yellow-900 mb-2">🚀 Admin Panel Information</h3>
        <p className="text-yellow-800">
          This is a basic admin dashboard. Use the sidebar to navigate to different sections and manage your clinic's content.
          Each section provides full CRUD operations for its respective content type.
        </p>
      </div>
    </div>
  );
}

