
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';
import { TRACKING_DETAILS } from '../../constants';

const DispatcherTracking: React.FC = () => {
  const navigate = useNavigate();
  const info = TRACKING_DETAILS;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden font-display text-text-primary-light dark:text-text-primary-dark">
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
            <button 
                onClick={() => navigate(-1)} 
                className="size-10 rounded-full bg-white dark:bg-background-dark shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
                <Icon name="arrow_back" />
            </button>
             <h1 className="text-lg font-bold bg-white/90 dark:bg-background-dark/90 px-4 py-1.5 rounded-full shadow-sm backdrop-blur-sm">Delivery Details</h1>
            <button className="size-10 rounded-full bg-white dark:bg-background-dark shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Icon name="more_vert" />
            </button>
        </div>

      {/* Map Background */}
      <div className="absolute top-0 left-0 w-full h-[45vh]">
         <Map />
      </div>

      {/* Bottom Sheet Content */}
      <div className="mt-[40vh] relative z-0 w-full bg-background-light dark:bg-background-dark rounded-t-[2rem] shadow-2xl overflow-hidden min-h-[60vh]">
          {/* Pull Handle */}
          <div className="flex justify-center pt-3 pb-1">
             <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(60vh-2rem)] pb-12">
            
            {/* Waybill Status Card */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm mb-6 border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">Waybill ID</p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold">{info.id}</h2>
                            <Icon name="content_copy" className="text-sm text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                    <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold rounded-full">
                        {info.status}
                    </div>
                </div>
                
                <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">Estimated Time of Arrival</p>
                    <p className="text-3xl font-extrabold text-primary">{info.eta}</p>
                </div>
            </div>

            {/* Driver Card */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm mb-6 flex items-center justify-between border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4">
                     <div 
                        className="size-14 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center border-2 border-white dark:border-card-dark" 
                        style={{ backgroundImage: `url("${info.driver.image}")` }}
                    ></div>
                    <div>
                        <h3 className="text-base font-bold">{info.driver.name}</h3>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-0.5">{info.driver.vehicle}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                        <Icon name="chat_bubble_outline" />
                    </button>
                    <button className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                        <Icon name="call" />
                    </button>
                </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
                <h3 className="text-base font-bold mb-4">Delivery Timeline</h3>
                <div className="space-y-0 pl-2">
                    {info.timeline.map((item, index) => (
                        <div key={index} className="flex gap-4 relative">
                            {/* Vertical Line */}
                            {index !== info.timeline.length - 1 && (
                                <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                            )}
                            
                            <div className="relative z-10">
                                {item.completed ? (
                                    <div className="size-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <Icon name="check" className="text-sm font-bold" />
                                    </div>
                                ) : item.current ? (
                                    <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <Icon name="local_shipping" className="text-sm" />
                                    </div>
                                ) : (
                                    <div className="size-6 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400">
                                        <Icon name="inventory_2" className="text-sm" />
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex-1 pb-6">
                                <p className="text-sm font-bold">{item.status}</p>
                                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{item.time || item.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Addresses */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm mb-6 border border-gray-100 dark:border-gray-800 space-y-4">
                 <div className="flex gap-4">
                    <div className="mt-0.5 text-primary">
                         <Icon name="move_up" />
                    </div>
                    <div>
                        <p className="text-sm font-bold">Sender: {info.sender.name}</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{info.sender.address}</p>
                    </div>
                 </div>
                 <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                 <div className="flex gap-4">
                    <div className="mt-0.5 text-success">
                         <Icon name="move_down" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold">Recipient: {info.recipient.name}</p>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{info.recipient.address}</p>
                    </div>
                    <button className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Icon name="call" className="text-sm" />
                    </button>
                 </div>
            </div>

            {/* Package Details */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold mb-2">Package Details</h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-2">
                    {info.package.description}
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                    <span className="font-medium text-text-primary-light dark:text-text-primary-dark">Instructions: </span>
                    {info.package.instructions}
                </p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default DispatcherTracking;
