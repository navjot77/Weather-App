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

    handleSubmit(e){
     e.preventDefault();
     this.context.router.push(`/getWeather/${this.state.city}`);
    }

    handleStateChange(e){
        e.preventDefault();
        this.setState({
            city:e.target.value
        })
    }

    render(){
        return(
    <div>
        <Header

        onSubmitCity={(e) => this.handleSubmit(e) }
        onUpdateCity={(e) => this.handleStateChange(e) }

        />
        {this.props.children}
    </div>
    )
    }



}

HomeContainer.contextTypes={

    router:React.PropTypes.object.isRequired

}
export default HomeContainer;