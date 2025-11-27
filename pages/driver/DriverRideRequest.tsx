
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';

const DriverRideRequest: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(12);

  // Simple countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const totalTime = 15;
  const progress = (timeLeft / totalTime) * 100;
  const radius = 32; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
         <Map />
      </div>

      {/* Request Modal / Bottom Sheet */}
      <div className="mt-auto relative z-10 w-full bg-card-light dark:bg-card-dark rounded-t-[2rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        
        {/* Floating Timer */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card-light dark:bg-card-dark rounded-full p-1.5 shadow-lg">
             <div className="relative size-20 flex items-center justify-center">
                <svg className="transform -rotate-90 size-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="text-primary transition-all duration-1000 ease-linear"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight">
                  {timeLeft}s
                </span>
             </div>
        </div>

        {/* Fare Info */}
        <div className="mt-8 text-center mb-6">
          <h1 className="text-4xl font-extrabold text-text-primary-light dark:text-text-primary-dark mb-1 tracking-tight">$18.50</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Estimated Fare</p>
        </div>

        {/* Route Info Card */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6">
             {/* Pickup */}
             <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                    <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-primary shrink-0 z-10">
                        <Icon name="my_location" className="text-lg" />
                    </div>
                     <div className="absolute top-8 bottom-[-16px] w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="flex-1 pb-4">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-0.5 font-medium">Pick-up</p>
                    <p className="text-base font-semibold text-text-primary-light dark:text-text-primary-dark">123 Main St, Anytown</p>
                </div>
             </div>
             
             {/* Dropoff */}
             <div className="flex gap-4">
                <div className="flex flex-col items-center z-10">
                    <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-primary shrink-0">
                        <Icon name="location_on" className="text-lg" />
                    </div>
                </div>
                <div className="flex-1 pt-0.5">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-0.5 font-medium">Drop-off</p>
                    <p className="text-base font-semibold text-text-primary-light dark:text-text-primary-dark">456 Elm St, Anytown</p>
                </div>
             </div>
        </div>

        {/* Rider Info */}
        <div className="flex items-center justify-between mb-8 px-1">
            <div className="flex items-center gap-4">
                 <div className="size-12 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}></div>
                 <div>
                    <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark leading-tight">Jessica L.</h3>
                    <div className="flex items-center gap-1">
                        <Icon name="star" className="text-warning text-sm" fill />
                        <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">4.9</span>
                    </div>
                 </div>
            </div>
            <div className="text-right">
                <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">5 min</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium">2.1 mi</p>
            </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
            <button 
                onClick={() => navigate('/driver/dashboard')} 
                className="flex-1 h-14 rounded-full bg-red-100 dark:bg-red-500/20 text-danger font-bold text-base hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors"
            >
                Decline
            </button>
            <button 
                onClick={() => navigate('/driver/navigation')} 
                className="flex-1 h-14 rounded-full bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
            >
                Accept Ride
            </button>
        </div>
      </div>
    </div>
  )
}

export default DriverRideRequest;
