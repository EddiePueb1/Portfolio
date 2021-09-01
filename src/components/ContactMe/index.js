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
            <ContactImg src="https://image.flaticon.com/icons/png/512/174/174857.png" />
          </Link>
          <Link to="/Github">
            <ContactImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
          </Link>
          <Link to="/p">
            <ContactImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
          </Link>
          <Link to="/Reg">
            <ContactImg src="http://pngimg.com/uploads/twitch/small/twitch_PNG48.png" />
          </Link>
        </ContentWrap>
          
      </PageWrap>
    </>
  )
}

export default ContacMe;
