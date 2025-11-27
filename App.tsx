
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Auth from './pages/Auth';
import RoleSelection from './pages/RoleSelection';
import RiderHome from './pages/rider/RiderHome';
import ConfirmRide from './pages/rider/ConfirmRide';
import PaymentMethods from './pages/rider/PaymentMethods';
import RideTracking from './pages/rider/RideTracking';
import RiderProfile from './pages/rider/RiderProfile';
import RiderActivity from './pages/rider/RiderActivity';
import Notifications from './pages/rider/Notifications';
import PersonalInfo from './pages/rider/PersonalInfo';
import SavedPlaces from './pages/rider/SavedPlaces';
import AddPaymentMethod from './pages/rider/AddPaymentMethod';
import DriverDashboard from './pages/driver/DriverDashboard';
import DriverRideRequest from './pages/driver/DriverRideRequest';
import DriverNavigation from './pages/driver/DriverNavigation';
import DriverEarnings from './pages/driver/DriverEarnings';
import DriverProfile from './pages/driver/DriverProfile';
import DriverRatings from './pages/driver/DriverRatings';
import DriverPersonalInfo from './pages/driver/DriverPersonalInfo';
import DriverVehicle from './pages/driver/DriverVehicle';
import DriverDocuments from './pages/driver/DriverDocuments';
import DriverPayouts from './pages/driver/DriverPayouts';
import DriverHelp from './pages/driver/DriverHelp';
import DriverSettings from './pages/driver/DriverSettings';
import DispatcherDashboard from './pages/dispatcher/DispatcherDashboard';
import DispatcherDeliveries from './pages/dispatcher/DispatcherDeliveries';
import DispatcherWaybills from './pages/dispatcher/DispatcherWaybills';
import DispatcherTracking from './pages/dispatcher/DispatcherTracking';
import DispatcherProfile from './pages/dispatcher/DispatcherProfile';
import DispatcherPersonalInfo from './pages/dispatcher/DispatcherPersonalInfo';
import DispatcherCompany from './pages/dispatcher/DispatcherCompany';
import DispatcherBanking from './pages/dispatcher/DispatcherBanking';
import DispatcherHistory from './pages/dispatcher/DispatcherHistory';
import DispatcherNotifications from './pages/dispatcher/DispatcherNotifications';
import DispatcherHelp from './pages/dispatcher/DispatcherHelp';
import RatingFeedback from './pages/shared/RatingFeedback';
import FeedbackSuccess from './pages/shared/FeedbackSuccess';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          
          {/* Rider Routes */}
          <Route path="/rider/home" element={<RiderHome />} />
          <Route path="/rider/confirm" element={<ConfirmRide />} />
          <Route path="/rider/payment" element={<PaymentMethods />} />
          <Route path="/rider/add-payment" element={<AddPaymentMethod />} />
          <Route path="/rider/track" element={<RideTracking />} />
          <Route path="/rider/profile" element={<RiderProfile />} />
          <Route path="/rider/activity" element={<RiderActivity />} />
          <Route path="/rider/notifications" element={<Notifications />} />
          <Route path="/rider/personal-info" element={<PersonalInfo />} />
          <Route path="/rider/saved-places" element={<SavedPlaces />} />
          
          {/* Driver Routes */}
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/driver/request" element={<DriverRideRequest />} />
          <Route path="/driver/navigation" element={<DriverNavigation />} />
          <Route path="/driver/earnings" element={<DriverEarnings />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          <Route path="/driver/ratings" element={<DriverRatings />} />
          <Route path="/driver/personal-info" element={<DriverPersonalInfo />} />
          <Route path="/driver/vehicle" element={<DriverVehicle />} />
          <Route path="/driver/documents" element={<DriverDocuments />} />
          <Route path="/driver/payouts" element={<DriverPayouts />} />
          <Route path="/driver/help" element={<DriverHelp />} />
          <Route path="/driver/settings" element={<DriverSettings />} />
          
          {/* Dispatcher Routes */}
          <Route path="/dispatcher/dashboard" element={<DispatcherDashboard />} />
          <Route path="/dispatcher/deliveries" element={<DispatcherDeliveries />} />
          <Route path="/dispatcher/waybills" element={<DispatcherWaybills />} />
          <Route path="/dispatcher/tracking/:id" element={<DispatcherTracking />} />
          <Route path="/dispatcher/profile" element={<DispatcherProfile />} />
          <Route path="/dispatcher/personal-info" element={<DispatcherPersonalInfo />} />
          <Route path="/dispatcher/company" element={<DispatcherCompany />} />
          <Route path="/dispatcher/banking" element={<DispatcherBanking />} />
          <Route path="/dispatcher/history" element={<DispatcherHistory />} />
          <Route path="/dispatcher/notifications" element={<DispatcherNotifications />} />
          <Route path="/dispatcher/help" element={<DispatcherHelp />} />

          {/* Shared Routes */}
          <Route path="/rating" element={<RatingFeedback />} />
          <Route path="/feedback-success" element={<FeedbackSuccess />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
