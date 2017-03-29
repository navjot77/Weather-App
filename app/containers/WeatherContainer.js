/**
 * Created by navjotsingh on 3/28/17.
 */
import React, {Component} from 'react';
import axios from 'axios';
import Weather from '../components/weather';
import {weatherBody} from '../styles/styles'


class WeatherContainer extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            weather:'',


        }

    }

    async componentDidMount() {
        const key = 'c6811cefbe0af15c185b1bf21e7a69c9';
        //api.openweathermap.org/data/2.5/forecast?q=sanjose}&appid=c6811cefbe0af15c185b1bf21e7a69c9

        let data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.routeParams.city}&appid=${key}`);
        console.log(data);
        this.setState({
            weather: data,
            loading: false
        })
    }

    render(){
        console.log("Inside render weather contaoner");
        return ( <div style={weatherBody}>
            <Weather data={this.state.weather} loading={this.state.loading} />
        </div>)

    }



}

export default WeatherContainer;