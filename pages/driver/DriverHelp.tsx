
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DriverHelp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Help Center</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-4">
        <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
            <h3 className="font-bold mb-2">Common Issues</h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 cursor-pointer">
                    <span className="text-sm">App Issue</span>
                    <Icon name="chevron_right" className="text-gray-400" />
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 cursor-pointer">
                    <span className="text-sm">Payment Issue</span>
                    <Icon name="chevron_right" className="text-gray-400" />
                </div>
                <div className="flex justify-between items-center py-2 cursor-pointer">
                    <span className="text-sm">Account Settings</span>
                    <Icon name="chevron_right" className="text-gray-400" />
                </div>
            </div>
        </div>
        <button className="w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">Contact Support</button>
      </div>
    </div>
  );
};

export default DriverHelp;
