
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { DISPATCH_DELIVERIES as MOCK_DISPATCH_DELIVERIES } from '../../constants';
import { supabase } from '../../lib/supabase';
import { Delivery } from '../../types';

const DispatcherDeliveries: React.FC = () => {
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const { data, error } = await supabase.from('deliveries').select('*');
        if (error || !data || data.length === 0) {
          setDeliveries(MOCK_DISPATCH_DELIVERIES);
        } else {
          // Map DB columns to frontend type if needed, or assume exact match
          // Note: In a real app, you'd map snake_case to camelCase
          setDeliveries(data as unknown as Delivery[]);
        }
      } catch (err) {
        setDeliveries(MOCK_DISPATCH_DELIVERIES);
      }
    };
    fetchDeliveries();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate('/dispatcher/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">All Deliveries</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="filter_list" />
        </button>
      </header>

      {/* List */}
      <div className="p-4 space-y-4 pb-24">
        {deliveries.map((delivery) => (
          <div 
            key={delivery.id} 
            className="bg-card-light dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => navigate(`/dispatcher/tracking/${delivery.id}`)}
          >
             <div className="flex justify-between items-start mb-3">
                 <div className="flex items-center gap-3">
                     <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                         <Icon name="package_2" />
                     </div>
                     <div>
                         <p className="font-bold text-sm">{delivery.id}</p>
                         <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Driver: {delivery.driver}</p>
                     </div>
                 </div>
                 <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold 
                  ${delivery.status === 'In Transit' ? 'bg-success/20 text-success' : 
                    delivery.status === 'Pending' ? 'bg-warning/20 text-warning' : 
                    delivery.status === 'Delivered' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                    <span>{delivery.status}</span>
                 </div>
             </div>
             
             <div className="space-y-1 pl-13">
                 <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Customer: <span className="text-text-primary-light dark:text-text-primary-dark">{delivery.customer}</span></p>
                 <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Last update: {delivery.timeAgo}</p>
             </div>
          </div>
        ))}
      </div>

       {/* Bottom Navigation Bar */}
       <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200/80 bg-background-light/95 dark:border-slate-700/80 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex h-[80px] items-center justify-around px-2 pb-2">
          <a onClick={() => navigate('/dispatcher/dashboard')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="home" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
            <Icon name="local_shipping" />
            <span className="text-xs font-medium">Deliveries</span>
          </a>
          <a onClick={() => navigate('/dispatcher/waybills')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="receipt_long" />
            <span className="text-xs font-medium">Waybills</span>
          </a>
          <a onClick={() => navigate('/dispatcher/profile')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <Icon name="person" />
            <span className="text-xs font-medium">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DispatcherDeliveries;
