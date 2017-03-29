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
                >
            {props.children}
        </button>
    )
}

function InputField (props) {
    return (
        <input
            className='form-control'

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
            <InputField/>
            <Button>
                Get Weather
            </Button>
        </div>
    )
}

Header.propTypes = {
    direction: PropTypes.string,
    onSubmitCity: PropTypes.func,
    onUpdateCity: PropTypes.func,
    city: PropTypes.string
};




export default Header;