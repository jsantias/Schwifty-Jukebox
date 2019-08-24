import React, { Component } from "react";
import { Form, FormControl, Button, Table , Image, Card} from "react-bootstrap";
import SocketIOClient from "socket.io-client";
var socket;
const buttonstyle = {
    background: '#2c003f;'  
}

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
          <Button style={buttonstyle}>Create</Button>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Available Rooms</th>
            </tr>
          </thead>
          <tbody>

            <ul><li>
            <Card style={{padding: '1%'}}>
  <Card.Body>
    <Card.Title><Image src="favicon.ico" roundedCircle /></Card.Title>
    <Card.Title> Room 1 </Card.Title>
    
  </Card.Body>
  <Button variant="primary">Join</Button> <h6></h6>
</Card></li></ul>
<td>
                <Button>Join Room</Button>
              </td>
              
            
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
