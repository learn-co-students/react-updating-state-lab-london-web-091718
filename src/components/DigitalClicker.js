import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    increment (currentClick) {
        this.setState({timesClicked: ++currentClick})
    }

    render() {
        return (
            <div>
                <label><h2>{this.state.timesClicked}</h2></label>
                <button label={this.state.timesClicked} onClick={() => this.increment(this.state.timesClicked)}>{this.state.timesClicked}</button>
            </div>
        )
    }
}