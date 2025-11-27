
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DispatcherHistory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">History</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-4">
        <div className="bg-card-light dark:bg-card-dark p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
                <p className="font-bold text-sm">Invoice #1023</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Oct 20, 2023</p>
            </div>
            <p className="font-bold text-text-primary-light dark:text-text-primary-dark">$2,500.00</p>
        </div>
      </div>
    </div>
  );
};

export default DispatcherHistory;
