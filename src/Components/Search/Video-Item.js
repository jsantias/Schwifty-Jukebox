import React from "react";

import { Row, Col } from "react-bootstrap";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className=" video-item item">
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <img
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            width="120"
            height="60"
          />
        </Col>
        <Col>
          <div className="content">
            <div className="header ">{video.snippet.title}</div>
          </div>
        </Col>
        <Col>{/* INSERT ADD SONG BUTTON HERE */}</Col>
      </Row>
    </div>
  );
};
export default VideoItem;
