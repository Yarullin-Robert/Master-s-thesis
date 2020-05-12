import React from "react";
import propTypes from "prop-types";

const SocialLink = (props) => {

  const OpenNewPage = (props) =>{
    window.open(props)
  }

  return (
    <a onClick={() => OpenNewPage(props.Item.link)} className='footer__container__socials__link'>
      <svg className={props.Item.class} />
    </a>
  );
};

SocialLink.propTypes = {
  Item: propTypes.object.isRequired,
};

export default SocialLink;
