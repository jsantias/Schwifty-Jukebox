import React from "react";
import YouTube from "react-youtube/src/YouTube";
import SocketIOClient from 'socket.io-client';

var socket = '';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:7000",
      playlist: [],
    };

    socket = SocketIOClient(this.state.endpoint);

    socket.on("add_song", video => {
      const songs = this.state.playlist.concat(video);
      this.setState({ playlist: songs });
      console.log("playlist", this.state.playlist);
    });
  }

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
      <YouTube videoId={this.state.playlist[0].id.videoId} opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default Player;
