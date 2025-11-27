
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Alex Rider');
  const [email, setEmail] = useState('alex.rider@example.com');
  const [phone, setPhone] = useState('+1 (555) 000-0000');

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Personal Info</h1>
        <button className="text-primary font-bold text-sm">Save</button>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="size-28 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-card-dark shadow-md overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white shadow-lg">
              <Icon name="camera_alt" className="text-lg" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Full Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Email Address</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Phone Number</label>
            <input 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
