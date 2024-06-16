<h1>WeatherApp</h1>
Overview
WeatherApp is a React-based web application that allows users to check the current weather conditions for a specific city or zip code. The application supports both dark and light themes, and provides comprehensive weather details including temperature, wind speed, wind direction, pressure, humidity, visibility, and sunrise/sunset times with beautiful UI with glassmorphism.

<h2>Features</h2>
<ul>
<li>
Toggle between dark and light themes.  
</li>
<li>
Search weather by city name or zip code.
</li>
<li>
Display detailed weather information.  
</li>
 <li>
Responsive design.
</li> 
</ul>
<h2>
Prerequisites
</h2>
<ul>
  <li>
Node.js (>= 12.x)  
</li>
<li>
npm (>= 6.x)
</li>
</ul>
<h2>
Getting Started  
</h2>
<ol>
<li>
Clone the repository<br/>
<code>
git clone https://github.com/yourusername/weatherapp.git
cd weatherapp
</code>
  
</li>
<li>
Install dependencies
<code>npm install </code>
</li>
<li>
Set up environment variables
Create a .env file in the root directory and add the following variables:
<code>
REACT_APP_API_KEY=your_openweathermap_api_key
REACT_APP_API_URL=https://api.openweathermap.org/data/2.5/weather
</code>
Replace your_openweathermap_api_key with your actual API key from OpenWeatherMap.
</li>
<li>
Start the development server
<code>
npm start
</code>
The application will open in your default browser at http://localhost:3000.  
</li>
</ol>
<h1>Project Structure</h1>
<p>weatherapp/</p>
<p>├── public/</p>
<p>│   ├── index.html</p>
<p>│   └── ...</p>
<p>├── src/</p>
<p>│   ├── components/</p>
<p>│   │   ├── dashboard/</p>
<p>│   │   │   ├── index.js</p>
<p>│   │   │   └── index.css</p>
<p>│   │   ├── failureView/</p>
<p>│   │   │   ├── index.js</p>
<p>│   │   │   └── index.css</p>
<p>│   │   ├── navbar/</p>
<p>│   │   │   ├── index.js</p>
<p>│   │   │   └── index.css</p>
<p>│   │   ├── weatherApp/</p>
<p>│   │   │   ├── index.js</p>
<p>│   │   │   └── index.css</p>
<p>│   ├── App.js</p>
<p>│   ├── index.js</p>
<p>│   └── index.css</p>
<p>├── .env</p>
<p>├── package.json</p>
<p>└── README.md</p>
<h2>
Components  
</h2>
<h3>
WeatherApp  
</h3>
<ul>
  <li>
<b>Location:</b> src/components/weatherApp/index.js
  </li>
  <li>
<b>Description:</b> Main component that holds the state and renders other components based on the API status. Handles theme toggle, search method toggle, and API data fetching.
  </li>
</ul>
<h3>
Navbar  
</h3>
<ul>
  <li>
<b>Location:</b> src/components/navbar/index.js
  </li>
  <li>
<b>Description:</b> Contains the search bar and handles search input changes. Allows switching between city and zip code search methods.
  </li>
</ul>
<h3>
Dashboard  
</h3>
<ul>
  <li>
<b>Location:</b> src/components/dashboard/index.js
  </li>
  <li>
<b>Description:</b> Displays detailed weather information including temperature, wind speed, pressure, humidity, visibility, and sunrise/sunset times.
  </li>
</ul>
<h3>
FailureView
</h3>
<ul>
  <li>
<b>Location:</b> src/components/failureView/index.js
  </li>
  <li>
<b>Description:</b> Displays an error message when the API call fails.
  </li>
</ul>
<h3>
Environment Variables
</h3>
<ul>
  <li>
REACT_APP_API_KEY: Your API key for the OpenWeatherMap API.
  </li>
  <li>
REACT_APP_API_URL: The base URL for the OpenWeatherMap API (e.g., https://api.openweathermap.org/data/2.5/weather).
  </li>
</ul>
<h3>
Scripts
</h3>
<ul>
  <li>
npm start: Starts the development server.
  </li>
  <li>
npm run build: Builds the app for production.
  </li>
  <li>
npm test: Runs the test suite.
  </li>
  <li>
npm run eject: Ejects the app from Create React App, providing full control over the configuration.
  </li>
</ul>
<h3>
Dependencies
</h3>
<ul>
  <li>
react: JavaScript library for building user interfaces.
  </li>
  <li>
react-dom: Entry point to the DOM and server renderers for React.
  </li>
  <li>
react-icons: Popular icons library for React.
  </li>
</ul>
