import { useContext } from "react";
import { useVideoContext, VideoProvider } from "../../Context";

const VideoCard = ({video}) => {
  const videos = useContext(useVideoContext)
  
  
  const handleVideoClick = () => {
    window.open(video.url, "_blank");
  };

  return (
    
    <div onClick={handleVideoClick}>
      <img src={video.imgVideo} alt={video.title} />
      <h3>{video.title}</h3>
    </div>
  );
}

export default VideoCard;
