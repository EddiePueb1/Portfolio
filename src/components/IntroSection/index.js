import React from 'react'
import Video from '../../videos/v1.mp4'
import Profile from '../../Images/profileImage.JPG'
import {
  IntroContainer,
  BdropBg,
  VideoBg,
  HomeContainer,
  Img,
  Headline,
  Subtext,
  TextContainer,
  SvgDiv,
  PathComp,
  BtnWrap,
  Button


} from './IntroElements';






const Intro = ({ headline, description, }) => {
  return (
    <IntroContainer id="home">
      <BdropBg>
        <VideoBg autoPlay loop muted src={Video} type=" video/mp4" />
      </BdropBg>
      <HomeContainer>
        <SvgDiv>
          <defs>
            <clipPath id="myClip">
              <PathComp 
              fill="#FF0066" 
              d="M48.1,-8.7C57.3,12.9,56.4,44.6,40.7,56C25.1,67.3,-5.3,58.3,-26.6,41.6C-47.9,25,-60,0.8,-54.1,-16.3C-48.1,-33.3,-24.1,-43.1,-2.3,-42.4C19.4,-41.6,38.8,-30.3,48.1,-8.7Z" 
              transform="scale(1.75),translate(60 60)" />
            </clipPath>
          </defs>
        </SvgDiv>
        <Img src={Profile} alt="profile_image" />
        <TextContainer>
          <Headline>{ headline }</Headline>
          <Subtext>{ description }</Subtext>
          
        </TextContainer>
      </HomeContainer>
        
    </IntroContainer>
  )
}

export default Intro
