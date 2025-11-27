
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { PAYMENT_METHODS } from '../../constants';

const PaymentMethods: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(PAYMENT_METHODS.find(p => p.isDefault)?.id || '1');

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/rider/profile');
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between bg-background-light/80 px-4 backdrop-blur-sm dark:bg-background-dark/80">
        <button 
          onClick={handleBack} 
          className="flex size-10 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Icon name="arrow_back" className="text-2xl" />
        </button>
        <h1 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">Payment Methods</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-base font-semibold text-text-secondary-light dark:text-text-secondary-dark">Saved Methods</h2>
          
          <div className="flex flex-col gap-4">
            {PAYMENT_METHODS.map((method) => (
              <div 
                key={method.id}
                onClick={() => setSelectedId(method.id)}
                className="relative flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/10 cursor-pointer transition-transform active:scale-[0.99]"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="bg-center bg-no-repeat bg-contain h-6 w-10 shrink-0" 
                    style={{ backgroundImage: `url("${method.icon}")` }}
                  ></div>
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary-light dark:text-text-primary-dark">{method.label}</p>
                    {method.isDefault && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Default</span>
                    )}
                  </div>
                  <input 
                    type="radio"
                    name="payment-method"
                    checked={selectedId === method.id}
                    readOnly
                    className="h-5 w-5 rounded-full border-slate-300 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 dark:border-slate-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-background-light/95 px-4 pb-6 pt-4 dark:bg-background-dark/95 backdrop-blur-sm max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => navigate('/rider/add-payment')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
          >
            <Icon name="add" className="text-xl" />
            Add Payment Method
          </button>
          <div className="flex items-center justify-center gap-1.5">
            <Icon name="lock" className="text-base text-text-secondary-light dark:text-text-secondary-dark" />
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Your payment info is stored securely.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentMethods;
