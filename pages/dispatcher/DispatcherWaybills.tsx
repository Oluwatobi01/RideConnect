
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DispatcherWaybills: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate('/dispatcher/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Waybills</h1>
        <div className="w-10"></div>
      </header>

      {/* Content Placeholder */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] px-6 text-center">
        <div className="size-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6">
            <Icon name="receipt_long" className="text-4xl text-gray-400" />
        </div>
        <h2 className="text-xl font-bold mb-2">No Recent Waybills</h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Create a new waybill to start tracking shipments and managing logistics.
        </p>
        <button className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Create Waybill
        </button>
      </div>

       {/* Bottom Navigation Bar */}
       <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200/80 bg-background-light/95 dark:border-slate-700/80 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex h-[80px] items-center justify-around px-2 pb-2">
          <a onClick={() => navigate('/dispatcher/dashboard')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="home" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a onClick={() => navigate('/dispatcher/deliveries')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="local_shipping" />
            <span className="text-xs font-medium">Deliveries</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
            <Icon name="receipt_long" />
            <span className="text-xs font-medium">Waybills</span>
          </a>
          <a onClick={() => navigate('/dispatcher/profile')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="person" />
            <span className="text-xs font-medium">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DispatcherWaybills;
