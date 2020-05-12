import React from "react";
import './Style/LogIn.scss';

const LogIn = () => {
  return (
    <div className='log__in'>
        <div className='log__in__mail'>
          <label>E-mail</label>
          <input type='mail' />
        </div>

        <div className='log__in__password'>
          <label>Password</label>
          <input type='password' />
        </div>
        <div className='log__in__button'>
          <input type='button' value='LogIn' />
        </div>
    </div>
  );
};

export default LogIn;
