
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DispatcherPersonalInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Personal Info</h1>
        <button className="text-primary font-bold text-sm">Save</button>
      </header>

      <div className="p-4 space-y-4">
         <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Full Name</label>
            <input defaultValue="Alex Dispatcher" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Email</label>
            <input defaultValue="a.dispatcher@rapid.com" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatcherPersonalInfo;
