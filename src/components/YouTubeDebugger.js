import React from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor(){
    super();

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

  handleClick=(event)=> {
    event.persist()
    if (event.target.className === 'bitrate'){
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    } else if (event.target.className === 'resolution'){
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }
  }

  updateBitrate=()=> {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateResolution=()=> {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.updateBitrate}>bitrate</button>
        <button className="resolution" onClick={this.updateResolution}>resolution</button>
      </div>
    )
  }
}