import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {bitrate: 8, video: {resolution: '1080p'}}
        }
    }

    editBitrate () {
        this.setState({
            settings: {bitrate: this.state.settings.bitrate === 8 ? 12 : 8, video: this.state.settings.video}
        })
    }

    editResolution () {
        this.setState({
            settings: {bitrate: this.state.settings.bitrate, video: {resolution: this.state.settings.video.resolution === '1080p' ? "720p" : "1080p"}}
        })
    }

    render() {
        return (
            <div>
                <h2>Bitrate: {this.state.settings.bitrate}</h2>
                <h2>Resolution: {this.state.settings.video.resolution}</h2>
                <button className="bitrate" onClick={() => this.editBitrate()} name="bitrate">Bitrate</button>
                <button className="resolution" onClick={() => this.editResolution()} name="Resolution">Resolution</button>
            </div>
        )
    }
}