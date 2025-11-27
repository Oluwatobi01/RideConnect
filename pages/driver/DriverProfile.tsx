
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { useTheme } from '../../contexts/ThemeContext';

const DriverProfile: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Profile</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 pb-24">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="size-20 rounded-full bg-cover bg-center border-2 border-white dark:border-card-dark shadow-sm shrink-0"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCdBEoBIwcU5kGToTemhXg35bBvlm2CPC4U1JeWE8_UhGx7cBjTfXiU_0jVrzUPIpLHj_tqhaVtcGbvGFF6W5aW5U8ybFwarSNIOC5STjYG9ooSSpllSCJoxSLYzh4da3rz9UZY8uOk8P9SZ6-2SQshwE7bIDbJd2bST-B0uZxuiiVCho-W2lzEXUhfXRACR8AF5NHdvc5KFAx36gFVHr0DDl0-QFIu2C3DvE82EvD5-rRnce36U43_6Djd6xtQzMBivRQJU3LkRI")' }}
          ></div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-0.5">Jameson Smith</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Pro Driver</p>
          </div>
        </div>

        {/* Go Online Action */}
        <button 
            onClick={() => navigate('/driver/dashboard')}
            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mb-8 hover:bg-primary/90 transition-colors"
        >
          <Icon name="wifi" />
          Go Online
        </button>

        {/* Rating Section */}
        <div className="flex items-center gap-8 mb-8 px-2">
            <div>
                <h3 className="text-5xl font-extrabold tracking-tighter">4.9</h3>
                <div className="flex items-center gap-0.5 text-warning my-1">
                    <Icon name="star" className="text-lg" fill />
                    <Icon name="star" className="text-lg" fill />
                    <Icon name="star" className="text-lg" fill />
                    <Icon name="star" className="text-lg" fill />
                    <Icon name="star_half" className="text-lg" fill />
                </div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">1,284 reviews</p>
            </div>
            
            {/* Bars */}
            <div className="flex-1 space-y-1.5">
                {[
                    { l: '5', w: '80%' },
                    { l: '4', w: '15%' },
                    { l: '3', w: '3%' },
                    { l: '2', w: '1%' },
                    { l: '1', w: '1%' },
                ].map((bar) => (
                    <div key={bar.l} className="flex items-center gap-2 text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                        <span>{bar.l}</span>
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: bar.w }}></div>
                        </div>
                        <span className="w-6 text-right">{bar.w.replace('%','')}%</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-xl flex mb-6">
            <button className="flex-1 py-2 bg-white dark:bg-card-dark shadow-sm rounded-lg text-sm font-bold text-primary">My Profile</button>
            <button 
                onClick={() => navigate('/driver/ratings')} 
                className="flex-1 py-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            >
                Reviews
            </button>
        </div>

        {/* Account Management */}
        <h3 className="text-lg font-bold mb-4 px-2">Account Management</h3>
        <div className="space-y-3 mb-8">
            <div onClick={() => navigate('/driver/personal-info')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <Icon name="person" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Personal Information</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">J. Smith, +1 *** *** 1234</p>
                    </div>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            <div onClick={() => navigate('/driver/vehicle')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <Icon name="directions_car" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Vehicle Details</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">Honda Civic - ABC 123</p>
                    </div>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            <div onClick={() => navigate('/driver/documents')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <Icon name="badge" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Required Documents</p>
                        <div className="flex items-center gap-1 mt-0.5">
                             <Icon name="check_circle" className="text-success text-xs" fill />
                             <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">All Verified</p>
                        </div>
                    </div>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            <div onClick={() => navigate('/driver/payouts')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <Icon name="credit_card" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Payout Methods</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">Bank Account **** 1234</p>
                    </div>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
        </div>

        {/* Support & Settings */}
        <h3 className="text-lg font-bold mb-4 px-2">Support & Settings</h3>
        <div className="space-y-3 mb-8">
            {/* Theme Toggle */}
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark">
                        <Icon name="dark_mode" />
                    </div>
                    <span className="font-bold text-sm">Dark Mode</span>
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

            <div onClick={() => navigate('/driver/help')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark">
                        <Icon name="help_outline" />
                    </div>
                    <span className="font-bold text-sm">Help Center</span>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
             <div onClick={() => navigate('/driver/settings')} className="bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark">
                        <Icon name="settings" />
                    </div>
                    <span className="font-bold text-sm">App Settings</span>
                </div>
                <Icon name="chevron_right" className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>
        </div>

        {/* Log Out */}
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-danger font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
        >
          <Icon name="logout" className="text-xl" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DriverProfile;
