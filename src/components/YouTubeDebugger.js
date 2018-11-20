import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClickBitrate}/>
                <button className='resolution' onClick={this.handleClickResolution}/>
            </div>
        )
    }

    handleClickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

}

export default YouTubeDebugger