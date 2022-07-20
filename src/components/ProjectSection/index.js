import React from 'react'
import { Button } from 'react-scroll';
import { InfoContainer } from '../GlobalElements'
import {
  InfoWrapper,
  ProjectName,
  Type,
  Description,
  ImgContainer,
  ProjectImg,
  BtnWrapper,

} from './InfoElements'
import { Data } from './Data.js';
import { FaBars } from 'react-icons/fa';
// import Rioz from '../../Images/Rioz.png';
import { LinkButton } from '../LinkButton';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const InfoSection = ({ 
  id,
  lightBg, 
  name, 
  type, 
  description, 
  url, 
  alt,
  image 
}) => {
  return (
    <>
      <InfoContainer Wbg={lightBg} id={id} >
        <InfoWrapper>
          <ProjectName>
            {name}
          </ProjectName>
          <Type>{type}</Type>
          <hr></hr>
          <Description>
            {description}
          </Description>
          <ImgContainer>
            <ProjectImg src={image} alt={alt}/>
            <LinkButton to={url}> Visit site <BsBoxArrowInUpRight /></LinkButton>
          </ImgContainer>


          
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
