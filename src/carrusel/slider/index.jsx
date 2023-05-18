import React from 'react';
import Slider from 'react-slick';
import VideoCard from '../videoCard';

const VideoSlider = ({videos}) => {
  const settings = {
    dots: true,
    infinite: true,
    width:600,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };



  return (
    <div>
      <h2>Slider</h2>
      <Slider {...settings}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} imgVideo={video.imgVideo} />
        ))}
      </Slider>
    </div>
  );
}



export default VideoSlider;