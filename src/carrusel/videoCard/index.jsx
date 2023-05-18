import React from 'react';

const VideoCard = ({ video }) => {
  const handleVideoClick = () => {
    window.location.href = video.url;
  };

  return (
    <div onClick={handleVideoClick}>
      <h3>{video.title}</h3>
      <img src={video.imgVideo} alt={video.title} />
    </div>
  );
}

export default VideoCard;
