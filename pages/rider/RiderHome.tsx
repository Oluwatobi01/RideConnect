
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';
import Sidebar from '../../components/Sidebar';
import { RIDE_OPTIONS as MOCK_RIDE_OPTIONS } from '../../constants';
import { findPlace } from '../../lib/genai';
import { supabase } from '../../lib/supabase';
import { RideOption } from '../../types';

const RiderHome: React.FC = () => {
  const navigate = useNavigate();
  const [rideOptions, setRideOptions] = useState<RideOption[]>([]);
  const [selectedRide, setSelectedRide] = useState<string>('');
  const [isPlanning, setIsPlanning] = useState(false);
  const [pickup, setPickup] = useState('Current Location');
  const [dropoff, setDropoff] = useState('');
  const [groundedAddress, setGroundedAddress] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropoffInputRef = useRef<HTMLInputElement>(null);

  // Fetch Ride Options
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data, error } = await supabase.from('ride_options').select('*');
        if (error || !data || data.length === 0) {
          // Fallback to mock data if table doesn't exist or is empty
          setRideOptions(MOCK_RIDE_OPTIONS);
          setSelectedRide(MOCK_RIDE_OPTIONS[0]?.id);
        } else {
          setRideOptions(data);
          setSelectedRide(data[0]?.id);
        }
      } catch (err) {
        setRideOptions(MOCK_RIDE_OPTIONS);
        setSelectedRide(MOCK_RIDE_OPTIONS[0]?.id);
      }
    };
    fetchOptions();
  }, []);

  // Focus dropoff input when entering planning mode
  useEffect(() => {
    if (isPlanning && dropoffInputRef.current) {
      dropoffInputRef.current.focus();
    }
  }, [isPlanning]);

  // Simulate Grounding via GenAI when user stops typing
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (dropoff.length > 3 && isPlanning) {
        // Call our mock GenAI utility
        const result = await findPlace(dropoff);
        setGroundedAddress(result.formattedAddress);
      } else {
        setGroundedAddress(null);
      }
    }, 800); // Debounce

    return () => clearTimeout(timer);
  }, [dropoff, isPlanning]);

  const handleConfirm = () => {
    navigate('/rider/confirm', { 
        state: { 
            pickup: pickup === 'Current Location' ? '123 Main St (Current)' : pickup,
            dropoff: dropoff || 'Set on map' 
        } 
    });
  };

  const handlePaymentClick = () => {
    navigate('/rider/payment');
  }

  const handleSuggestionClick = (place: string) => {
      setDropoff(place);
      // Optional: auto-confirm or keep exploring
  }

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
        <Map pickup={pickup} dropoff={dropoff} />
      </div>

      {/* Main UI Overlay */}
      <div className="relative flex h-full w-full flex-col justify-between pointer-events-none pb-[80px]">
        {/* Top Bar and Search Section */}
        <div className="flex flex-col gap-3 p-4 pointer-events-auto">
          <div className="flex items-center justify-between pt-2 mb-2">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-background-dark shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon name="menu" className="text-black dark:text-white" />
            </button>
            <button 
              onClick={() => navigate('/rider/notifications')}
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background-light dark:bg-background-dark shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon name="notifications" className="text-black dark:text-white" />
            </button>
          </div>

          {/* Route Input Section */}
          <div className={`bg-background-light dark:bg-background-dark rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isPlanning ? 'p-4' : 'p-0'}`}>
            
            {!isPlanning ? (
               <div onClick={() => setIsPlanning(true)} className="w-full cursor-pointer">
                <label className="flex flex-col min-w-40 h-14 w-full pointer-events-none">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-background-light dark:bg-background-dark shadow-lg">
                    <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4">
                      <Icon name="search" />
                    </div>
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-2 text-base font-medium" 
                      placeholder="Where to?" 
                      value={dropoff}
                      readOnly
                    />
                  </div>
                </label>
              </div>
            ) : (
                <div className="flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-start gap-3">
                        <div className="flex flex-col items-center pt-3 gap-1">
                            <div className="size-2 rounded-full bg-blue-500"></div>
                            <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                            <div className="size-2 bg-black dark:bg-white rotate-45"></div>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            {/* Pickup Input */}
                            <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center px-3 relative">
                                <input 
                                    value={pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                    className="w-full bg-transparent border-none focus:ring-0 text-text-primary-light dark:text-text-primary-dark font-medium text-sm"
                                    placeholder="Pickup Location"
                                />
                                {pickup !== 'Current Location' && (
                                    <button onClick={() => setPickup('Current Location')} className="absolute right-2 p-1 text-primary text-xs font-bold">
                                        USE CURRENT
                                    </button>
                                )}
                            </div>
                            
                            {/* Dropoff Input */}
                            <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center px-3">
                                <input 
                                    ref={dropoffInputRef}
                                    value={dropoff}
                                    onChange={(e) => setDropoff(e.target.value)}
                                    className="w-full bg-transparent border-none focus:ring-0 text-text-primary-light dark:text-text-primary-dark font-medium text-sm"
                                    placeholder="Where to?"
                                />
                            </div>
                            
                            {/* Grounding Result Feedback */}
                            {groundedAddress && (
                                <div className="flex items-center gap-2 text-xs text-success px-1 animate-in fade-in slide-in-from-top-1">
                                    <Icon name="verified" className="text-sm" fill />
                                    <span>Verified: {groundedAddress}</span>
                                </div>
                            )}
                        </div>
                        <div className="pt-2">
                             <button onClick={() => setIsPlanning(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Icon name="close" />
                             </button>
                        </div>
                    </div>
                    {/* Saved Places Suggestions when planning */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button onClick={() => handleSuggestionClick('Home')} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Icon name="home" className="text-sm" fill /> Home
                        </button>
                        <button onClick={() => handleSuggestionClick('Work')} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Icon name="work" className="text-sm" fill /> Work
                        </button>
                        <button onClick={() => handleSuggestionClick('Gym')} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Icon name="fitness_center" className="text-sm" /> Gym
                        </button>
                    </div>
                </div>
            )}
          </div>
        </div>

        {/* Floating Map Controls (Only when not planning for cleaner UI) */}
        {!isPlanning && (
            <div className="absolute bottom-1/2 right-4 mb-24 flex flex-col items-end gap-3 pointer-events-auto">
            <div className="flex flex-col gap-px overflow-hidden rounded-full shadow-lg">
                <button className="flex size-11 items-center justify-center bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800">
                <Icon name="add" className="text-black dark:text-white" />
                </button>
                <button className="flex size-11 items-center justify-center bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800">
                <Icon name="remove" className="text-black dark:text-white" />
                </button>
            </div>
            <button className="flex size-11 items-center justify-center rounded-full bg-background-light dark:bg-background-dark shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Icon name="my_location" className="text-primary" />
            </button>
            </div>
        )}

        {/* Bottom Sheet */}
        <div className={`flex flex-col items-stretch rounded-t-xl bg-background-light dark:bg-background-dark shadow-[0_-4px_12px_rgba(0,0,0,0.1)] pointer-events-auto transition-transform duration-300 ${isPlanning ? 'translate-y-full' : 'translate-y-0'}`}>
          <div className="flex h-5 w-full cursor-grab items-center justify-center pt-2">
            <div className="h-1 w-9 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex flex-col gap-4 p-4 pb-6">
            <h2 className="text-xl font-bold text-black dark:text-white">Choose a ride</h2>
            
            <div className="flex flex-col gap-3">
              {rideOptions.map((ride) => (
                <div 
                  key={ride.id}
                  onClick={() => setSelectedRide(ride.id)}
                  className={`flex items-center gap-4 rounded-lg p-3 cursor-pointer transition-all ${
                    selectedRide === ride.id 
                      ? 'bg-primary/20 ring-2 ring-primary' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${selectedRide === ride.id ? 'bg-background-light dark:bg-background-dark' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    <img className="h-8 w-8 object-contain" src={ride.image} alt={ride.name} />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-black dark:text-white">{ride.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{ride.description}</p>
                  </div>
                  <p className="text-base font-bold text-black dark:text-white">${Number(ride.price).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div onClick={handlePaymentClick} className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800 p-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Icon name="credit_card" className="text-black dark:text-white" />
                  <p className="text-sm font-medium text-black dark:text-white">Visa **** 1234</p>
                </div>
                <Icon name="chevron_right" className="text-gray-500 dark:text-gray-400" />
              </div>
              <button onClick={handleConfirm} className="flex w-full items-center justify-center rounded-lg bg-primary h-12 text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
                Confirm Ride
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200/80 bg-background-light/95 dark:border-slate-700/80 dark:bg-background-dark/95 backdrop-blur-sm pointer-events-auto">
        <div className="flex h-[80px] items-center justify-around px-2 pb-2">
          <a className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
            <Icon name="home" fill />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a onClick={() => navigate('/rider/activity')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="receipt_long" />
            <span className="text-xs font-medium">Activity</span>
          </a>
          <a onClick={() => navigate('/rider/payment')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="credit_card" />
            <span className="text-xs font-medium">Payment</span>
          </a>
          <a onClick={() => navigate('/rider/profile')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="person" />
            <span className="text-xs font-medium">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RiderHome;
