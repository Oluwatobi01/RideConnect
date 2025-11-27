
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DriverPayouts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Payouts</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-6">
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-sm text-center">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-1">Available Balance</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">$450.75</h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-white dark:bg-card-dark shadow-sm flex items-center justify-center text-primary">
                        <Icon name="account_balance" />
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-sm">Chase Bank **** 1234</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Instant Deposit</p>
                    </div>
                </div>
                <button className="text-primary text-sm font-bold">Change</button>
            </div>

            <button className="w-full h-14 bg-success text-white font-bold rounded-xl shadow-lg shadow-success/20 flex items-center justify-center gap-2 hover:bg-success/90 transition-colors">
                Confirm Cash Out
                <Icon name="arrow_forward" />
            </button>
        </div>

        <div>
            <h3 className="font-bold text-lg mb-4 px-2">Recent Payouts</h3>
            <div className="space-y-3">
                <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="font-bold text-sm">Weekly Payout</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Oct 24, 2023</p>
                    </div>
                    <p className="font-bold text-success">+$1,240.50</p>
                </div>
                <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="font-bold text-sm">Instant Cash Out</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Oct 18, 2023</p>
                    </div>
                    <p className="font-bold text-success">+$200.00</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DriverPayouts;
