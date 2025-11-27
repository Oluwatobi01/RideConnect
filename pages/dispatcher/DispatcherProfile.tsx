
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { useTheme } from '../../contexts/ThemeContext';

const DispatcherProfile: React.FC = () => {
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

      <div className="px-4 pb-12 max-w-2xl mx-auto">
        {/* Profile Card */}
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-sm mb-8 text-center relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
             
             <div className="relative">
                 <div className="relative mx-auto size-24 mb-4">
                     <div 
                        className="size-full rounded-full bg-cover bg-center border-4 border-white dark:border-card-dark shadow-md"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLIzyXy_ulR7BoLMjbLqtFv5VMS7oxRjhOHqQ_pb4hOKKETLZK1KXcLPr1ijuuidjZEvwZCVo1Y5UjZw8ZdE-t7SSYBD1QkIXOFs-FnjnpfzHJOQ8PrS3FasEUL-BWvM2wTL20gcwkcmdUQHLhgUDczpv9NYQclqx_k6Q3PKs3k7wEKmBCqv2YzafF1FSDMj5Pa6zlpELWWwu0tqiz7OWdAuZI_PKtzVIK5HNzPp2oM7ooyuGnCzZDog9juIIZyC72Uo9k1fkS_gc")' }}
                     ></div>
                     <button 
                        onClick={() => navigate('/dispatcher/personal-info')}
                        className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-white shadow-sm border-2 border-white dark:border-card-dark hover:bg-primary/90 transition-colors"
                     >
                        <Icon name="edit" className="text-sm" />
                    </button>
                 </div>
                 
                 <h2 className="text-2xl font-bold mb-1">Alex Dispatcher</h2>
                 <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium mb-3">Rapid Logistics Inc.</p>
                 
                 <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-bold">
                     <div className="size-2 rounded-full bg-success animate-pulse"></div>
                     Active
                 </div>
             </div>
        </div>

        {/* Section: Personal Information */}
        <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 px-1">Personal Information</h3>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-800">
                <div onClick={() => navigate('/dispatcher/personal-info')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="person" />
                        </div>
                        <span className="font-medium">Full Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Alex Dispatcher</span>
                        <Icon name="chevron_right" className="text-gray-400" />
                    </div>
                </div>
                 <div onClick={() => navigate('/dispatcher/personal-info')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="call" />
                        </div>
                        <span className="font-medium">Phone Number</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">+1 (555) 123-4567</span>
                        <Icon name="chevron_right" className="text-gray-400" />
                    </div>
                </div>
                 <div onClick={() => navigate('/dispatcher/personal-info')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="email" />
                        </div>
                        <span className="font-medium">Email Address</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm truncate max-w-[150px]">a.dispatcher@rapid.com</span>
                        <Icon name="chevron_right" className="text-gray-400" />
                    </div>
                </div>
            </div>
        </div>

        {/* Section: Company Details */}
        <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 px-1">Company Details</h3>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-800">
                <div onClick={() => navigate('/dispatcher/company')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="business_center" />
                        </div>
                        <span className="font-medium">Company Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Rapid Logistics</span>
                         <Icon name="chevron_right" className="text-gray-400" />
                    </div>
                </div>
                <div onClick={() => navigate('/dispatcher/company')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="place" />
                        </div>
                        <span className="font-medium">Company Address</span>
                    </div>
                     <Icon name="chevron_right" className="text-gray-400" />
                </div>
            </div>
        </div>

         {/* Section: Payment & Waybills */}
        <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 px-1">Payment & Waybills</h3>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-800">
                 <div onClick={() => navigate('/dispatcher/banking')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="account_balance" />
                        </div>
                        <span className="font-medium">Bank Account</span>
                    </div>
                     <Icon name="chevron_right" className="text-gray-400" />
                </div>
                <div onClick={() => navigate('/dispatcher/history')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="receipt_long" />
                        </div>
                        <span className="font-medium">Payment History</span>
                    </div>
                     <Icon name="chevron_right" className="text-gray-400" />
                </div>
            </div>
        </div>

         {/* Section: Administration */}
        <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 px-1">Administration & Settings</h3>
             <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-800">
                 {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
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

                 <div onClick={() => navigate('/dispatcher/notifications')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="notifications" />
                        </div>
                        <span className="font-medium">Notification Preferences</span>
                    </div>
                     <Icon name="chevron_right" className="text-gray-400" />
                </div>
                 <div onClick={() => navigate('/dispatcher/help')} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                             <Icon name="help_outline" />
                        </div>
                        <span className="font-medium">Support & Help Center</span>
                    </div>
                     <Icon name="chevron_right" className="text-gray-400" />
                </div>
            </div>
        </div>

        {/* Log Out */}
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-danger font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DispatcherProfile;
