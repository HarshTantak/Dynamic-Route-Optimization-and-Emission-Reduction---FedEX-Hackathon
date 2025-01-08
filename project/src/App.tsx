import React, { useState } from 'react';
import { Truck, PackageCheck, Car, ArrowRight } from 'lucide-react';
import { VehicleSelector } from './components/VehicleSelector';
import { RouteMap } from './components/RouteMap';
import { RouteDetails } from './components/RouteDetails';
import type { Vehicle, RoutePoint } from './types';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination) return;
    setLoading(true);
    // API integration would go here
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-[#4D148C] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
              </svg>
              <h1 className="text-2xl font-bold">FedEx Route Optimizer</h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Real-time Optimization</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
                <input
                  type="text"
                  id="origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4D148C] focus:ring-[#4D148C] sm:text-sm"
                  placeholder="Enter origin address"
                  required
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4D148C] focus:ring-[#4D148C] sm:text-sm"
                  placeholder="Enter destination address"
                  required
                />
              </div>
            </div>
            
            <VehicleSelector selectedVehicle={selectedVehicle} onVehicleSelect={setSelectedVehicle} />
            
            <button
              type="submit"
              disabled={!selectedVehicle || !origin || !destination || loading}
              className="w-full md:w-auto px-6 py-3 bg-[#4D148C] text-white font-medium rounded-md shadow-sm hover:bg-[#3D0F6C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D148C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Optimizing...' : 'Optimize Route'}
            </button>
          </form>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RouteMap origin={origin} destination={destination} />
            <RouteDetails />
          </div>
        </div>
      </main>
    </div>
  );
}