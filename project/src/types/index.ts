export interface Vehicle {
  id: string;
  type: 'truck' | 'van' | 'cargo';
  fuelType: 'diesel' | 'gasoline' | 'electric';
  capacity: number;
  fuelEfficiency: number; // km/L or kWh/km for electric
}

export interface RoutePoint {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  deliveryWindow?: {
    start: string;
    end: string;
  };
}

export interface RouteOption {
  id: string;
  distance: number;
  duration: number;
  emissions: number;
  trafficLevel: 'low' | 'medium' | 'high';
  weatherCondition: string;
  waypoints: RoutePoint[];
}