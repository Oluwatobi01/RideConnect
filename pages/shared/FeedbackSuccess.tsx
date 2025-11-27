import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const FeedbackSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate auto redirect progress
    const timer = setInterval(() => {
        setProgress(old => {
            if (old >= 100) {
                clearInterval(timer);
                return 100;
            }
            return old + 2;
        });
    }, 50);

    const redirect = setTimeout(() => {
        navigate('/rider/home'); // Or dashboard depending on role
    }, 3000);

    return () => {
        clearInterval(timer);
        clearTimeout(redirect);
    }
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-hidden px-4">
      
      <div className="flex flex-col items-center text-center max-w-md animate-in fade-in zoom-in duration-500">
        <div className="size-32 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mb-8 text-primary shadow-lg shadow-blue-500/10">
            <Icon name="thumb_up" className="text-6xl" fill />
        </div>

        <h1 className="text-3xl font-extrabold text-text-primary-light dark:text-text-primary-dark mb-4 tracking-tight">Thanks a bunch!</h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-relaxed mb-12">
            Your feedback helps us make every ride better and improve our service for everyone.
        </p>
      </div>

      <div className="absolute bottom-10 left-4 right-4 max-w-md mx-auto w-full">
         <p className="text-center text-xs text-text-secondary-light dark:text-text-secondary-dark mb-4">Redirecting to home screen...</p>
         
         {/* Progress Bar */}
         <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-6">
            <div 
                className="h-full bg-primary transition-all duration-100 ease-linear rounded-full" 
                style={{ width: `${progress}%` }}
            ></div>
         </div>

         <button 
            onClick={() => navigate('/rider/home')}
            className="w-full py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
            Done
        </button>
      </div>
    </div>
  );
};

export default FeedbackSuccess;