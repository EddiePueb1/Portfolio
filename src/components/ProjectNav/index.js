import React from 'react'
import { Link } from 'react-scroll'

import {
  NavLinkContainer,
  TopContainer,
  TitleContainer,
  Title
} from './ProjectElements'
import { InfoContainer } from '../GlobalElements'
import { BaseButton } from '../BaseButton'

const ProjectNav = ({ id, title }) => {
  return (
    <>
      <TopContainer id={id}>
        <TitleContainer>
           <Title>{title}</Title>
        </TitleContainer>
        <NavLinkContainer>
          <BaseButton to="project1" smooth={true} duration={1000} spy={true} exact={true}>Movie Madness</BaseButton>
          <BaseButton to="project2" smooth={true} duration={1000} spy={true} exact={true}>Rioz</BaseButton>
          <BaseButton to="project3" smooth={true} duration={1000} spy={true} exact={true}>Tik-Tak-Toe</BaseButton>
          <BaseButton to="project4" smooth={true} duration={1000} spy={true} exact={true}>Python Challenges</BaseButton>
          {/* <BaseButton to="project5" smooth={true} duration={1000} spy={true} exact={true}>RPG Project</BaseButton> */}
        </NavLinkContainer>
      </TopContainer>
    </>
  )
}

export default ProjectNav;
