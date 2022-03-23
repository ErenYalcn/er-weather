import Footer from "components/Footer";
import Header from "components/Header";
import WeatherCard from "components/WeatherCard";
import React, {useState, useEffect} from "react";




function App() {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState();
  const [state, setState] = useState('Ankara');
  const lang = 'tr';

  const apiKey = '8846af5c6e693f46e057553a8fa58a72';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&lang=${lang}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);



  const [isTurn, setIsTurn] = useState(false);


  const inputHandler = (event) => {

    if(document.querySelector('#arama').value.length > 3){
      setState(event.target.value);
      //setGetState(event.target.value);
      
    }else {
    }
    if(document.querySelector('#arama').value.length > 0){
      
      setIsTurn(true);
      
    }else {}
    
    if (document.querySelector('#arama').value.length >= 4) {
      setIsTurn(false);
    }



  };
  
  const submitHandler = () => {
    setState(getState);
  };
    

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(0);
  };
    const fixedSpeed = (s) => {
    return s.toFixed(0);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={isDarkMode ? "App bg-ddark" : "App bg-white"}>
        <div className="w-full h-6 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <WeatherCard isTurn={isTurn} fixedSpeed={fixedSpeed} kelvinToFarenheit={kelvinToFarenheit} apiData={apiData} setApiData={setApiData} isDarkMode={isDarkMode}  state={state} setGetState={setGetState} inputHandler={inputHandler} getState={getState} submitHandler={submitHandler}/>
        
        
        <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
