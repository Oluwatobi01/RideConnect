
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DispatcherHelp: React.FC = () => {
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

      <div className="p-4 text-center">
        <Icon name="support_agent" className="text-6xl text-primary mb-4" />
        <h2 className="text-xl font-bold mb-2">How can we help?</h2>
        <button className="mt-4 bg-primary text-white font-bold py-3 px-8 rounded-xl">Contact Support</button>
      </div>
    </div>
  );
};

export default DispatcherHelp;
