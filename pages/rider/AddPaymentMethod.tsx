
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const AddPaymentMethod: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/rider/payment');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button 
          onClick={handleBack} 
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Add New Card</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-6 max-w-md mx-auto">
        <div className="h-48 bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white mb-6">
            <div className="flex justify-between items-start">
                <Icon name="contactless" className="text-3xl opacity-80" />
                <span className="font-bold italic text-xl opacity-80">VISA</span>
            </div>
            <div>
                <p className="text-lg tracking-widest font-mono mb-2">•••• •••• •••• ••••</p>
                <div className="flex justify-between text-sm opacity-90">
                    <span>CARD HOLDER</span>
                    <span>EXPIRY</span>
                </div>
            </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Card Number</label>
            <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">CVV</label>
                <input type="text" placeholder="123" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Card Holder Name</label>
            <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
          </div>
        </div>

        <button 
            onClick={() => navigate('/rider/payment')}
            className="w-full h-14 mt-8 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
            Add Card
        </button>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
