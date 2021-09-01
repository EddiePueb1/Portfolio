import styled from 'styled-components';


export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 5%;
  justify-content: flex-start;
  color: var(--overshadow);
  font-family: 'Raleway', sans-serif;
  // border: solid;
`;

export const ProjectName = styled.h1`
  font-family: 'Syncopate', sans-serif;
  
`;
export const Type = styled.h3`
  font-family: 'Syncopate', sans-serif;
`;
export const Description = styled.p`
  font-size: 3rem;
  margin: 40px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px;
  // border: solid;
`;

export const ProjectImg = styled.img`
  width: 60vh;
  border-radius: 25px 25px 75px 75px;
  padding: 0px 0px 20px;
`;
