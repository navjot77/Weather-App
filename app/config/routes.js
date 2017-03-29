/**
 * Created by navjotsingh on 3/2/17.
 */


import React from 'react'


import ReactRouter,{Router, Route, IndexRoute, hashHistory} from 'react-router';



import Home from '../containers/HomeContainer';
import Body from '../components/Body';
import WeatherContainer from '../containers/WeatherContainer'
import EachDay from '../components/eachDay';

const Routes=(

<Router history={hashHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Body} />
        <Route path='/getWeather/:city' component={WeatherContainer} />
        <Route path="/details/:city" component={EachDay}/>
    </Route>
</Router>



);

export default Routes;


