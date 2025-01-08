from api_clients import TomTomClient, GoogleMapsClient, AQICNClient, OSRMClient
from data_processor import RouteDataProcessor

def main():
    # Initialize clients
    tomtom_client = TomTomClient()
    google_maps_client = GoogleMapsClient()
    aqicn_client = AQICNClient()
    osrm_client = OSRMClient()
    
    # Initialize data processor
    processor = RouteDataProcessor()
    
    # Example coordinates (New York locations)
    origin = "40.7128,-74.0060"  # NYC
    destination = "40.7589,-73.9851"  # Central Park
    coordinates = [(40.7128, -74.0060), (40.7589, -73.9851)]
    
    try:
        # Fetch data from all APIs
        traffic_data = tomtom_client.get_traffic_data(origin, destination)
        weather_data = aqicn_client.get_weather_data(40.7128, -74.0060)
        route_data = osrm_client.get_route(coordinates)
        
        # Process data into DataFrames
        traffic_df = processor.process_traffic_data(traffic_data)
        weather_df = processor.process_weather_data(weather_data)
        routes_df = processor.process_route_data(route_data)
        
        # Print results
        print("\nTraffic Data:")
        print(traffic_df)
        print("\nWeather Data:")
        print(weather_df)
        print("\nRoute Data:")
        print(routes_df)
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")

if __name__ == "__main__":
    main()