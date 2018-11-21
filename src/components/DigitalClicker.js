// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor () {
    super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let count = this.state.timesClicked
        this.setState({
            timesClicked: count+=1
        })
    }

    render() {
        return <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
        
}
