import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PageWrap,
  ContentWrap,
  ContactImg 
} from './ContactElements'

const ContacMe = () => {
  return (
    <>
      <PageWrap>
        <ContentWrap>
          <Link to="/Linked">
            <ContactImg src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"/>
          </Link>
          <Link to="/Github">
            <ContactImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
          </Link>
        </ContentWrap>
          
      </PageWrap>
    </>
  )
}

export default ContacMe;
