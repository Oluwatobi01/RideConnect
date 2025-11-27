
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'Ride Completed', message: 'Your ride to Downtown has been completed. How was it?', time: '2 mins ago', icon: 'check_circle', color: 'text-success' },
    { id: 2, title: 'Promo Alert', message: 'Get 20% off your next 3 rides with code RIDE20!', time: '1 hour ago', icon: 'local_offer', color: 'text-primary' },
    { id: 3, title: 'Driver Arriving', message: 'Alex is arriving in 2 minutes.', time: 'Yesterday', icon: 'directions_car', color: 'text-warning' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Notifications</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex gap-4 p-4 bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className={`size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 ${notif.color}`}>
              <Icon name={notif.icon} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm">{notif.title}</h3>
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{notif.time}</span>
              </div>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-snug">{notif.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
