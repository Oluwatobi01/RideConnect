
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';

const RideTracking: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pickup, dropoff } = location.state || { pickup: '123 Main St', dropoff: '456 Elm St' };

  return (
    <div className="relative flex h-screen w-full flex-col font-display group/design-root overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
        <Map pickup={pickup} dropoff={dropoff} />
        
        {/* Map Controls */}
        <div className="absolute top-32 right-4 flex flex-col items-end gap-3 z-10">
            <div className="flex flex-col gap-px overflow-hidden rounded-full shadow-lg">
            <button className="flex size-10 items-center justify-center bg-white dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800">
                <Icon name="add" className="text-gray-800 dark:text-gray-200" />
            </button>
            <button className="flex size-10 items-center justify-center bg-white dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800">
                <Icon name="remove" className="text-gray-800 dark:text-gray-200" />
            </button>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-background-dark shadow-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon name="my_location" className="text-gray-800 dark:text-gray-200" />
            </button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div className="flex absolute bottom-0 left-0 h-full w-full flex-col justify-end items-stretch pointer-events-none">
        <div className="flex flex-col items-stretch bg-background-light dark:bg-background-dark rounded-t-lg shadow-[0_-4px_12px_rgba(0,0,0,0.1)] pointer-events-auto animate-in slide-in-from-bottom duration-500">
          {/* Handle */}
          <div className="flex h-5 w-full cursor-grab items-center justify-center pt-2">
            <div className="h-1 w-9 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          
          <div className="flex-1 p-4 pb-6">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex gap-6 justify-between items-center">
                <p className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-normal">Arriving in 5 mins</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">10:45 PM Drop-off</p>
              </div>
              <div className="rounded-full bg-primary/20">
                <div className="h-2 rounded-full bg-primary animate-pulse" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg">
              <div className="flex items-center gap-4 flex-[2_2_0px]">
                <div 
                  className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full border-2 border-white dark:border-gray-700 shadow-sm" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}
                ></div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-gray-900 dark:text-gray-100 text-base font-bold leading-tight">Alex Morgan (4.9★)</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Blue Toyota Prius • GHI-789</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-4"/>

            <div className="gap-2 px-0 grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] grid">
              <div className="flex flex-col items-center gap-2 py-2.5 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <div className="rounded-full bg-primary/20 p-3">
                   <Icon name="call" className="text-primary" />
                </div>
                <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">Call</p>
              </div>
              <div className="flex flex-col items-center gap-2 py-2.5 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <div className="rounded-full bg-primary/20 p-3">
                   <Icon name="chat" className="text-primary" />
                </div>
                <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">Message</p>
              </div>
              <div className="flex flex-col items-center gap-2 py-2.5 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3">
                   <Icon name="ios_share" className="text-gray-800 dark:text-gray-200" />
                </div>
                <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">Share</p>
              </div>
              <div className="flex flex-col items-center gap-2 py-2.5 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3">
                   <Icon name="more_horiz" className="text-gray-800 dark:text-gray-200" />
                </div>
                <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">More</p>
              </div>
            </div>
            
             <button onClick={() => navigate('/rating')} className="mt-4 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <span className="truncate">Arrived / Complete Trip (Demo)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideTracking;
