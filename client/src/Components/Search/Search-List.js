import React from "react";
import VideoItem from "./Video-Item";

const SearchList = ({ videos, handleVideoSelect }) => {
  if (videos === undefined) {
    return <div />;
  }

  const renderedVideos = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div>{renderedVideos}</div>;
};
export default SearchList;
