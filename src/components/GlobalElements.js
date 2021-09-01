import styled from 'styled-components';



export const InfoContainer = styled.div`
  color: #fff;
  max-width: 100%;
  height: 120vh;
  margin: 0px;
  background: ${({Wbg}) => (Wbg ? 'var(--backgroundColor)' : 'var(--overshadow)')}
  ;
  justify-content: center;
  
  
  @media screen and (max-width: 768px){
    padding: 100px 0; 
  }

`;