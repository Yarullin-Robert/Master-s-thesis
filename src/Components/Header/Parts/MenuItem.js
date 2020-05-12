import React from "react";
import propTypes from "prop-types";
import {NavLink} from 'react-router-dom'

const MenuItem = (props) => {
  return (
    <div className='header__navbar__item'>
      <NavLink
        className={`header_navbar__item__link ${props.Item.class}`}
        to={props.Item.link}
        id={props.Item.id}
        activeClassName='active'
      >
        {props.Item.title}
      </NavLink>
    </div>
  );
};

MenuItem.propTypes = {
  Item: propTypes.object.isRequired,
};

export default MenuItem;
