import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { RIDER_HISTORY } from '../../constants';

const RiderActivity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Activity</h1>
        <div className="w-10"></div>
      </header>

      {/* Ride List */}
      <div className="p-4 space-y-4">
        {RIDER_HISTORY.map((ride) => (
          <div key={ride.id} className="bg-card-light dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
             <div className="flex justify-between items-start mb-3">
                 <div className="flex items-center gap-3">
                     <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                         <Icon name="directions_car" className="text-text-secondary-light dark:text-text-secondary-dark" />
                     </div>
                     <div>
                         <p className="font-bold text-sm">{ride.date}</p>
                         <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{ride.status}</p>
                     </div>
                 </div>
                 <p className="font-bold text-sm">${ride.price.toFixed(2)}</p>
             </div>
             
             <div className="space-y-2 pl-13">
                 <div className="flex items-start gap-2">
                     <div className="mt-1 size-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     <p className="text-sm text-text-primary-light dark:text-text-primary-dark line-clamp-1">{ride.pickup}</p>
                 </div>
                 <div className="flex items-start gap-2">
                     <div className="mt-1 size-1.5 rounded-full bg-red-500 shrink-0"></div>
                     <p className="text-sm text-text-primary-light dark:text-text-primary-dark line-clamp-1">{ride.dropoff}</p>
                 </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderActivity;