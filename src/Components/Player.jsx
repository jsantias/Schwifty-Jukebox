import React from "react";
import YouTube from "react-youtube";
import SocketIOClient from 'socket.io-client';

var socket = '';
var nextVideo = '';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:7000",
      playlist: [],
      playlistLength: 0,
    };

    socket = SocketIOClient(this.state.endpoint);

    socket.on("add_song", video => {
      const songs = this.state.playlist.concat(video);
      // console.log(songs);
      this.setState({ playlist: songs });
      // console.log("playlist", this.state.playlist);
      // this.startBox();
    });
  }

  startBox() {
    nextVideo = this.state.playlist[0].videoId;
    console.log(this.state.playlist[0].videoId);
    console.log(nextVideo);
    this._onStateChange("");
    // this.state.playlist.shift();
    // this.updateQueue();
  }

  updateQueue() {
    if (this.state.playlist.length !== 0){
      if (this.state.playlist[0].id.videoId === ""){
        this.state.playlist.shift();
        // console.log(this.state.playlist);
      }
      // console.log(this.state.playlist[0].id.videoId)
      nextVideo = this.state.playlist[0].id.videoId;
      // console.log("nextvid = " + nextVideo);
    }
    else {
      this.nextVideo = '';
    }
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

// AEgQmPLbMvA
    return (
      <div>
        <YouTube videoId="" opts={opts} onReady={this._onReady} onStateChange={this._onStateChange} />
        { console.log(this.state.playlist) }
      </div>
    );
  }

  _onStateChange(event) {
    if(event.data === 0 || event.data === "") {
      event.target.loadVideoById(nextVideo);
      // console.log("onstatechange = " + this.state.playlist[0]);
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Player;
