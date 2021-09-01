import React, { useEffect } from 'react';
import Aos from 'aos';
import { InfoContainer } from '../GlobalElements';
import {
  ContentDiv,
  DescriptionDiv,
  Title,
  Name,
  Overview,
  SkillSection,
  Skills,
  ImgDiv,
  AbtImg,
  BtnWrap
} from './AMElements';
import Rhodes from '../../Images/Rhodes.png';
import { LinkButton } from '../LinkButton';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiPython, DiJavascript1, DiReact } from 'react-icons/di'



const AboutMe = ({ 
  id,
  title,
  myName,
  lightBg,
  overview, 
  img, 
  alt, 
  buttonText, 
  MySkills, 
  dark, 
  light
 }) => {


  return (
    <>
      <InfoContainer Wbg={lightBg} id={id}>
        <ContentDiv>
          <DescriptionDiv>
            <Title>
              {title}
            </Title>
            <Name>{myName}</Name>
            <Overview>
              {overview}
            </Overview>
            <Title>
              {MySkills}
            </Title>
            <SkillSection>
              <Skills><AiFillHtml5 /> HTML </Skills>
              <Skills><DiCss3 /> CSS </Skills>
              <Skills><DiPython />Python </Skills>
              <Skills><DiJavascript1 /> JavaScript</Skills>
              <Skills><DiReact /> React JS</Skills>
            </SkillSection>
          </DescriptionDiv>
          <ImgDiv>
            <AbtImg src={Rhodes} alt={alt} />
            <BtnWrap>
              <LinkButton to="/contact" dark={dark} light={light}>{buttonText}</LinkButton>
            </BtnWrap>
          </ImgDiv>
        </ContentDiv>
      </InfoContainer>
    </>
  )
}

export default AboutMe;
