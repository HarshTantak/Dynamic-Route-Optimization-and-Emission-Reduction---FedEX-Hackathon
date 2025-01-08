import os
from dotenv import load_dotenv

load_dotenv()

# API Keys
TOMTOM_API_KEY = os.getenv('TOMTOM_API_KEY')
GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')
AQICN_API_KEY = os.getenv('AQICN_API_KEY')

# API Endpoints
TOMTOM_BASE_URL = 'https://api.tomtom.com/routing/1'
GOOGLE_MAPS_BASE_URL = 'https://maps.googleapis.com/maps/api'
AQICN_BASE_URL = 'https://api.waqi.info'
OSRM_BASE_URL = 'http://router.project-osrm.org'