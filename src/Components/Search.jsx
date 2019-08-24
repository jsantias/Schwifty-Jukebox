import React, { Component } from "react";
import Searchbar from "./Search/Search-Bar";
import Fetch from "./Search/Fetch";
import SearchList from "./Search/Search-List";
import SocketIOClient from "socket.io-client";

var socket ='';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:7000",
    };

    socket = SocketIOClient(this.state.endpoint);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  handleSubmit = async termFromSearchBar => {
    Fetch(termFromSearchBar, data => {
      const response = data.items;
      this.setState({ videos: response });
    });
  };

  handleVideoSelect = video => {
    socket.emit("add_song", video);
  };

  render() {
    return (
      <div>
        <Searchbar handleFormSubmit={this.handleSubmit} />
        <div>
          <div>
            <SearchList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
