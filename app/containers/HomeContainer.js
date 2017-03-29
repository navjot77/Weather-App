/**
 * Created by navjotsingh on 3/28/17.
 */

import React, {Component} from 'react';

import Header from '../components/Header';



class HomeContainer extends Component{
    constructor(){
        super();
        this.state={
            city:''
        }
    }

    handleSubmit(){


    }

    render(){
        return(
    <div>
        <Header />
        {this.props.children}
    </div>
    )
    }



}
export default HomeContainer;