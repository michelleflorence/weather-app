# Weather App README

This Weather App is a simple application that provides weather information using the Visual Crossing Weather API. To utilize the API, users must sign up to obtain an API key, which is required for making requests and accessing weather data.

# Getting Started
Follow the steps below to set up and run the Weather App on your local machine:

1. Clone The Repository
   ```js
   git clone https://github.com/michelleflorence/weather-app.git
   cd weather-app
   ```
2. Install Dependencies:
    ```js
    npm install 
    ```
3. Sign up for Visual Crossing API:
   - Visit the Visual Crossing Weather API website: [Visual Crossing Weather API](http://www.visualcrossing.com/weather-api)
   - Sign up for an account.
   - Obtain your API key from the dashboard.
  
4. Configure API Key:
   - Open the Weather App project.
   - Locate the .env or a similar configuration file.
   - Replace the placeholder for the API key with the one you obtained.
    ```js
    // Open file .env
    VITE_API_KEY = 'YOUR_VISUAL_CROSSING_API_KEY';
    ```
5. Run the Application:
    ```js
    npm run dev
    ```
6. Access the Weather App:
   - Open your web browser and navigate to http://localhost:5173 to view the Weather App.

# Features
- Current Weather: Get real-time weather information for a specific location.
- Forecast: View the weather forecast for the next few days.

# Technologies Used
- Frontend: React.js
- API: Visual Crossing Weather API

# Credit
Special thanks to Visual Crossing for providing the weather data through their API.
