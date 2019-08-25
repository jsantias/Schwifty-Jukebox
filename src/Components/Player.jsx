import React from "react";
import YouTube from "react-youtube";
import SocketIOClient from 'socket.io-client';

var emitVideo = true;
var socket = '';
var nextVideo = '';
var currentPlaylist = [
    {
      id: {
        videoId: "8rL4jorQlXw" 
      },
      snippet: {
        title: "Jaden - Summertime In Paris",
        channelTitle: "Jaden"
      }
    },
  ];

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

 //jaden - "8rL4jorQlXw", rick roll - "djV11Xbc914", Toto africa - "FTQbiNvZqaY"

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:7000",
      playlist: [
        {
          id: {
            videoId: "8rL4jorQlXw" 
          },
          snippet: {
            title: "Jaden - Summertime In Paris",
            channelTitle: "Jaden"
          }
        },
      ],
      playlistLength: 0,
    };

    socket = SocketIOClient(this.state.endpoint);

    socket.on("add_song", video => {
      // const songs = this.state.playlist.concat(video);
      currentPlaylist.push(video);
      // console.log(songs);
      // this.setState({ playlist: songs });
      // console.log("playlist", this.state.playlist);
      // this.startBox();
    });

    socket.on("playlist", songlist => {
      if (emitVideo === true){
        this.setState.playlist = songlist
        // this.setState({ playlist: songlist });
        nextVideo = songlist[0].id.videoId;
        console.log("songlist", songlist);
        songlist.forEach(function(element){
          // console.log(element);
          currentPlaylist.push(element);

        });
        console.log("emitted data added to currentPlaylist", currentPlaylist)
        emitVideo = false;
        }

      
      // console.log("nextvideo", nextVideo);
      // console.log("songlist", this.state.playlist);
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
    

// AEgQmPLbMvA
    return (
      <div>
        {/* { console.log("the current playlist" + this.state.playlist[0].id) } */}
        <YouTube videoId={currentPlaylist[0].id.videoId} opts={opts} onReady={this._onReady} onStateChange={this._onStateChange} />
        {/* { nextVideo = this.state.playlist} */}
      </div>
    );
  }

  _onStateChange(event) {
    if(event.data === 0 || event.data === "") {
      // event.target.loadVideoById(nextVideo);

      // console.log("currentPlaylist", currentPlaylist);
      currentPlaylist.shift();
      // currentPlaylist.shift();
      nextVideo = currentPlaylist[0].id.videoId;
      event.target.loadVideoById(nextVideo);
      // console.log("new currenPlaylist shift", currentPlaylist);
      // console.log(currentPlaylist[0].snippet.title);

      // event.target.loadVideoById(nextVideo);
      nextVideo = currentPlaylist[0].id.videoId;
      // currentPlaylist
      // console.log("currentPlaylist before", currentPlaylist[0]);
      // currentPlaylist.shift();
      // console.log("currentPlaylist", currentPlaylist);
      // console.log("nextvideo", nextVideo);
      // console.log("onstatechange = " + this.state.playlist[0]);
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Player;
