import React from 'react';
import { Truck, PackageCheck, Car } from 'lucide-react';
import type { Vehicle } from '../types';

interface VehicleSelectorProps {
  selectedVehicle: Vehicle | null;
  onVehicleSelect: (vehicle: Vehicle) => void;
}

const vehicleTypes = [
  { type: 'truck', label: 'Heavy Truck', icon: Truck },
  { type: 'van', label: 'Delivery Van', icon: PackageCheck },
  { type: 'cargo', label: 'Cargo Vehicle', icon: Car },
] as const;

export function VehicleSelector({ selectedVehicle, onVehicleSelect }: VehicleSelectorProps) {
  const handleVehicleUpdate = (updates: Partial<Vehicle>) => {
    if (!selectedVehicle) {
      onVehicleSelect({
        id: Date.now().toString(),
        type: 'truck',
        fuelType: 'diesel',
        capacity: 26000,
        fuelEfficiency: 3.5,
        ...updates
      });
    } else {
      onVehicleSelect({ ...selectedVehicle, ...updates });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vehicleTypes.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => handleVehicleUpdate({ type: type as Vehicle['type'] })}
            className={`p-6 rounded-lg border-2 transition-all ${
              selectedVehicle?.type === type
                ? 'border-[#4D148C] bg-[#4D148C]/5'
                : 'border-gray-200 hover:border-[#4D148C]/50'
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <Icon className="w-8 h-8" />
              <span className="font-medium">{label}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedVehicle && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
            <select 
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#4D148C] focus:ring-[#4D148C]"
              value={selectedVehicle.fuelType}
              onChange={(e) => handleVehicleUpdate({ fuelType: e.target.value as Vehicle['fuelType'] })}
            >
              <option value="diesel">Diesel</option>
              <option value="gasoline">Gasoline</option>
              <option value="electric">Electric</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Load Capacity (kg)</label>
            <select 
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#4D148C] focus:ring-[#4D148C]"
              value={selectedVehicle.capacity}
              onChange={(e) => handleVehicleUpdate({ capacity: Number(e.target.value) })}
            >
              <option value="1000">1,000 kg</option>
              <option value="2000">2,000 kg</option>
              <option value="3500">3,500 kg</option>
              <option value="7500">7,500 kg</option>
              <option value="15000">15,000 kg</option>
              <option value="26000">26,000 kg</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Fuel Efficiency ({selectedVehicle.fuelType === 'electric' ? 'kWh/km' : 'km/L'})
            </label>
            <select 
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#4D148C] focus:ring-[#4D148C]"
              value={selectedVehicle.fuelEfficiency}
              onChange={(e) => handleVehicleUpdate({ fuelEfficiency: Number(e.target.value) })}
            >
              {selectedVehicle.fuelType === 'electric' ? (
                <>
                  <option value="0.15">0.15 kWh/km (Efficient)</option>
                  <option value="0.25">0.25 kWh/km (Average)</option>
                  <option value="0.35">0.35 kWh/km (Heavy Load)</option>
                </>
              ) : (
                <>
                  <option value="3.5">3.5 km/L (Heavy Truck)</option>
                  <option value="8.5">8.5 km/L (Medium Truck)</option>
                  <option value="12">12 km/L (Light Vehicle)</option>
                </>
              )}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}