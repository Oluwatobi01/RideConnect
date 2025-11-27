
import { RideOption, PaymentMethod, Request, Delivery } from './types';

export const RIDE_OPTIONS: RideOption[] = [
  {
    id: '1',
    name: 'Ride',
    description: '4 min away',
    price: 12.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2NQwQUrg6kIznlPAukZ_OGni1YtkfwoUiZI6IzATYkw-aEydGp3BNea_8hMP0H6HrcSD6HWidImiawlw6-zEkeVhjWLH2zqUjr5l4suCA19NXHD0Z7U_Q6TflmXFy_Hvam-8isA_sUwBtAiHr7ReUOjUjDO8dw1D25bcvtfHjz_tsXTlgHx-1_Qz7f__m1PNrBQiRHPOLEgCDbGe5uKr3Qj3S_ZMlb7UuVJ46kR4Lrpt1lznbAzsAfCGTriPE3N8xjeG2szQqcy0'
  },
  {
    id: '2',
    name: 'XL',
    description: '6 min away',
    price: 18.75,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDomSQcJd-QUSeE1NVDKR1al08JJnIkl3ZMcvsNFfPtR4i44Lq62_2_67piH3r29W2vVuGek4my8Vfo-dw-VozECFhHd2RP3pAikGBOwN9LlcHmTDeduZBTH1hIAq1MgtGCkNPnHyoi1BJpnNROHl_hDpVb7ihONfp7IQlsQ3Q-CMR4MRiPOqSs-RfIds3zL8K77LHkcYBLo6l0OPh-OYqMXAC3SjOWKipgFq85B5kJRZTIok3KaRc0Lfv0GjodxWNZ3pslFDXUnIE'
  },
  {
    id: '3',
    name: 'Premium',
    description: '5 min away',
    price: 25.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJMRyt-0kogmiY-7k4co1Z6BeCG4VgCcL79qq8WSfy6rQkJ4dOWzTwCT9aWBtBm66PGlgNxKtDA4uO2IbxUkF10fQoy8uVZnXKmnC7lE9Fg4XYCVXICJJd9Wch3XCRQDuzzUgNhjrUwM3dEhTDTkLlQXhIWOGwXvCpJV4qc_nMVbowP_6SoBFcm_L2YMNz0OPmFDzQqCFHScGSaVnsLgU2W4h2N_G8WhXDiJ-oTKVprfvAKsJWrkSpE-mt4H3Zmhf79WRbGn15iao'
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: '1',
    type: 'visa',
    label: 'Visa •••• 1234',
    isDefault: true,
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh14JDW8KK4gbD5_hS4RWcbAqR7qbWfzoqxQCZd6lFNZ0Y2XFTCpjwz2WKWVGJRwGNVdVdJM70eYUe5SZo73A9qcBj1OECrKFkYrgrNQ7ZcqiJIzZJxewL2DfNeVAVM9YLJQBJQJbEtFtihEIFmZLZFeFKtSKgYBhpJBWxlaFpskBvL_vldA_tI1fsNDep7N6w66ANAO2wCNgTKq95A2ls975ig8aUiBTmb94NtYOZ8pnXncO64YEM3h0ljyT1whPD66QliGluWg4'
  },
  {
    id: '2',
    type: 'mastercard',
    label: 'Mastercard •••• 5678',
    isDefault: false,
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyV3YMAhqXLej_eL_VzxvcOdsaKO7HCdMUkW-_-qk60-EcXr9iTOz4orfaKB7ef73qyAJ0bVtnjCYo0Nx6RTRamICxaYIQlS1Xhse3MlRmAeMU6xZKg4bOXftgWuMzR9QvrNt_AyqQXFoBiOf6uWuxW4Y9kKBXDHHAdoJF7JEPoHALYezDO_7xQJoGyYaBeEhjmHrMVnNKrbvmJzw_W99HDMloI7k_RXBH-IXf30PPV-XLWlsCj668jGVc93k_nJE-B-ONv8dztQA'
  },
  {
    id: '3',
    type: 'apple_pay',
    label: 'Apple Pay',
    isDefault: false,
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJlg4Vjk4ShFMASOiJlofo4_KgiyiLS9f3M-nR0GaC8c-siWR2nThzvzXB9c_44Vc6K1k7JbN1Bl1YD8jM2LYRTVmUkXmc4z0mNsE9XCjtjtxLs2y0Ci8GJlurlseL7o1poMnOSy8NzbVASL_2SjAYg0dP2sGhR1R2iNGma0uDQZ1KXZ1CI5uT9k4grJqqhTBIECTTAXjT7BGS959HhOB7IlP02orjeSEPOIKkD1U9krpeaeRXgvSlclA_AP3uUP8DcsHuCWHPro'
  }
];

export const DRIVER_REQUESTS: Request[] = [
  {
    id: 'req_1',
    type: 'ride',
    price: 12.50,
    pickup: '123 Main St',
    dropoff: '456 Oak Ave',
    distance: '3.2 mi',
    duration: '15 min'
  },
  {
    id: 'req_2',
    type: 'delivery',
    price: 8.75,
    pickup: '789 Pine Ln',
    dropoff: '101 Maple Rd',
    distance: '2.1 mi',
    duration: '10 min'
  }
];

export const DISPATCH_DELIVERIES: Delivery[] = [
  {
    id: 'WB-12345678',
    driver: 'John Smith',
    customer: 'Jane Doe',
    status: 'In Transit',
    timeAgo: '5 min ago'
  },
  {
    id: 'WB-98765432',
    driver: 'Alex Ray',
    customer: 'Sam Wilson',
    status: 'Pending',
    timeAgo: '12 min ago'
  },
  {
    id: 'WB-11223344',
    driver: 'Maria Garcia',
    customer: 'Peter Jones',
    status: 'Delivered',
    timeAgo: '30 min ago'
  },
  {
    id: 'WB-55667788',
    driver: 'Chris Lee',
    customer: 'Olivia Chen',
    status: 'Cancelled',
    timeAgo: '1 hr ago'
  }
];

export const EARNINGS_TRIPS = [
    { id: 1, route: 'Downtown to North Park', price: 15.50, time: 'Today, 2:45 PM', rating: 5.0 },
    { id: 2, route: 'Airport to City Center', price: 28.00, time: 'Today, 11:10 AM', rating: 4.9 },
    { id: 3, route: 'Westfield Mall to Seaside', price: 21.75, time: 'Yesterday, 8:30 PM', rating: 5.0 },
    { id: 4, route: 'University to Station', price: 12.00, time: 'Yesterday, 5:15 PM', rating: 4.8 },
    { id: 5, route: 'Tech Hub to Downtown', price: 18.25, time: 'Yesterday, 9:00 AM', rating: 5.0 },
];

export const RIDER_HISTORY = [
    { id: 1, pickup: '123 Main St', dropoff: '456 Oak Ave', price: 12.50, date: 'Today, 10:23 AM', status: 'Completed' },
    { id: 2, pickup: 'Tech Hub', dropoff: 'Downtown', price: 18.25, date: 'Yesterday, 6:15 PM', status: 'Completed' },
    { id: 3, pickup: 'Airport', dropoff: 'Grand Hotel', price: 28.00, date: 'Oct 24, 2:30 PM', status: 'Completed' },
    { id: 4, pickup: 'Westfield Mall', dropoff: 'Seaside', price: 21.75, date: 'Oct 22, 8:30 PM', status: 'Cancelled' },
];

export const FEEDBACK_TAGS = [
    { id: 'clean_car', label: 'Clean Car', icon: 'colors_spark' },
    { id: 'friendly_driver', label: 'Friendly Driver', icon: 'mood' },
    { id: 'good_navigation', label: 'Good Navigation', icon: 'navigation' },
    { id: 'great_music', label: 'Great Music', icon: 'music_note' },
    { id: 'smooth_ride', label: 'Smooth Ride', icon: 'trending_up' },
];

export const TIPS = [2, 5, 10];

export const DRIVER_REVIEWS = [
    { id: 1, name: 'Sarah J.', rating: 5, comment: 'Great ride! Very smooth and clean car.', date: 'Today', tags: ['Clean Car', 'Friendly'] },
    { id: 2, name: 'Mike T.', rating: 4, comment: 'Good driver, but a bit of traffic.', date: 'Yesterday', tags: ['Safe Driver'] },
    { id: 3, name: 'Emily R.', rating: 5, comment: 'Awesome music playlist!', date: 'Oct 24', tags: ['Great Music', 'Fun'] },
    { id: 4, name: 'David L.', rating: 5, comment: 'Arrived early and got me there fast.', date: 'Oct 20', tags: ['Punctual', 'Fast'] },
];

export const TRACKING_DETAILS = {
  id: 'WB-12345678',
  status: 'In Transit',
  eta: '14:35',
  driver: {
    name: 'Alex Morgan',
    vehicle: 'Toyota Prius - ABC-123',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_JsnHeLCMxyJX9mgmu_SWQ_CxnkKZovgIGv-D3_LqxPcqUlXqNuddDIrZCThlQ_Mvs8n9bY5sTHYK5V7U85R40lJOaOon8cXPh7Gc_ZD8wPtj-r43JMy1bjuxHrcCAyHP7Y0GdCVNpv5mzJpCqoTFsQeNZUgrKJ3zcqXPDNdMR5iQHbvb-H7kFyvR5Gy4LwO2HfCtF9o7WMdPR3kwt9jKcrqNCW6Qq1ZQIUYxAxnsP2rCn1vWgbXoyjC4MSAD8r664BagitPq0oQ'
  },
  timeline: [
    { time: '12:15 PM', status: 'Order Placed', completed: true },
    { time: '12:48 PM', status: 'Package Picked Up', completed: true },
    { time: '', status: 'In Transit', subtext: 'Driver is on the way', current: true },
    { time: '', status: 'Delivered', subtext: 'Awaiting arrival', completed: false }
  ],
  sender: {
    name: 'John Doe',
    address: '123 Main St, New York, NY'
  },
  recipient: {
    name: 'Jane Smith',
    address: '456 Park Ave, New York, NY'
  },
  package: {
    description: 'Electronics - 1x Laptop. Dimensions: 15" x 10" x 2".',
    instructions: 'Handle with care, fragile item.'
  }
};
