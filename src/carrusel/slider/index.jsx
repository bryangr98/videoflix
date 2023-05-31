import React, { useContext } from 'react';
import Slider from 'react-slick';
import VideoCard from '../videoCard';
import { useVideoContext } from '../../Context';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext';


const VideoSlider = () => {
  const {theme,MyH2,MyH3}= useContext(ThemeContext);

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
      { cat.map(([categoryName, videos]) => (

  <div key={categoryName}>
    <MyH2 theme={theme}>{categoryName}</MyH2>
    {videos.length > 1 ? (
      <Slider {...settings}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} imgVideo={video.imgVideo} />
        ))}
      </Slider>
    ) : (
      <></>
    )}
  </div>
)) }


    </div>
  );
};

export default VideoSlider;

