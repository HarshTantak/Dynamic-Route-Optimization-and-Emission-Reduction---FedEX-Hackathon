
# 🌍 Dynamic Route Optimization & Emission Reduction

## 🚚 FedEx Smart India Hackathon – IIT Madras  
**Team Name**: Likelihood Function  
**Members**: Sanya Saxena, Harsh Tantak, Lawrence Mondal  
**Institution**: M.Sc. Statistics and Data Science, NMIMS Mumbai  
🏆 **Selected as a Top 10 Finalist Project** at the IIT Madras FedEx Smart India Hackathon  
🔗 [GitHub Repository](https://github.com/HarshTantak/Dynamic-Route-Optimization-and-Emission-Reduction---FedEX-Hackathon)

---

## 🔎 Problem Statement

Balancing **on-time delivery** with **low environmental impact** is a major challenge in transportation and logistics. Inefficient routes lead to increased carbon emissions, idle times, and unsatisfied customers.

---

## 🎯 Project Objective

Develop a **Python-based intelligent routing system** that:
- Optimizes delivery routes using real-time data
- Predicts travel time with high accuracy
- Estimates carbon emissions for each route
- Supports dynamic updates to reduce idle time and improve efficiency

---

## 🧠 Core Components

### 1. **Dynamic Data Integration**
Real-time data pulled from:
- **TomTom API** (Traffic)
- **Google Maps** (Alternative Routes)
- **OSRM** (Route Generation)
- **AQICN API** (Air Quality)
- **Weather API**

### 2. **Predictive Traffic Modeling**
- **KNN + ANN Hybrid Model**:  
  KNN provides initial travel time predictions using geo-coordinates, weather, and traffic features. ANN refines this using global features for better ETA accuracy.

### 3. **Vehicle-Specific Route Optimization**
- **Heuristic Algorithms**:
  - A* for shortest path
  - **NN-TC**: Nearest neighbor with time constraint
  - **SPT**: Shortest Processing Time
- **ANN Model**: Predicts idle hotspots, traffic delays based on historical data

### 4. **Real-Time Travel Time & Emission Analysis**
- Live ETA forecasting adapting to traffic/environmental fluctuations
- **Carbon Emissions** estimated using:
  - Fuel type
  - Engine size
  - Route distance & idle time
  - Azure ML-based regression model

---

## 🛠️ Tech Stack

- **Frontend**: Streamlit / Web UI for input & results
- **Backend**: Python (Flask), Azure ML for CO₂ prediction
- **Data Sources**: OSRM, Google Maps, TomTom, AQICN, OpenWeatherMap
- **ML Models**: KNN, ANN, A* Pathfinding, Azure Regression Model
- **Deployment**: Azure ML, GitHub

---

## 🧮 Model Workflow Summary

```plaintext
User Input: Start & End Location + Vehicle Info
     |
     v
Collect Real-Time Data (Traffic, AQI, Weather)
     |
     v
Estimate ETA: KNN -> ANN Hybrid Model
     |
     v
Optimize Route: A* + NN-TC + SPT
     |
     v
Estimate Emissions: Azure ML Regression Model
     |
     v
Display Route + ETA + Emissions in UI
```

---

## 📈 Benefits

- 🚗 **Reduced Idle Time**: Route optimization based on traffic windows
- 🌱 **Lower Carbon Footprint**: Smart emission estimates per trip
- ⚡ **Operational Efficiency**: Intelligent scheduling and routing
- 😊 **Customer Satisfaction**: Accurate ETA and on-time deliveries

---

## 🧪 Use Case Example

> **Scenario**: A fleet vehicle in Mumbai needs to deliver 5 packages before 5 PM.
- Input: Current location, delivery stops, vehicle fuel type (Petrol)
- Output: Optimized route using NN-TC + SPT, ETA, and estimated CO₂ output
- Real-time re-routing if traffic delays or weather disruptions occur

---

## 🔮 Future Scope

- 🧠 Integrate LLM-powered conversational assistant for drivers
- 📱 Launch mobile app interface for delivery tracking
- 🌐 Add multilingual voice command features
- 🔁 Incorporate feedback loop for improving route recommendation

---

## 👨‍💻 Team Likelihood Function

- **Sanya Saxena** – Data Pipeline & UI Integration  
- **Harsh Tantak** – ML Modeling & Routing Optimization  
- **Lawrence Mondal** – Azure ML Emission Estimator & Deployment

---

## 📎 References

- [OSRM API Docs](http://project-osrm.org/)
- [TomTom Developer Portal](https://developer.tomtom.com/)
- [AQICN API](https://aqicn.org/api/)
- [Google Maps Directions API](https://developers.google.com/maps/documentation/directions)
- [Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/)
