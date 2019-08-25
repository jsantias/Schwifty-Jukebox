import React, { Component } from "react";
import { Form, FormControl, Button, Col , Image, Card, Row} from "react-bootstrap";
import SocketIOClient from "socket.io-client";
import uuid from 'uuid';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css'

var socket;
const buttonstyle = {
    background: '#2c003f'
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:7000",
      rooms: [{id:"1243", name: "iajsfb"}, {id:"92183", name:"ijsfb"}, {id:"1243", name: "iajsfb"}, {id:"92183", name:"ijsfb"}],
      create_room_name: '',
    };
    socket = SocketIOClient(this.state.endpoint);
  }

  handleChange = event => {
    this.setState({create_room_name: event.target.value});
  }

  createSocket = event => {
    console.log(this.state.create_room_name);
    //var socket_name = event.currentTarget.getAttribute('value');
    var room = {id: this.createRoomId(), name: "create" };
    socket.emit("create_room", room);
  };

  joinSocket = event => {
    console.log(event.currentTarget.getAttribute('value'));
    var socket_name = event.currentTarget.getAttribute('value');
    var room = {id: this.createRoomId(), name: socket_name };
    socket.emit("join_room", room);
  };

  createRoomId() {
    const id = uuid.v4();
    return id;
  }

  roomObjects() {
    var { rooms } = this.state;
    return rooms.map((room, index) => (
      <Col md={3} xs={6}>
        <Card style={{ height: '18rem' }}>
          <Form>
            <Card.Body>
              <Card.Title><Image src="favicon.ico" roundedCircle width="100%" height= "100%"/></Card.Title>
              <Card.Text>{room.name}</Card.Text>
              <LinkContainer to="/lobby">
                <Button variant="primary" type="button" value={room.name} onClick={this.joinSocket.bind(this)}>Join Room</Button>
              </LinkContainer>
            </Card.Body>
          </Form>
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Image src="favicon.ico" roundedCircle  />
        <Form onSubmit={this.createSocket.bind(this)}>
          <h1>Create Room</h1>
          <FormControl value={this.state.create_room_name} onChange={this.handleChange.bind(this)} name="create_room_name" placeholder="Create Room" />
          <LinkContainer to="/lobby">
            <Button style={buttonstyle} type="submit">Create</Button>
          </LinkContainer>
        </Form>
        <Row>
          {this.roomObjects()}
        </Row>
      </div>
    );
  }
}

export default Home;
