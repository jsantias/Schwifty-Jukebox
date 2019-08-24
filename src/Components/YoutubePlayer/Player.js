import React from 'react';
import YouTube from 'react-youtube/src/YouTube';
import NoVideoBackdrop from './subComponent/noVideoBackdrop';
import DisableControls from './subComponent/disableControls';
import './YoutubePlayer.css';

class Player extends React.Component {
  render() {
    const currentVidId = ""
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1, 
        controls: 0, 
        showinfo: 0
      }
    };

    return (
      <div className="youtube-player-wrapper">
        { currentVidId === '' && <NoVideoBackdrop />}
        <DisableControls />
        <YouTube
          videoId= {currentVidId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default Player;