
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DriverSettings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">App Settings</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-4">
        <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <span className="font-medium text-sm">Navigation App</span>
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Google Maps</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-medium text-sm">Sound Effects</span>
                <div className="w-10 h-6 bg-success rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 bg-white size-4 rounded-full shadow-sm"></div></div>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-medium text-sm">Vibration</span>
                <div className="w-10 h-6 bg-success rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 bg-white size-4 rounded-full shadow-sm"></div></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSettings;
