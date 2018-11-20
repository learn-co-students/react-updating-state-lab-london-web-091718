import React, {Component} from 'react'

class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

    handleClick = () => {
        const clicked = this.state.timesClicked + 1
        this.setState({timesClicked: clicked})
    }


}

export default DigitalClicker 