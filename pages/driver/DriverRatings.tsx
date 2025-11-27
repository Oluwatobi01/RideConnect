
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { DRIVER_REVIEWS } from '../../constants';

const DriverRatings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Ratings</h1>
        <div className="w-10"></div>
      </header>

      {/* Overview */}
      <div className="p-6 text-center border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-card-dark">
        <h2 className="text-5xl font-extrabold tracking-tighter mb-2">4.9</h2>
        <div className="flex justify-center items-center gap-1 text-warning mb-2">
            <Icon name="star" className="text-2xl" fill />
            <Icon name="star" className="text-2xl" fill />
            <Icon name="star" className="text-2xl" fill />
            <Icon name="star" className="text-2xl" fill />
            <Icon name="star_half" className="text-2xl" fill />
        </div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Based on 1,284 reviews</p>
      </div>

      {/* Reviews List */}
      <div className="flex-1 p-4 space-y-4 pb-24">
        <h3 className="font-bold text-lg px-2">Recent Feedback</h3>
        {DRIVER_REVIEWS.map((review) => (
          <div key={review.id} className="bg-card-light dark:bg-card-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
             <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center gap-3">
                     <div className="size-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 flex items-center justify-center font-bold text-primary">
                         {review.name.charAt(0)}
                     </div>
                     <div>
                         <p className="font-bold text-sm">{review.name}</p>
                         <div className="flex items-center gap-1">
                             {[...Array(review.rating)].map((_, i) => (
                                 <Icon key={i} name="star" className="text-warning text-[10px]" fill />
                             ))}
                         </div>
                     </div>
                 </div>
                 <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{review.date}</p>
             </div>
             
             <p className="text-sm text-text-primary-light dark:text-text-primary-dark mb-3 leading-relaxed">
                 "{review.comment}"
             </p>

             <div className="flex flex-wrap gap-2">
                 {review.tags.map((tag, i) => (
                     <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                         {tag}
                     </span>
                 ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverRatings;
