
import React, { useState } from 'react';
import Icon from './Icon';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: string, time: string) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-card-dark rounded-t-2xl p-6 animate-in slide-in-from-bottom duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Schedule a Ride</h2>
          <button onClick={onClose} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Icon name="close" />
          </button>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Date</label>
            <input 
              type="date" 
              className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-text-primary-light dark:text-text-primary-dark"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Time</label>
            <input 
              type="time" 
              className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-text-primary-light dark:text-text-primary-dark"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button 
          onClick={() => onConfirm(date, time)}
          className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
          Set Schedule
        </button>
      </div>
    </>
  );
};

export default ScheduleModal;
