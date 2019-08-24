import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
//import SocketIOClient from "socket.io-client";

import Player from "./Player";
import Search from "./Search";
import Playlist from "./Playlist";

//var socket = '';

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:7000/"
    };
    //socket = SocketIOClient(this.state.endpoint);
  }

  render() {
    return (
      <Row>
        <Col>
          <Player />
          <Playlist />
        </Col>
        <Col>
          <Search />
        </Col>
      </Row>
    );
  }
}

export default Lobby;
