import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo}) {

   let [error, setError] = useState(false);


    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "8e8d9c45bd5c252be5d4023d5ec0172a";


    let getWeatherInfo = async () => {

        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {

            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
} catch (err) {
    throw err;
}
    };

    let [city, setCity] = useState("");

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmitt = async (evt) => {
      
      try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch (err){
        setError(true)
    }
};
    return (
        <div className="SearchBox">
        
        <h3>Search for the Weather</h3>
        <form onSubmit={handleSubmitt}>
      <div className="field">      
      <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br></br><br></br>
      <Button variant="contained" type='submitt'>
        Search
      </Button> </div>
      {error && <p style={{color: "red"}}>No such place exist !</p> }
        </form>
       
        </div>
    );
}

