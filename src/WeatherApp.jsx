import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";


export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(

        <div style={{textAlign: "center"}}>
            <h2>Weather App by Aamir❤️</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}