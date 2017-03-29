/**
 * Created by navjotsingh on 3/28/17.
 */
import React, {Component} from 'react';
import axios from 'axios';
import Weather from '../components/weather';



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

        let data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.routeParams.city}&appid=${key}`);

        this.setState({
            weather: data,
            loading: false
        })
    }



    async componentWillReceiveProps() {

        const key = 'c6811cefbe0af15c185b1bf21e7a69c9';
        //api.openweathermap.org/data/2.5/forecast/daily?q=sanjose}&appid=c6811cefbe0af15c185b1bf21e7a69c9
        let data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.routeParams.city}&appid=${key}`);
        console.log(data);
        this.setState({
            weather: data,
            loading: false
        })
    }


    handleClick(){

        console.log('CLICKED THE DAY');
       // this.context.router.push({
         //   pathname: '/detail',
           // state: {
             //   weather:weather
//
  //          }
    //    })



    }


    render(){
        console.log("Inside render weather contaoner");

        return (
            <Weather data={this.state.weather} loading={this.state.loading}
            onClick={()=>this.handleClick()}

            /> )


    }



}
WeatherContainer.contextTypes={
    router: React.PropTypes.object.isRequired


};

export default WeatherContainer;