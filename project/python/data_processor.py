import pandas as pd
import json
from datetime import datetime
from typing import Dict, Any

class DataProcessor:
    def __init__(self):
        self.traffic_df = pd.DataFrame()
        self.weather_df = pd.DataFrame()
        self.air_quality_df = pd.DataFrame()
        self.route_df = pd.DataFrame()
        self.emissions_df = pd.DataFrame()

    def process_traffic_data(self, data: Dict[str, Any]) -> pd.DataFrame:
        if "flowSegmentData" in data:
            segment = data["flowSegmentData"]
            traffic_info = {
                "timestamp": datetime.now(),
                "current_speed": segment.get("currentSpeed"),
                "free_flow_speed": segment.get("freeFlowSpeed"),
                "current_travel_time": segment.get("currentTravelTime"),
                "free_flow_travel_time": segment.get("freeFlowTravelTime"),
                "confidence": segment.get("confidence")
            }
            self.traffic_df = pd.concat([self.traffic_df, pd.DataFrame([traffic_info])], ignore_index=True)
        return self.traffic_df

    def process_weather_data(self, data: Dict[str, Any]) -> pd.DataFrame:
        if "current" in data:
            current = data["current"]
            weather_info = {
                "timestamp": datetime.now(),
                "temperature": current.get("temp_c"),
                "humidity": current.get("humidity"),
                "wind_speed": current.get("wind_kph"),
                "condition": current.get("condition", {}).get("text"),
                "precipitation": current.get("precip_mm")
            }
            self.weather_df = pd.concat([self.weather_df, pd.DataFrame([weather_info])], ignore_index=True)
        return self.weather_df

    def process_air_quality_data(self, data: Dict[str, Any]) -> pd.DataFrame:
        if "data" in data:
            aqi_data = data["data"]
            air_quality_info = {
                "timestamp": datetime.now(),
                "aqi": aqi_data.get("aqi"),
                "pm25": aqi_data.get("iaqi", {}).get("pm25", {}).get("v"),
                "pm10": aqi_data.get("iaqi", {}).get("pm10", {}).get("v"),
                "o3": aqi_data.get("iaqi", {}).get("o3", {}).get("v"),
                "no2": aqi_data.get("iaqi", {}).get("no2", {}).get("v")
            }
            self.air_quality_df = pd.concat([self.air_quality_df, pd.DataFrame([air_quality_info])], ignore_index=True)
        return self.air_quality_df

    def process_route_data(self, data: Dict[str, Any]) -> pd.DataFrame:
        if "routes" in data:
            route = data["routes"][0]
            route_info = {
                "timestamp": datetime.now(),
                "distance": route.get("legs", [{}])[0].get("distance", {}).get("value"),
                "duration": route.get("legs", [{}])[0].get("duration", {}).get("value"),
                "start_address": route.get("legs", [{}])[0].get("start_address"),
                "end_address": route.get("legs", [{}])[0].get("end_address"),
                "polyline": route.get("overview_polyline", {}).get("points")
            }
            self.route_df = pd.concat([self.route_df, pd.DataFrame([route_info])], ignore_index=True)
        return self.route_df

    def process_emissions_data(self, data: Dict[str, Any]) -> pd.DataFrame:
        emissions_info = {
            "timestamp": datetime.now(),
            "co2e": data.get("co2e"),
            "co2e_unit": data.get("co2e_unit"),
            "calculation_method": data.get("co2e_calculation_method"),
            "activity_value": data.get("activity_data", {}).get("activity_value"),
            "activity_unit": data.get("activity_data", {}).get("activity_unit")
        }
        self.emissions_df = pd.concat([self.emissions_df, pd.DataFrame([emissions_info])], ignore_index=True)
        return self.emissions_df

    def save_data(self):
        """Save all dataframes to CSV files with timestamps"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        self.traffic_df.to_csv(f"data/traffic_{timestamp}.csv", index=False)
        self.weather_df.to_csv(f"data/weather_{timestamp}.csv", index=False)
        self.air_quality_df.to_csv(f"data/air_quality_{timestamp}.csv", index=False)
        self.route_df.to_csv(f"data/route_{timestamp}.csv", index=False)
        self.emissions_df.to_csv(f"data/emissions_{timestamp}.csv", index=False)

    def get_latest_data(self):
        """Get the most recent data from all dataframes"""
        return {
            "traffic": self.traffic_df.iloc[-1].to_dict() if not self.traffic_df.empty else {},
            "weather": self.weather_df.iloc[-1].to_dict() if not self.weather_df.empty else {},
            "air_quality": self.air_quality_df.iloc[-1].to_dict() if not self.air_quality_df.empty else {},
            "route": self.route_df.iloc[-1].to_dict() if not self.route_df.empty else {},
            "emissions": self.emissions_df.iloc[-1].to_dict() if not self.emissions_df.empty else {}
        }