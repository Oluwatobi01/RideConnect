import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');

  const handleAuth = () => {
    navigate('/role-selection');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="flex flex-col items-center justify-center p-4 flex-grow">
        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-6">
          <h1 className="text-text-primary-light dark:text-text-primary-dark tracking-tight text-3xl font-bold leading-tight text-center pb-3 pt-6">
            Welcome, Rider
          </h1>

          {/* Toggle */}
          <div className="flex w-full px-4 py-3">
            <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 p-1">
              <button
                onClick={() => setMode('signup')}
                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-semibold leading-normal transition-all duration-300 ${
                  mode === 'signup'
                    ? 'bg-white dark:bg-background-dark shadow-md text-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setMode('signin')}
                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-semibold leading-normal transition-all duration-300 ${
                  mode === 'signin'
                    ? 'bg-white dark:bg-background-dark shadow-md text-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Inputs */}
          <div className="w-full space-y-4 px-4">
            <label className="flex flex-col w-full">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal pb-2">Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal pb-2">Password</p>
              <div className="flex w-full flex-1 items-stretch">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-text-primary-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-[15px] border-r-0 pr-2 text-base font-normal leading-normal transition-all"
                />
                <div className="text-gray-500 dark:text-gray-400 flex border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center pr-4 rounded-r-lg border-l-0">
                  <Icon name="visibility" className="cursor-pointer" />
                </div>
              </div>
            </label>
          </div>

          <p className="text-primary text-sm font-medium leading-normal w-full px-4 text-right underline cursor-pointer">
            Forgot Password?
          </p>

          <div className="w-full px-4 pt-4">
            <button
              onClick={handleAuth}
              className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
            >
              {mode === 'signup' ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          <div className="flex items-center w-full px-4 pt-2">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>

          <div className="w-full grid grid-cols-3 gap-4 px-4">
            <button className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 h-14 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
               <img alt="Google" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmO-pyalB0ne4Z28eVoeky2nZgwDXdDkIxWo_1Xai9187l4x475qfcyf1u5FIMUf_UZgM6Ot1GAfTnfRrmKR4KJc0zj5OeSN2EJHow79NB__gkBzDd9yRinywrapCKwo7fItlU9Cl6W3lPOCUtt6vK4HRbuGu9EjVQNzcur7r-a32ESzP5-5KvGRbbD3hoU4UttO4RUNpFjbvrfBW0WLjDVn2ar4RPGS-gcpQSovCDx3xr5AHn-7I4iF7xHXvq7oO8mzKGyfZQNMg" />
            </button>
            <button className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 h-14 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
               <img alt="Apple" className="h-6 w-6 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmF4Cn7tjcemfR7QT12RpRDD8LzcehQPy_qR8jhnvYL82yePVEEyqm6_RmZyNnk54407jXC4Pt-rc37laV_vtSHGlDNpd3d7MYTSlI-tXwp0xwohIKiayokXWuOnaG2vwgY4pIscPbIGe8PRPpEZKg4E2rs1l4rnqRLdkXISG23FrnTAwpDpW3UB8t4ddrL-XbZbshlkTdg435egnqIqhSYPeQlN-LnVYRY9WFNqXiWJfcA0m2v5TcYw0AsmS6QolYLI5ZFNrpiSs" />
            </button>
             <button className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 h-14 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
               <svg className="h-6 w-6 text-[#1C1C1E] dark:text-white" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                 <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
               </svg>
            </button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-xs text-center px-6 pt-4">
            By signing up, you agree to our <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;