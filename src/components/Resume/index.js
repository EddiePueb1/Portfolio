import React from 'react'
import { InfoContainer } from '../GlobalElements'
import ResumeFile from '../../Images/updatedRes.png' 

import { ResumeContainer, RImg, RTitle } from './RsumeElements';

const Resume = () => {
  return (
    <>
      <InfoContainer id='resume'>
      <RTitle>Resume</RTitle>
        <ResumeContainer>
          <RImg src={ResumeFile} alt="resume"/>
        </ResumeContainer>
      </InfoContainer>
    </>
  )
}

export default Resume;
