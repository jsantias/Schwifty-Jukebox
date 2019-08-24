import React, { Component } from "react";
import { Form, FormControl, Button, Col , Image, Card, Row} from "react-bootstrap";
import SocketIOClient from "socket.io-client";
import './Home.css'

var socket;
const buttonstyle = {
    background: '#2c003f;'
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:7000",
      rooms: [{id:"1243", name: "iajsfb"}, {id:"92183", name:"ijsfb"}, {id:"1243", name: "iajsfb"}, {id:"92183", name:"ijsfb"}]
    };
    socket = SocketIOClient(this.state.endpoint);
  }

  createSocket = room => {
    socket.emit("create", room);
  };

  roomObjects() {
    var { rooms } = this.state;
    return rooms.map((room, index) => (
      <Col md={4} xs={6}>
        <Card>
          <Card.Body>
            <Card.Title><Image src="favicon.ico" roundedCircle /></Card.Title>
            <Card.Title>{room.name}</Card.Title>
          </Card.Body>
          <Button variant="primary">Join</Button>
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <div>

        <Form>
          <h1>Create Room</h1>
          <FormControl placeholder="Create Room" />
          <Button style={buttonstyle}>Create</Button>
        </Form>
        <Row>
          {this.roomObjects()}
        </Row>
      </div>
    );
  }
}

export default Home;
