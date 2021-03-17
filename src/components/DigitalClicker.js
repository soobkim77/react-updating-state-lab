// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    handleClick = (event) => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return(
            <button onClick={this.handleClick}>
               <label>{this.state.timesClicked}</label> 
            </button>
        )
    }
}