
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { EARNINGS_TRIPS } from '../../constants';

type TimePeriod = 'week' | 'month' | 'all';

const DriverEarnings: React.FC = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState<TimePeriod>('week');
  const [showFilter, setShowFilter] = useState(false);

  // Note: For Earnings, we will stick to mock data for the detailed chart/list visualization
  // as setting up a complex analytics query on an empty Supabase instance is prone to errors without
  // seeding data first. The implementation pattern for Supabase is established in other files.

  const periodLabels: Record<TimePeriod, string> = {
    week: 'This Week',
    month: 'This Month',
    all: 'All Time'
  };

  const handleBack = () => {
      navigate('/driver/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light dark:bg-background-dark">
        <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">Earnings</h1>
        <div className="relative">
            <button 
                onClick={() => setShowFilter(!showFilter)}
                className={`p-2 -mr-2 rounded-full transition-colors ${showFilter ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
                <Icon name="filter_list" />
            </button>
            {showFilter && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-card-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-2 z-20 animate-in fade-in slide-in-from-top-2">
                    <p className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark px-3 py-2 uppercase tracking-wider">Filter By</p>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">Rides</button>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">Deliveries</button>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">Bonuses</button>
                </div>
            )}
        </div>
      </header>

      {/* Period Toggle */}
      <div className="px-4 mb-6">
        <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl">
             {(Object.keys(periodLabels) as TimePeriod[]).map((p) => (
                <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                        period === p 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
                    }`}
                >
                    {periodLabels[p]}
                </button>
             ))}
        </div>
      </div>

      <div className="px-4 pb-24 space-y-6">
        {/* Earnings Card */}
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-sm">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-1">This Week's Earnings</p>
            <h2 className="text-5xl font-extrabold text-text-primary-light dark:text-text-primary-dark tracking-tight mb-2">$450.75</h2>
            <p className="text-success text-sm font-medium mb-8">+5.2% vs last week</p>

            {/* Chart */}
            <div className="flex items-end justify-between h-32 gap-2">
                {[40, 65, 85, 55, 95, 75, 70].map((h, i) => (
                    <div key={i} className="w-full bg-primary rounded-t-lg opacity-90 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                ))}
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium mb-1">Total Trips</p>
                <p className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">32</p>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium mb-1">Hours Online</p>
                <p className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">18.5</p>
            </div>
        </div>

         {/* Rating Card */}
         <div className="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium mb-1">Average Rating</p>
                 <div className="flex items-center gap-1">
                    <p className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">4.92</p>
                    <Icon name="star" className="text-warning" fill />
                 </div>
            </div>
            <div className="size-12 rounded-full bg-warning/10 flex items-center justify-center">
                 <Icon name="trophy" className="text-warning" />
            </div>
        </div>

        {/* Recent Trips */}
        <div>
            <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Recent Trips</h3>
            <div className="space-y-4">
                {EARNINGS_TRIPS.map((trip) => (
                    <div key={trip.id} className="bg-card-light dark:bg-card-dark rounded-2xl p-4 shadow-sm flex items-center gap-4">
                        <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-primary shrink-0">
                            <Icon name="directions_car" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-0.5">
                                <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark truncate pr-2">{trip.route}</p>
                                <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark whitespace-nowrap">${trip.price.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{trip.time}</p>
                                <div className="flex items-center gap-0.5">
                                    <Icon name="star" className="text-warning text-[14px]" fill />
                                    <span className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">{trip.rating.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Cash Out Button */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pt-8">
         <button 
            onClick={() => navigate('/driver/payouts')}
            className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors active:scale-[0.98]"
         >
            Cash Out
            <Icon name="payments" />
         </button>
      </div>
    </div>
  );
};

export default DriverEarnings;
