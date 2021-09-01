import styled from 'styled-components';
import { Link } from 'react-scroll';

export const BaseButton = styled(Link)`
  display: flex;
  color: var(--accentColor);
  justify-content: center;
  border: none;
  outline: none;
  padding: 40px;
  border-radius: 50px;
  padding: 10px;
  background: var(--overshadow);
  cursor: pointer;
  transition: 1s ease;


&:hover{
  color: var(--overshadow);
  background: var(--accentColor);

  
}

`;