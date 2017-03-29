/**
 * Created by navjotsingh on 3/28/17.
 */
import React,{PropTypes} from 'react';

function Weather(props){
    return (
        <div>
       <h1>Hello </h1>
        </div>
    );



}

Weather.proptypes={
    loading:PropTypes.bool.isRequired,
    data:PropTypes.object.isRequired

}

export default Weather;