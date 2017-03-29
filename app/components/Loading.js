/**
 * Created by navjotsingh on 3/28/17.
 */

import React from 'react';

var interval;
class Loading extends React.Component{
    constructor(){
        super()
        this.state={
            text:'loading'
        }



    }


    componentDidMount(){

           interval=setInterval(()=>
           {
                if (this.state.text != 'loading...') {
                    this.setState({
                        text: this.state.text+'.'
                    })
                }
                 else{
                        this.setState({
                            text:'loading'
                        })
                    }


            },100)


        }




    componentWillUnmount(){
    clearInterval(interval);
    }

    render(){

        return <h2>{this.state.text}</h2>
    }




}
export default Loading;