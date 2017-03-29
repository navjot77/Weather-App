/**
 * Created by navjotsingh on 3/28/17.
 */
import React, {Component, PropTypes} from 'react';
import {headerContent} from '../styles/styles'




function Button (props) {
    return (
        <button type='button'
                style={{margin: 10}}
                className='btn btn-success'
                onClick={props.onSubmitCity}
                >
            {props.children}
        </button>
    )
}

function InputField (props) {
    return (
        <input
            className='form-control'
            value={props.city}
            onChange={props.onUpdateCity}
            placeholder='St. George, Utah'
            type='text'
             />
    )
}

function getStyles () {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'right'
    }
}

function Header (props) {
    return (
        <div style={ getStyles() }>
            <h1 style={{'margin-right':'20em'}}>WeatherApp</h1>
            <InputField city={props.city} onUpdateCity={props.onUpdateCity}/>
            <Button  onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </div>
    )
}

Header.propTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    city:PropTypes.string
};




export default Header;