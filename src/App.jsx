

import './App.css'
import useWeatherInfo from './hooks/useWeatherInfo'
import { Searchbar } from './components/Searchbar';
import { Card } from './components/Card';
import { useEffect, useState } from 'react';


function App() {

  const [temp, setTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [city, setcity] = useState("Pune");
  const [Weekday, setWeekday] = useState("Sunday");
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState("June");
  const [year, setYear] = useState(1000);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [visibility, setVisibility] = useState(0); 
  const [status, setStatus] = useState(""); 
  const [icon, setIcon] = useState(''); 


  // I have created a custom hook to fetch data from the api
  let res = useWeatherInfo(city);


  console.log(res);

  useEffect(() => {
    update(res);
  }, [res]);

  function update(res){
    if (res.name) {
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const date = new Date();
      const arr = date.toString().split(" ");
      const temp = (res.main.temp - 273.15).toFixed(1);
      const minTemp = (res.main.temp_min -273).toFixed(1);
      const maxTemp = (res.main.temp_max -273).toFixed(1);
  
      setTemp(temp);
      setMaxTemp(maxTemp);
      setMinTemp(minTemp);
      setMonth(arr[1]);
      setDay(arr[2]);
      setYear(arr[3]);
      setWeekday(weekday[date.getDay()]);
      setWind(res.wind.speed);
      setVisibility(res.visibility / 1000);
      setHumidity(res.main.humidity);
      setStatus(res.weather[0].description);
      setIcon(res.weather[0].icon);
    }
  }


  return (
    <>
    <Searchbar onCityChange={ (CityVal) => {setcity(CityVal)}}></Searchbar>
    <Card icon={icon} city={res.name} day={Weekday} date={day} month={month} year={year} temp={temp} maxTemp={maxTemp} minTemp={minTemp} wind={wind} visibility={visibility} humidity={humidity} status={status}></Card>
    </>
  )
}

export default App
