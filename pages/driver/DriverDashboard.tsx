
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';
import { DRIVER_REQUESTS as MOCK_DRIVER_REQUESTS } from '../../constants';
import { supabase } from '../../lib/supabase';
import { Request } from '../../types';

const DriverDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<Request[]>([]);
  
  // Initialize state from localStorage to persist status across navigations
  const [isOnline, setIsOnline] = useState(() => {
    const savedStatus = localStorage.getItem('driver_is_online');
    return savedStatus === 'true';
  });

  const toggleOnline = () => {
    const newStatus = !isOnline;
    setIsOnline(newStatus);
    localStorage.setItem('driver_is_online', String(newStatus));
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data, error } = await supabase.from('driver_requests').select('*');
        if (error || !data || data.length === 0) {
          setRequests(MOCK_DRIVER_REQUESTS);
        } else {
          setRequests(data);
        }
      } catch (err) {
        setRequests(MOCK_DRIVER_REQUESTS);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <div 
          className="flex size-12 shrink-0 items-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/driver/profile')}
        >
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm border border-gray-200 dark:border-gray-700" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCdBEoBIwcU5kGToTemhXg35bBvlm2CPC4U1JeWE8_UhGx7cBjTfXiU_0jVrzUPIpLHj_tqhaVtcGbvGFF6W5aW5U8ybFwarSNIOC5STjYG9ooSSpllSCJoxSLYzh4da3rz9UZY8uOk8P9SZ6-2SQshwE7bIDbJd2bST-B0uZxuiiVCho-W2lzEXUhfXRACR8AF5NHdvc5KFAx36gFVHr0DDl0-QFIu2C3DvE82EvD5-rRnce36U43_6Djd6xtQzMBivRQJU3LkRI")' }}
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">
            {isOnline ? "You're Online" : "You're Offline"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
             {isOnline ? "Waiting for requests..." : "Go online to get requests"}
          </p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={toggleOnline}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark ${isOnline ? 'bg-success' : 'bg-slate-200 dark:bg-slate-700'}`} 
            role="switch" 
            type="button"
            aria-checked={isOnline}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isOnline ? 'translate-x-5' : 'translate-x-0'}`}></span>
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="flex px-4 py-3">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm relative">
            <Map className="w-full h-full" />
        </div>
      </div>

      <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Nearby Requests</h3>

      {/* Requests List */}
      <div className="flex flex-col pb-20">
        {requests.map((req) => (
          <div 
            key={req.id} 
            className="px-4 pb-4 cursor-pointer"
            onClick={() => navigate('/driver/request')}
          >
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white dark:bg-slate-800/50 p-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name={req.type === 'ride' ? 'directions_car' : 'local_shipping'} />
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal capitalize">{req.type} Request</p>
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">${Number(req.price).toFixed(2)}</p>
                </div>
              </div>
              <div className="my-2 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
              <div className="flex flex-col gap-2">
                <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Pickup:</span> {req.pickup}
                </p>
                <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Drop-off:</span> {req.dropoff}
                </p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1">{req.distance} · {req.duration}</p>
              <div className="flex items-center gap-3 justify-between mt-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); /* Handle decline */ }} 
                  className="flex w-1/3 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-4 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-base font-medium leading-normal hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  Decline
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate('/driver/request'); }}
                  className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-4 bg-primary text-white text-base font-medium leading-normal hover:bg-primary/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-slate-200/80 bg-background-light/80 dark:border-slate-700/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex h-20 items-center justify-around px-2">
          <a className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer" onClick={() => navigate('/driver/dashboard')}>
            <Icon name="home" fill />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/driver/earnings')}>
            <Icon name="payments" />
            <span className="text-xs font-medium">Earnings</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/driver/ratings')}>
            <Icon name="star" />
            <span className="text-xs font-medium">Ratings</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/driver/profile')}>
             <Icon name="person" />
            <span className="text-xs font-medium">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
