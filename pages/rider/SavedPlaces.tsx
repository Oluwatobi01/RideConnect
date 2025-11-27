
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const SavedPlaces: React.FC = () => {
  const navigate = useNavigate();

  const places = [
    { id: 1, name: 'Home', address: '123 Main St, Anytown', icon: 'home' },
    { id: 2, name: 'Work', address: 'Tech Hub, 456 Innovation Blvd', icon: 'work' },
    { id: 3, name: 'Gym', address: 'FitLife Center, 789 Strong Ave', icon: 'fitness_center' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Saved Places</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="add" />
        </button>
      </header>

      <div className="p-4 space-y-4">
        {places.map((place) => (
          <div key={place.id} className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer">
            <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
              <Icon name={place.icon} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">{place.name}</h3>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{place.address}</p>
            </div>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <Icon name="edit" className="text-lg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPlaces;
