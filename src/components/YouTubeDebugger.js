// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video:
        {
          resolution: '1080p'
        }
    }
  };

  bitrateClickHandler = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }
    )
  };

  resolutionClickHandler = () => {
    console.log('bitrate');
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    )
  };

  render() {
    return (
      <div>
        <button className={'bitrate'} onClick={this.bitrateClickHandler}>{this.state.settings.bitrate}</button>
        <button className={'resolution'} onClick={this.resolutionClickHandler}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
