
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from './Icon';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Home', icon: 'home', path: '/rider/home' },
    { label: 'Your Trips', icon: 'history', path: '/rider/activity' },
    { label: 'Wallet', icon: 'account_balance_wallet', path: '/rider/payment' },
    { label: 'Settings', icon: 'settings', path: '/rider/profile' },
    { label: 'Support', icon: 'help', path: '/rider/profile' }, // Linking to profile where help is for now
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-card-dark z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 bg-primary text-white">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="size-16 rounded-full bg-cover bg-center border-2 border-white"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}
              ></div>
              <div>
                <h2 className="text-xl font-bold">Alex Rider</h2>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <span className="font-medium">4.9</span>
                  <Icon name="star" className="text-xs" fill />
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-text-primary-light dark:text-text-primary-dark'}`}
              >
                <Icon name={item.icon} className="text-2xl" />
                <span className="font-medium text-base">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-800">
            <button onClick={() => handleNavigate('/')} className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark font-medium">
              <Icon name="logout" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
