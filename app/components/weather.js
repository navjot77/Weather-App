/**
 * Created by navjotsingh on 3/28/17.
 */
import React,{PropTypes} from 'react';
import Loading from '../components/Loading'
import {weatherBody} from '../styles/styles'
import {getDate, convertTemp} from '../utils/Helpers'


const styleFor={

    font:{
        'color':'white',
        'font-size':'1em',
        'text-align':'center',

    },
    icon:{
        'border':'.1em solid yellow',

        'text-align':'center',
        'font-weight':'bold',
        'color':'white',
        'height':'40vh'


    }
}


function Item({day, onClicke}){
    var date = getDate(day.dt);

    return(
    <div className="col-sm-4" style={styleFor.icon} onClick={onClicke}>
        <h1>{date}</h1>
     <img src={`./app/images/weather-icons/${day.weather[0].icon}.svg`} alt="Image Not Available" height={'60vh'}/>
    <h2>Pressure : {day.temp.day}</h2>
    <h2>{ day.weather[0].main }</h2>

    </div>


    )


    // <p>{data.data.list[0].temp.day} </p>
    //<p>{data.data.list[0].pressure} </p>
    //<p>{data.data.list[0].humidity} </p>

    // <p>{data.data.list[0].weather[0].main} </p>
    // <p>{data.data.list[0].weather[0].description} </p>


    //)



}


function Display({data, children, onClicke}){
    console.log("Inside Display")
    return(


        <div  style={weatherBody} className="row">
            {children}

            { data.data.list.map( (data) => {
               return <Item key={data.dt} day={data} onClicke={onClicke} />

            }
            )}

        </div>
            )
        }






function Weather({loading, data, onClicke}){

    return (
        loading === true
        ? <Loading/>
        :
            <Display data={data} onClicke={onClicke}>
                <div style={ styleFor.font }>
                <h1>{data.data.city.name} </h1>
                <img src={`./app/images/weather-icons/${data.data.list[0].weather[0].icon}.svg`} alt="Image Not Available" />
                <h2>Select a Day ! </h2>
                </div>
            </Display>











    )



}

Weather.proptypes={
    loading:PropTypes.bool.isRequired,
    data:PropTypes.object.isRequired,
    onClicke:PropTypes.func.isRequired

}

export default Weather;

