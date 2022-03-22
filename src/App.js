import Footer from "components/Footer";
import Header from "components/Header";
import WeatherCard from "components/WeatherCard";
import React, {useState} from "react";




function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={isDarkMode ? "App bg-ddark" : "App bg-white"}>
        <div className="w-full h-6 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <WeatherCard isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
