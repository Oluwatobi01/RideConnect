
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DriverVehicle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Vehicle Details</h1>
        <button className="text-primary font-bold text-sm">Save</button>
      </header>

      <div className="p-4 space-y-6">
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm text-center">
            <div className="size-24 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center text-primary">
                <Icon name="directions_car" className="text-4xl" />
            </div>
            <h2 className="text-xl font-bold">Honda Civic</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">Sedan • Silver</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">License Plate</label>
            <input defaultValue="ABC 123" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Year</label>
            <input defaultValue="2022" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Color</label>
            <input defaultValue="Silver" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverVehicle;
