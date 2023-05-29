import React from 'react';
import Slider from 'react-slick';
import VideoCard from '../videoCard';
import { useVideoContext } from '../../Context';
import styled from 'styled-components';

const VideoSlider = () => {

  const MyH3 = styled.h3`
    height: 100px;
    font-size: 1.8em;
    color: #000;
    width: 100%;
    text-align: center;
  `

  const videosByCategory = useVideoContext();
  const categories = Object.entries(videosByCategory);
const valorIndex0 = categories[0][1];
const cat = Object.entries(valorIndex0);
  const settings = {
    dots: true,
    infinite: true,
    width: 600,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    console.log('videos',cat),
    <div>
      {cat.length > 1  && cat.map(([categoryName, videos]) => (
  <div key={categoryName}>
    <h2>{categoryName}</h2>
    {videos.length > 0 ? (
      <Slider {...settings}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} imgVideo={video.imgVideo} />
        ))}
      </Slider>
    ) : (
      <MyH3>No hay videos</MyH3>
    )}
  </div>
)) }


    </div>
  );
};

export default VideoSlider;

