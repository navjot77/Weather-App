/**
 * Created by navjotsingh on 3/29/17.
 */

import React from 'react';
import {getDate} from '../utils/Helpers';


const styles={
    'text-align':'center',
    'color':'purple',
    'font-size':'1em',
    'padding':'1em',
    'background':'brown',
    'width':'100%',
    'height':'100vh',


}

function EachDay(props){
    const day=props.location.state.weather;
    let city=props.routeParams.city;
    city=city.toUpperCase();
    console.log(day);
    var date = getDate(day.dt);

    return (
    <div style={styles}>
    <h1>{city}</h1>
        <h1> {date}</h1>
       <img src={`./app/images/weather-icons/${day.weather[0].icon}.svg`} alt="Image Not Available" height={'150vh'}/>
        <h1>  {day.weather[0].description}</h1>
        <h1>  {day.weather[0].main.icon}</h1>
        <h1> Humidity: {day.humidity}</h1>
        <h1> Pressure: {day.pressure}</h1>
        <h1> Min Temp {day.temp.min}</h1>
        <h1> Max Temp: {day.temp.max}</h1>


    </div>
    )

}

export default EachDay;



