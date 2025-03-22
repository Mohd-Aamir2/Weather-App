import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';


export default function InfoBox({info}) {

    const INIT_URL = "https://media.istockphoto.com/id/471847805/photo/cloud-computing.jpg?s=1024x1024&w=is&k=20&c=saW0sG3g--k-sqaEGIL2DD8FKINMZHSujpJMz_pn6PA=";

    let COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=1024x1024&w=is&k=20&c=k7zrlCGWEjywYTLUrKk5nnRKPoy49aHRv2KzBDsbJxw=";
    let   RAIN_URL = "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let SPRING_URL ="https://media.istockphoto.com/id/1142576725/photo/lonely-japanese-cherry-sakura-with-pink-flowers-in-spring-time-on-green-meadow.jpg?s=1024x1024&w=is&k=20&c=emM-EQyLi4rQswhtk3T-MhleBNh3kw69Sq6ky2A04IM="; 

    return (

        <div >
            <div className='card'>

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 
        ? RAIN_URL: info.temp > 18 
        ? SPRING_URL: info.temp >35 
        ? HOT_URL: info.temp >0
        ? COLD_URL :INIT_URL} 
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}   
          {   info.humidity > 80 
        ? <ThunderstormIcon />: info.temp > 18 
        ? < WbTwilightIcon />: info.temp >35 
        ? < WbSunnyIcon/>
        : <AcUnitIcon /> 
        }
        </Typography>
        <Typography variant="body2" color= "text.secondary" component = {"span"} >
       <p>Tempreature = {info.temp}&deg;C </p>
       <p>Humidity = {info.humidity} </p>
       <p>Min Temp = {info.tempMin} &deg;C</p>
       <p>Max Temp = {info.tempMax} &deg;C</p>
       <p>The Weather can be described as <i>{info.weather}</i> and Feels Like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div></div>
    )
}