import requests
import pandas as pd
from config import *

class TomTomClient:
    def get_traffic_data(self, origin, destination):
        url = f"{TOMTOM_BASE_URL}/calculateRoute/{origin}/{destination}/json"
        params = {
            'key': TOMTOM_API_KEY,
            'traffic': 'true'
        }
        response = requests.get(url, params=params)
        return response.json()

class GoogleMapsClient:
    def get_distance_matrix(self, origins, destinations):
        url = f"{GOOGLE_MAPS_BASE_URL}/distancematrix/json"
        params = {
            'origins': '|'.join(origins),
            'destinations': '|'.join(destinations),
            'key': GOOGLE_MAPS_API_KEY
        }
        response = requests.get(url, params=params)
        return response.json()

class AQICNClient:
    def get_weather_data(self, lat, lon):
        url = f"{AQICN_BASE_URL}/feed/geo:{lat};{lon}/"
        params = {
            'token': AQICN_API_KEY
        }
        response = requests.get(url, params=params)
        return response.json()

class OSRMClient:
    def get_route(self, coordinates):
        coords_str = ';'.join([f"{lon},{lat}" for lat, lon in coordinates])
        url = f"{OSRM_BASE_URL}/route/v1/driving/{coords_str}"
        params = {
            'overview': 'full',
            'alternatives': 'true',
            'steps': 'true'
        }
        response = requests.get(url, params=params)
        return response.json()