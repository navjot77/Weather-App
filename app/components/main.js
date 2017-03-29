/**
 * Created by navjotsingh on 3/28/17.
 */
import React from 'react'

class MainComponent extends React.Component{
    constructor(){
        super();
        this.state={
            name:"navjot"

        }

    }
    render(){

        return (<div><h1>Hello From Main {this.state.name}</h1></div>)


    }






}

export default MainComponent;