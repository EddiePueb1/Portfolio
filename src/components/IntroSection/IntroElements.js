import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig, fadeIn, fadeInDown, lightSpeedIn, lightSpeedOut} from 'react-animations';
import Icon from '../../Images/img.svg';


const imgLoadIn = keyframes `${fadeInLeftBig}`;
const bgLoadIn = keyframes `${fadeIn}`;
const textLoadIn = keyframes `${fadeInDown}`;
const zoom = keyframes `${lightSpeedIn}`


export const IntroContainer = styled.div`
  background: var(--overshadow) ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 850px;
  position: relative;
  z-index: -1;

`;

export const BdropBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;


`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 50%;
  animation: 2s ease ${bgLoadIn}


`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: row-start;
  justify-content: space-around;
  z-index: 2;

`;


export const SvgDiv = styled.svg`
  width: 120px;
  height: 20px;

  @media screen and (max-width: 768px){
    width: 0px;
    height: 0px;
  }
`;

export const PathComp = styled.path`
  transform: scale(1), tanslate(65 75);
  
`;

export const Img = styled.img`
  width: 20%;
  height: 300px;
  border-radius: 25px;
  clip-path: url(#myClip);
  transform: scale(1.25) ;
  transition: 2s ease;
  animation: 2s ease ${imgLoadIn};


  @media screen and (max-width: 1256px){
    width: 25%;
    transform: scale(1.15);
    height: 20%
    
  }
  @media screen and (max-width: 786px){
    width: 30%;
    transform: scale(1);
    height: 0%
    
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: 2s ease ${textLoadIn};

`;


export const Headline = styled.h1`
  font-family: 'Raleway', sas-serif;
  font-size: 5rem;
  margin: 20px;
  color: #ffff;

  @media screen and (max-width: 768px){
    font-size: 2.5rem;
  }
`;

export const Subtext = styled.p`
  font-family: 'Raleway', sas-serif;
  font-size: 2.5em;
  padding-left: 25px;
  color: #ffff;

  @media screen and (max-width: 768px) {
    font-size: 1rem
  }

`;

// export const BtnWrap = styled.div`
//   background-color: red;
// `;

export const Button = styled.button`
  padding: 20px;
  height: 20%;

`;

