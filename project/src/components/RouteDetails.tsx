import React from 'react';
import { Clock, Gauge, AlertCircle, Leaf } from 'lucide-react';

export function RouteDetails() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 border border-gray-100">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Route Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-[#4D148C]" />
            <div>
              <p className="text-sm font-medium text-gray-700">Estimated Time</p>
              <p className="text-sm text-gray-600">Calculating...</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="w-5 h-5 text-[#4D148C]" />
            <div>
              <p className="text-sm font-medium text-gray-700">Traffic Flow</p>
              <p className="text-sm text-gray-600">Calculating...</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Environmental Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-700">Carbon Emissions</p>
              <p className="text-sm text-gray-600">Calculating...</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-[#4D148C]" />
            <div>
              <p className="text-sm font-medium text-gray-700">Route Status</p>
              <p className="text-sm text-gray-600">Calculating...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Route Optimization Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#4D148C] rounded-full w-0 animate-pulse"></div>
            </div>
            <span className="text-[#4D148C] font-medium">--%</span>
          </div>
        </div>
      </div>
    </div>
  );
}