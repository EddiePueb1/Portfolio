import React from 'react'
import { InfoContainer } from '../GlobalElements'
import Resume1 from '../../Images/Resume1.png';
import Resume2 from '../../Images/Resume2.png';

import { ResumeContainer, RImg, RTitle } from './RsumeElements';

const Resume = () => {
  return (
    <>
      <InfoContainer id='resume'>
      <RTitle>Resume</RTitle>
        <ResumeContainer>
          <RImg src={Resume1} alt="resume"/>
          <RImg src={Resume2} alt="resume"/>
        </ResumeContainer>
      </InfoContainer>
    </>
  )
}

export default Resume;
