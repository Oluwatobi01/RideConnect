
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import { FEEDBACK_TAGS, TIPS } from '../../constants';

const RatingFeedback: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState<string[]>(['clean_car']);
  const [selectedTip, setSelectedTip] = useState<number | null>(5);
  const [customTip, setCustomTip] = useState('');

  const toggleTag = (id: string) => {
    setSelectedTags(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleTipSelect = (amount: number) => {
    setSelectedTip(amount);
    setCustomTip('');
  };

  const handleSubmit = () => {
    navigate('/feedback-success');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light dark:bg-background-dark">
        <button onClick={() => navigate('/rider/home')} className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">
            close
        </button>
        <h1 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">How was your trip?</h1>
        <div className="w-8"></div>
      </header>

      <div className="px-4 pb-8 max-w-lg mx-auto w-full">
        {/* Trip Summary Card */}
        <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm mb-8 flex items-center justify-between">
            <div>
                <h3 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark">Your ride with Alex Morgan</h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Blue Toyota Prius · GHI-789</p>
            </div>
            <div className="size-16 rounded-lg bg-gray-200 overflow-hidden relative border-2 border-white dark:border-gray-700 shadow-sm">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ")' }}></div>
            </div>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
                <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                >
                     <Icon 
                        name="star" 
                        className={`text-5xl ${star <= rating ? 'text-primary' : 'text-gray-200 dark:text-gray-700'}`} 
                        fill={star <= rating}
                    />
                </button>
            ))}
        </div>

        {/* Feedback Tags */}
        <div className="mb-8">
            <h4 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark mb-3">What went well?</h4>
            <div className="flex flex-wrap gap-2">
                {FEEDBACK_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag.id);
                    return (
                        <button
                            key={tag.id}
                            onClick={() => toggleTag(tag.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                isSelected 
                                ? 'bg-blue-100 text-primary border-blue-200 dark:bg-primary/20 dark:border-primary/50 border' 
                                : 'bg-gray-100 text-text-primary-light dark:bg-gray-800 dark:text-text-primary-dark border border-transparent'
                            }`}
                        >
                            <Icon name={tag.icon} className="text-lg" />
                            {tag.label}
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Tip Section */}
        <div className="mb-8">
            <h4 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark mb-3">Add a tip for Alex?</h4>
            <div className="flex gap-3">
                {TIPS.map((amount) => (
                    <button
                        key={amount}
                        onClick={() => handleTipSelect(amount)}
                        className={`flex-1 py-3 rounded-2xl text-sm font-bold transition-all ${
                            selectedTip === amount
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'bg-gray-100 dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        ${amount}
                    </button>
                ))}
                <button
                    onClick={() => handleTipSelect(0)}
                    className={`flex-1 py-3 rounded-2xl text-sm font-bold transition-all ${
                        selectedTip === 0
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    Custom
                </button>
            </div>
        </div>

        {/* Comment Input */}
        <div className="mb-8">
             <textarea
                value={customTip}
                onChange={(e) => setCustomTip(e.target.value)}
                placeholder="Tell us more about your experience (optional)"
                className="w-full h-32 p-4 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary-light dark:text-text-primary-dark placeholder:text-gray-400 dark:placeholder:text-gray-500"
            ></textarea>
        </div>

        {/* Submit Button */}
        <button 
            onClick={handleSubmit}
            className="w-full py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
            Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default RatingFeedback;
