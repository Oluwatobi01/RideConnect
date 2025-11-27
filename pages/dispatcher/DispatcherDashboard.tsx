
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Map from '../../components/Map';
import { DISPATCH_DELIVERIES as MOCK_DISPATCH_DELIVERIES } from '../../constants';
import { supabase } from '../../lib/supabase';
import { Delivery } from '../../types';

const DispatcherDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const { data, error } = await supabase.from('deliveries').select('*').limit(5); // Just fetch a few for dashboard
        if (error || !data || data.length === 0) {
          setDeliveries(MOCK_DISPATCH_DELIVERIES);
        } else {
          setDeliveries(data as unknown as Delivery[]);
        }
      } catch (err) {
        setDeliveries(MOCK_DISPATCH_DELIVERIES);
      }
    };
    fetchDeliveries();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:bg-background-dark/80 border-b border-border-light dark:border-border-dark">
        <button 
          onClick={() => navigate('/dispatcher/profile')}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <Icon name="menu" />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <Icon name="search" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex gap-4 overflow-x-auto p-4 pt-2 no-scrollbar">
        <div className="flex min-w-[160px] flex-1 flex-col gap-1.5 rounded-lg bg-card-light p-4 dark:bg-card-dark shadow-sm">
          <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Deliveries Today</p>
          <p className="text-3xl font-bold tracking-tight">42</p>
          <p className="text-sm font-medium text-success">+5%</p>
        </div>
        <div className="flex min-w-[160px] flex-1 flex-col gap-1.5 rounded-lg bg-card-light p-4 dark:bg-card-dark shadow-sm">
          <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Active Drivers</p>
          <p className="text-3xl font-bold tracking-tight">8</p>
          <p className="text-sm font-medium text-danger">-12%</p>
        </div>
        <div className="flex min-w-[160px] flex-1 flex-col gap-1.5 rounded-lg bg-card-light p-4 dark:bg-card-dark shadow-sm">
          <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Pending Packages</p>
          <p className="text-3xl font-bold tracking-tight">15</p>
          <p className="text-sm font-medium text-warning">+2%</p>
        </div>
      </div>

      {/* Map */}
      <div className="px-4 py-2">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm relative">
            <Map className="w-full h-full" />
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[72px] z-10 bg-background-light/80 pb-0 pt-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex justify-between border-b border-border-light px-4 dark:border-border-dark">
          <a className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-2 cursor-pointer" href="#">
            <p className="text-sm font-bold text-primary">Active Deliveries</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-2 cursor-pointer hover:border-b-gray-300 dark:hover:border-b-gray-600 transition-colors" href="#">
            <p className="text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark">Fleet</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-2 cursor-pointer hover:border-b-gray-300 dark:hover:border-b-gray-600 transition-colors" href="#">
            <p className="text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark">History</p>
          </a>
        </div>
      </div>

      {/* Delivery List */}
      <div className="flex flex-col gap-3 p-4 pb-24">
        {deliveries.map((delivery) => (
          <div 
            key={delivery.id} 
            className="flex items-center justify-between gap-4 rounded-lg bg-card-light p-4 dark:bg-card-dark shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => navigate(`/dispatcher/tracking/${delivery.id}`)}
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                 <Icon name="package_2" />
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark">{delivery.id}</p>
                <p className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">Driver: {delivery.driver}</p>
                <p className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">Customer: {delivery.customer}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold 
                  ${delivery.status === 'In Transit' ? 'bg-success/20 text-success' : 
                    delivery.status === 'Pending' ? 'bg-warning/20 text-warning' : 
                    delivery.status === 'Delivered' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                <div className={`size-2 rounded-full 
                    ${delivery.status === 'In Transit' ? 'bg-success' : 
                      delivery.status === 'Pending' ? 'bg-warning' : 
                      delivery.status === 'Delivered' ? 'bg-success' : 'bg-danger'}`}></div>
                <span>{delivery.status}</span>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{delivery.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button - Kept for quick access, but positioned above nav */}
      <div className="fixed bottom-24 right-6 z-20">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95">
           <Icon name="add" className="text-4xl" fill />
        </button>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200/80 bg-background-light/95 dark:border-slate-700/80 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex h-[80px] items-center justify-around px-2 pb-2">
          <a className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
            <Icon name="home" fill />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a onClick={() => navigate('/dispatcher/deliveries')} className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">
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

export default DispatcherDashboard;
