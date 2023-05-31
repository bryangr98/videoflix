import { useContext } from "react";
import { useVideoContext, VideoProvider } from "../../Context";
import { ThemeContext } from "../../ThemeContext";
import styled from "styled-components";

const MyH3 = styled.h3`
height: 100px;
font-size: 1.8em;
color:${(props)=>(props.theme === "light" ? '#022027' : '#ffffff')};
width: 100%;
text-align: center;

@media screen and(max-width:708) {
  font-size:12px;
  width: 40px; /* Ajusta el ancho del contenedor según tus necesidades */
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Oculta el contenido excedente */
  text-overflow: ellipsis; 
}
`
const MyImg = styled.img`
width: 320px;
height: 180px;

@media screen and (max-width: 708px) {
  width: 150px;
  height: auto;
}
`

const VideoCard = ({video}) => {
  const videos = useContext(useVideoContext)
  const {theme} = useContext(ThemeContext)
  
  
  const handleVideoClick = () => {
    window.open(video.url, "_blank");
  };

  return (
    
    <div onClick={handleVideoClick}>
      <MyImg src={video.imgVideo} alt={video.title} />
      <MyH3 theme={theme}>{video.title}</MyH3>
    </div>
  );
}

export default VideoCard;
