import React from 'react'

export default class DigitalClicker extends React.Component{

    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }
        
    handleButtonClick = () => {
        let count = this.state.timesClicked
        let newCount = count += 1
        this.setState({
            timesClicked: newCount
        })
    }
    
    render () {
        return  <button onClick={this.handleButtonClick} >{this.state.timesClicked}</button>
        
    }
}

