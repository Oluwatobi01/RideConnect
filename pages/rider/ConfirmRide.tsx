
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';
import ScheduleModal from '../../components/ScheduleModal';
import { RIDE_OPTIONS } from '../../constants';

const ConfirmRide: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Fallback state if accessed directly
  const { pickup, dropoff } = location.state || { pickup: '123 Main St', dropoff: '456 Elm St' };
  const ride = RIDE_OPTIONS[0]; 
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleConfirm = () => {
    navigate('/rider/track', { state: { pickup, dropoff } });
  };

  const handleScheduleConfirm = (date: string, time: string) => {
    setIsScheduleOpen(false);
    // Logic to save schedule or navigate to activity
    console.log(`Scheduled for ${date} at ${time}`);
    navigate('/rider/activity');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light dark:bg-background-dark z-10">
        <button onClick={() => navigate(-1)} className="text-text-primary-light dark:text-text-primary-dark flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" className="text-2xl" />
        </button>
        <h1 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Confirm Your Ride</h1>
        <div className="size-10 shrink-0"></div>
      </header>

      <main className="flex-grow flex flex-col gap-4 px-4 pb-36">
        {/* Map View */}
        <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            <Map pickup={pickup} dropoff={dropoff} />
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon name="my_location" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal line-clamp-1">{pickup}</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal line-clamp-2">Pickup location</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-slate-300 dark:border-slate-600 h-6 ml-6"></div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
               <Icon name="location_on" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal line-clamp-1">{dropoff}</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal line-clamp-2">Drop-off location</p>
            </div>
          </div>
          <div className="my-2 border-t border-dashed border-slate-200 dark:border-slate-700"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img className="h-12 w-12 object-contain" src={ride.image} alt={ride.name} />
              <div>
                <p className="text-text-primary-light dark:text-text-primary-dark font-semibold">Standard</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Arrives in 5 min</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-text-primary-light dark:text-text-primary-dark font-semibold">$14.50</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Est. Fare</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
               <Icon name="credit_card" className="text-text-primary-light dark:text-text-primary-dark" />
            </div>
            <div className="flex flex-col">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">Visa **** 1234</p>
            </div>
          </div>
          <button onClick={() => navigate('/rider/payment')} className="text-primary text-sm font-semibold leading-normal shrink-0">Change</button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 pt-3 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col gap-3">
          <button onClick={handleConfirm} className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <span className="truncate">Confirm Ride</span>
          </button>
          <button 
            onClick={() => setIsScheduleOpen(true)}
            className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-slate-200 dark:bg-slate-700 text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <span className="truncate">Schedule for later</span>
          </button>
        </div>
      </footer>

      <ScheduleModal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
        onConfirm={handleScheduleConfirm} 
      />
    </div>
  );
};

export default ConfirmRide;
