import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    switch (role) {
      case 'rider':
        navigate('/rider/home');
        break;
      case 'driver':
        navigate('/driver/dashboard');
        break;
      case 'dispatcher':
        navigate('/dispatcher/dashboard');
        break;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="flex w-full max-w-md flex-col items-center p-4 pt-16 sm:pt-20">
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
          <Icon name="directions_car" className="text-4xl text-primary" />
        </div>

        <h1 className="text-text-primary-light dark:text-text-primary-dark tracking-tight text-3xl font-bold text-center pb-2">
          Welcome! Who are you?
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal pb-8 text-center">
          Choose your role to get started.
        </p>

        <div className="flex w-full flex-col gap-4">
          <div
            onClick={() => handleRoleSelect('rider')}
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-4 transition-all duration-200 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <Icon name="person" className="text-2xl" />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal line-clamp-1">Rider</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal line-clamp-2">Book a ride or order a delivery.</p>
            </div>
            <div className="shrink-0">
               <Icon name="arrow_forward_ios" className="text-slate-400 dark:text-slate-500 text-2xl" />
            </div>
          </div>

          <div
            onClick={() => handleRoleSelect('driver')}
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-4 transition-all duration-200 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <Icon name="local_taxi" className="text-2xl" />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal line-clamp-1">Driver</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal line-clamp-2">Earn money driving on your schedule.</p>
            </div>
            <div className="shrink-0">
              <Icon name="arrow_forward_ios" className="text-slate-400 dark:text-slate-500 text-2xl" />
            </div>
          </div>

          <div
            onClick={() => handleRoleSelect('dispatcher')}
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-4 transition-all duration-200 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <Icon name="route" className="text-2xl" />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal line-clamp-1">Dispatcher</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal line-clamp-2">Manage fleet operations and logistics.</p>
            </div>
            <div className="shrink-0">
               <Icon name="arrow_forward_ios" className="text-slate-400 dark:text-slate-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;