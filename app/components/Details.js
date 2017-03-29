/**
 * Created by navjotsingh on 3/28/17.
 */

import React from 'react';

import {weatherBody} from '../styles/styles'


function Details(props) {

        return(

            <div style={weatherBody}>

        <img src={`./app/images/weather-icons/${data.data.list[0].weather[0].icon}.svg`} alt="Image Not Available" />
        <p>{data.data.city.name} </p>
    <p>{data.data.list[0].temp.day} </p>
    <p>{data.data.list[0].pressure} </p>
    <p>{data.data.list[0].humidity} </p>

    <p>{data.data.list[0].weather[0].main} </p>
    <p>{data.data.list[0].weather[0].description} </p>
            </div>


)




}


export default Details;
