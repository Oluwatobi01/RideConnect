
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DispatcherBanking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Banking</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4">
        <div className="bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <Icon name="account_balance" className="text-4xl text-primary mb-4" />
            <h2 className="text-xl font-bold">Business Account</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">Chase Bank **** 9876</p>
            <button className="text-primary font-bold text-sm">Edit Details</button>
        </div>
      </div>
    </div>
  );
};

export default DispatcherBanking;
