
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const DriverDocuments: React.FC = () => {
  const navigate = useNavigate();

  const docs = [
      { name: 'Driver License', status: 'Verified', date: 'Exp: 12/2025' },
      { name: 'Vehicle Insurance', status: 'Verified', date: 'Exp: 06/2024' },
      { name: 'Vehicle Registration', status: 'Verified', date: 'Exp: 08/2024' },
      { name: 'Background Check', status: 'Verified', date: 'Passed' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Documents</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 space-y-4">
        {docs.map((doc, i) => (
            <div key={i} className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm flex items-center justify-between">
                <div>
                    <p className="font-bold text-sm">{doc.name}</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{doc.date}</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-bold">
                    <Icon name="check_circle" className="text-sm" fill />
                    {doc.status}
                </div>
            </div>
        ))}
        
        <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-text-secondary-light dark:text-text-secondary-dark font-medium flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Icon name="upload" />
            Upload New Document
        </button>
      </div>
    </div>
  );
};

export default DriverDocuments;
