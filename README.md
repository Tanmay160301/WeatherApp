Weather Application 
===================

Overview
--------

This weather application is designed to provide users with current weather information for specified locations. Users can easily search for cities, view current temperature, weather conditions, and additional relevant details.

Features
--------

*   **Vite Project Setup:** The application is built using Vite, a modern build tool for frontend development.
*   **OpenWeatherMap API Integration:** The application utilizes the OpenWeatherMap API to retrieve weather data for specified locations.
*   **Form Component:** A form component is implemented to enable users to input city names. The application manages input field state and handles weather data fetched from the API.
*   **Display Weather Information:** Current temperature, weather conditions, and other relevant data retrieved from the API are displayed to the user.


Installation
------------

1.  Clone the repository to your local machine:
    
    ```git
    git clone https://github.com/Tanmay160301/WeatherApp.git
    ```
    
2.  Navigate to the project directory:
    
     ```git
    cd WeatherApp
    ```
    
3.  Install dependencies:
     ```git
    npm install
    ```
    
    

Usage
-----

1.  Start the application:
    
     ```git
    npm run dev
    ```
    
2.  Access the application in your web browser at `http://localhost:5173/WeatherApp/`.

API Key
-------

You will need to sign up for an API key from [OpenWeatherMap](https://openweathermap.org/) and replace `YOUR_API_KEY` in the code with your actual API key.

Dependencies
------------

*   Vite
*   React
*   Fetch (for API requests)

