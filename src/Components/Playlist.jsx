import React, { Component } from "react";
import { Table } from "react-bootstrap";
import SocketIOClient from 'socket.io-client';

var socket ='';

class SongQueue extends Component {
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

  playlistRender () {
    const { playlist } = this.state;
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Song Queue</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, index) => (
          <tr key={index}>
            <td key={index}>{song.snippet.title}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    )
  };

  render() {
    return this.playlistRender();
  }
}

export default SongQueue;
