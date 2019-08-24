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
      <Col md={3} xs={6} >
        <Card style={{ height: '18rem' }}>
          <Card.Body>
            <Card.Title><Image src="favicon.ico" roundedCircle width="100%" height= "100%"/></Card.Title>
            <Card.Text ><h5>{room.name}</h5></Card.Text>
            <Button variant="primary">Join Room</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Image src="favicon.ico"  roundedCircle style={{ height: '5rem' }} />
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
