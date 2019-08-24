import React, { Component } from "react";
import { Form, FormControl, Button, Table } from "react-bootstrap";
import SocketIOClient from "socket.io-client";

var socket;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:7000/"
    };
    socket = SocketIOClient(this.state.endpoint);
  }

  createSocket = room => {
    socket.emit("create", room);
  };

  render() {
    return (
      <div>
        <Form>
          <h1>Create Room</h1>
          <FormControl placeholder="Create Room" />
          <Button>Create</Button>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Available Rooms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Room One</td>
              <td>
                <Button>Join Room</Button>
              </td>
            </tr>
            <tr>
              <td>Room Two</td>
              <td>
                <Button>Join Room</Button>
              </td>
            </tr>
            <tr>
              <td>Test</td>
              <td>
                <Button>Join Room</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
