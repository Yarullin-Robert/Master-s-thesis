import React from "react";
import MenuItem from "./Parts/MenuItem";
import propTypes from "prop-types";
import './Style/header.scss'

const Header = (props) => {
  return (
    <header className='header' id='header'>
      <a className='header__brand' href='#'>
        Financial management
      </a>
      <nav className='header__navbar navbar'>
        {props.Items.map((Item) => {
          return <MenuItem Item={Item} key={Item.id} />;
        })}
      </nav>
    </header>
  );
};

Header.propTypes = {
  Items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Header;
