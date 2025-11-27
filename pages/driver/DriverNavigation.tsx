
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';

const DriverNavigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
         <Map pickup="Current Location" dropoff="Destination" />
      </div>

      {/* Turn Instruction Card */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl p-4 flex items-center gap-4">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon name="turn_left" className="text-3xl text-primary" />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Turn left on Main St</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">200m</p>
            </div>
            <div className="flex items-center justify-center size-12 rounded-full bg-gray-100 dark:bg-gray-800">
                <Icon name="north" className="text-text-primary-light dark:text-text-primary-dark" />
            </div>
        </div>
      </div>

       {/* Map Controls */}
       <div className="absolute top-32 right-4 flex flex-col gap-3 z-10">
          <button className="size-12 rounded-full bg-card-light dark:bg-card-dark shadow-lg flex items-center justify-center">
             <Icon name="navigation" className="text-primary" fill />
          </button>
          <button className="size-12 rounded-full bg-card-light dark:bg-card-dark shadow-lg flex items-center justify-center">
             <Icon name="volume_up" className="text-text-primary-light dark:text-text-primary-dark" />
          </button>
      </div>

      {/* Bottom Sheet */}
      <div className="mt-auto relative z-10 w-full bg-card-light dark:bg-card-dark rounded-t-[2rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mb-6"></div>
        
        {/* Rider Info */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}></div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark leading-tight mb-0.5">Drop off Jane Doe</h3>
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">4.98</span>
                        <Icon name="star" className="text-warning text-sm" fill />
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Icon name="chat_bubble" className="text-text-primary-light dark:text-text-primary-dark" />
                </button>
                <button className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Icon name="call" className="text-text-primary-light dark:text-text-primary-dark" />
                </button>
            </div>
        </div>

        {/* Trip Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center border-y border-gray-100 dark:border-gray-800 py-4">
             <div>
                <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">12:45 PM</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Arrival (ETA)</p>
             </div>
             <div>
                <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">15 min</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Time</p>
             </div>
             <div>
                <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">7.2 km</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Distance</p>
             </div>
        </div>

        {/* Route Info */}
        <div className="space-y-4 mb-8">
            <div className="flex gap-4">
                <div className="mt-1">
                    <Icon name="my_location" className="text-text-secondary-light dark:text-text-secondary-dark text-xl" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">Pick-up</p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">123 Market St, San Francisco, CA</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="mt-1">
                    <Icon name="location_on" className="text-primary text-xl" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">Drop-off</p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">456 Ocean Ave, San Francisco, CA</p>
                </div>
            </div>
        </div>

        {/* End Trip Button */}
        <div className="flex gap-4">
             <button 
                onClick={() => navigate('/driver/dashboard')} 
                className="flex-1 h-14 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
            >
                End Trip
            </button>
            <button className="size-14 rounded-full bg-red-100 dark:bg-red-500/20 text-danger flex items-center justify-center font-bold text-sm tracking-wider">
                SOS
            </button>
        </div>
      </div>
    </div>
  );
};

export default DriverNavigation;
