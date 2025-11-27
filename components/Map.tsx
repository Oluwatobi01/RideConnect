
import React, { useMemo } from 'react';

interface MapProps {
  pickup?: string;
  dropoff?: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ pickup, dropoff, className = "h-full w-full" }) => {
  // Using the provided Google Maps API Key
  const apiKey = "AIzaSyCY62oTzMAnvpKSUmfvdliYIZoMHH73HiY";

  const mapUrl = useMemo(() => {
    const baseUrl = "https://www.google.com/maps/embed/v1";
    
    // Clean up inputs to ensure valid queries
    // Defaulting 'Current Location' to a specific city center for the visual demo if no coords are available
    const p = (pickup === 'Current Location' || !pickup) ? 'San Francisco, CA' : pickup;
    const d = (dropoff === 'Set on map' || !dropoff) ? '' : dropoff;

    if (pickup && d && d !== '') {
        // Directions Mode: Show route from A to B
        const origin = encodeURIComponent(p);
        const destination = encodeURIComponent(d);
        return `${baseUrl}/directions?key=${apiKey}&origin=${origin}&destination=${destination}&mode=driving`;
    } else if (d && d !== '') {
        // Place Mode: Focus on the Dropoff location
        const q = encodeURIComponent(d);
        return `${baseUrl}/place?key=${apiKey}&q=${q}`;
    } else if (p && p !== 'San Francisco, CA') {
         // Place Mode: Focus on the Pickup location (if specific)
        const q = encodeURIComponent(p);
        return `${baseUrl}/place?key=${apiKey}&q=${q}`;
    }
    
    // Default View Mode: Center on San Francisco
    return `${baseUrl}/view?key=${apiKey}&center=37.7749,-122.4194&zoom=13&maptype=roadmap`;
  }, [pickup, dropoff]);

  return (
    <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      <iframe
        key={mapUrl} // Force reload when URL changes to ensure map mode updates
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        className="w-full h-full opacity-90 dark:opacity-80 dark:invert-[0.9] dark:hue-rotate-180 contrast-[1.1] dark:contrast-[0.9]"
        title="Google Map"
      ></iframe>
      
      {/* Overlay Gradient for better UI visibility of floating buttons */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10 dark:from-black/30 dark:via-transparent dark:to-black/40 pointer-events-none"></div>
    </div>
  );
};

export default Map;
