import React from "react";
import SocialLink from "./Parts/SocialLink";
import propTypes from "prop-types";
import './Style/Footer.scss'

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__container__socials'>
          {props.Items.map((Item) => {
            return <SocialLink Item={Item} key={Item.id} />;
          })}
        </div>
        <div className='footer__container__credits'>
          <p>Authors: Robert Yarullin</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  Items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Footer;
