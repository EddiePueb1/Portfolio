import React from 'react'
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectSection';
import AboutMeSect from '../components/AboutMeSect';
import ProjectNav from '../components/ProjectNav';
import Resume from '../components/Resume';
import { Intro } from '../components/IntroSection/Data';
import { AboutMe } from '../components/AboutMeSect/Data';
import { projectOne, projectTwo, projectThree, projectFour } from '../components/ProjectSection/Data';
import { Pnav } from '../components/ProjectNav/Data';




const Home = () => {
  return (
    <>
      <IntroSection {...Intro}/>
      <AboutMeSect {...AboutMe}/>
      <ProjectNav {...Pnav} />
      <ProjectSection {...projectOne} />
      <ProjectSection {...projectTwo} />
      <ProjectSection {...projectThree} />
      <ProjectSection {...projectFour} />
      <Resume />
    </>
  )
}

export default Home;
