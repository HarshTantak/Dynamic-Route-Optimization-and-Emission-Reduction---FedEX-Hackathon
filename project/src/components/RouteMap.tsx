import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface RouteMapProps {
  origin: string;
  destination: string;
}

export function RouteMap({ origin, destination }: RouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAIa3za3CegYly1IxACxG-5hs0mn9cuXZQ',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.0060 },
          zoom: 12,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#746855' }]
            }
          ]
        });

        directionsRendererRef.current = new google.maps.DirectionsRenderer({
          map: mapInstanceRef.current,
          suppressMarkers: false
        });
      }
    });
  }, []);

  useEffect(() => {
    if (origin && destination && mapInstanceRef.current && directionsRendererRef.current) {
      const directionsService = new google.maps.DirectionsService();

      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === 'OK' && result && directionsRendererRef.current) {
            directionsRendererRef.current.setDirections(result);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[600px]">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}