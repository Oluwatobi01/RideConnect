
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { useTheme } from '../../contexts/ThemeContext';

const RiderProfile: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">My Profile</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 pb-12">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div 
              className="size-24 rounded-full bg-cover bg-center border-4 border-white dark:border-card-dark shadow-md"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}
            ></div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-white shadow-sm border-2 border-white dark:border-card-dark">
              <Icon name="edit" className="text-sm" />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-1">Alex Rider</h2>
          <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full">
            <Icon name="star" className="text-warning text-sm" fill />
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-500">4.9</span>
          </div>
        </div>

        {/* Account Information */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4 px-2">Account Information</h3>
          <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm">
            <div onClick={() => navigate('/rider/personal-info')} className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="person" />
                </div>
                <span className="font-medium">Personal Info</span>
              </div>
              <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
            
            <div onClick={() => navigate('/rider/saved-places')} className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="location_on" />
                </div>
                <span className="font-medium">Saved Places</span>
              </div>
              <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            <div onClick={() => navigate('/rider/payment')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="credit_card" />
                </div>
                <span className="font-medium">Payment Methods</span>
              </div>
              <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
          </div>
        </div>

        {/* Settings & Support */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 px-2">Settings & Support</h3>
          <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm">
            <div onClick={() => navigate('/rider/activity')} className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="history" />
                </div>
                <span className="font-medium">Ride History</span>
              </div>
              <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="dark_mode" />
                </div>
                <span className="font-medium">Dark Mode</span>
              </div>
              <button 
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${theme === 'dark' ? 'bg-primary' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <Icon name="help" />
                </div>
                <span className="font-medium">Help Center</span>
              </div>
              <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
          </div>
        </div>

        {/* Log Out */}
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-danger font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
        >
          <Icon name="logout" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default RiderProfile;
