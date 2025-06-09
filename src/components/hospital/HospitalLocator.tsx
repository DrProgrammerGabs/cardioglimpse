import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Star } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardTitle } from '../ui/Card';

interface Hospital {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  hours: string;
  rating: number;
  emergency: boolean;
}

const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Medical Center Dr, Springfield',
    distance: '0.8 miles',
    phone: '(555) 123-4567',
    hours: 'Open 24 hours',
    rating: 4.3,
    emergency: true
  },
  {
    id: '2',
    name: 'Riverside Medical Center',
    address: '456 Health Blvd, Springfield',
    distance: '1.5 miles',
    phone: '(555) 987-6543',
    hours: 'Open 24 hours',
    rating: 4.7,
    emergency: true
  },
  {
    id: '3',
    name: 'Oak Valley Clinic',
    address: '789 Wellness Ave, Springfield',
    distance: '2.3 miles',
    phone: '(555) 456-7890',
    hours: '8:00 AM - 8:00 PM',
    rating: 4.1,
    emergency: false
  },
  {
    id: '4',
    name: 'Springfield Heart Center',
    address: '321 Cardio Lane, Springfield',
    distance: '3.1 miles',
    phone: '(555) 789-0123',
    hours: '7:00 AM - 9:00 PM',
    rating: 4.8,
    emergency: false
  }
];

const HospitalLocator: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>(mockHospitals);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false);

  const requestLocationPermission = () => {
    setLoadingLocation(true);
    
    // Simulate location permission request
    setTimeout(() => {
      setLocationPermission(true);
      setLoadingLocation(false);
    }, 1500);
  };

  const handleHospitalSelect = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half\" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <Star className="absolute top-0 left-0 w-4 h-4 fill-yellow-400 text-yellow-400 overflow-hidden\" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
        </span>
      );
    }
    
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="w-full">
      {!locationPermission ? (
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="bg-primary-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Find Nearby Emergency Care</h3>
          <p className="text-gray-600 mb-6">
            We need your location to show you the nearest hospitals and emergency centers.
          </p>
          <Button 
            onClick={requestLocationPermission} 
            isLoading={loadingLocation}
            leftIcon={<Navigation className="h-4 w-4" />}
          >
            Share My Location
          </Button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map section */}
          <div className="md:w-7/12 bg-white rounded-lg shadow-md overflow-hidden h-[400px] md:h-auto relative">
            {/* This would be replaced with actual Google Maps implementation */}
            <div className="bg-gray-200 h-full flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-500 mb-3">Google Maps would be integrated here to show hospital locations</p>
                <img 
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg" 
                  alt="Map placeholder" 
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
            {selectedHospital && (
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md">
                <h4 className="font-semibold">{selectedHospital.name}</h4>
                <p className="text-sm text-gray-600">{selectedHospital.address}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-700">{selectedHospital.distance}</span>
                  <Button size="sm" leftIcon={<Navigation className="h-3 w-3" />}>
                    Directions
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Hospital list section */}
          <div className="md:w-5/12">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Nearby Hospitals</h3>
                <div className="text-sm text-gray-600">4 results found</div>
              </div>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {hospitals.map((hospital) => (
                  <Card 
                    key={hospital.id} 
                    className={`border ${selectedHospital?.id === hospital.id ? 'border-primary-500' : 'border-gray-200'}`}
                    onClick={() => handleHospitalSelect(hospital)}
                    hover
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base mb-1">{hospital.name}</CardTitle>
                          <div className="flex items-start mb-2">
                            <MapPin className="h-4 w-4 text-gray-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{hospital.address}</span>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span>{hospital.hours}</span>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Phone className="h-4 w-4 text-gray-500 mr-1" />
                            <span>{hospital.phone}</span>
                          </div>
                          
                          {renderStars(hospital.rating)}
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-medium text-gray-900 mb-1">{hospital.distance}</span>
                          {hospital.emergency && (
                            <span className="bg-error-100 text-error-700 text-xs px-2 py-1 rounded-full">
                              Emergency 24/7
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalLocator;