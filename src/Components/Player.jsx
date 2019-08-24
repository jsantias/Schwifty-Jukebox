import React from "react";
import YouTube from "react-youtube/src/YouTube";

class Player extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2,
        controls: 0,
        showinfo: 0
      }
    };

    return (
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default Player;
