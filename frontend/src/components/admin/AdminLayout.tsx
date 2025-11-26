import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FiHome, FiGrid, FiMessageSquare, FiFileText, FiUsers, 
  FiImage, FiHeart, FiBook, FiMail, FiSettings, FiLogOut, FiMenu, FiX 
} from 'react-icons/fi';
import { useAuthStore } from '../../store/authStore';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/admin' },
    { icon: FiGrid, label: 'Services', path: '/admin/services' },
    { icon: FiMessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
    { icon: FiFileText, label: 'Case Studies', path: '/admin/case-studies' },
    { icon: FiUsers, label: 'Team', path: '/admin/team' },
    { icon: FiImage, label: 'Gallery', path: '/admin/gallery' },
    { icon: FiHeart, label: 'Conditions', path: '/admin/conditions' },
    { icon: FiBook, label: 'Resources', path: '/admin/resources' },
    { icon: FiMail, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: FiSettings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="w-64 bg-white shadow-lg fixed lg:sticky top-0 h-screen z-50 overflow-y-auto"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sparsh Admin</div>
                  <div className="text-xs text-gray-500">{user?.name}</div>
                </div>
              </div>
            </div>

            <nav className="p-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-gray-200 absolute bottom-0 left-0 right-0 bg-white">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full transition-colors"
              >
                <FiLogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="flex items-center gap-4">
              <Link to="/" target="_blank" className="text-sm text-gray-600 hover:text-primary-600">
                View Website
              </Link>
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

