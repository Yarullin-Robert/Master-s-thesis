import React from "react";
import "./Style/SignUp.scss";

const SignUp = () => {
  return (
    <div className='sign__up'>
        <div className='sign__up__mail'>
          <label>Your e-mail</label>
          <input
            type='mail'
            placeholder='enter your e-mail here'
          />
        </div>
        <div className='sign__up__name'>
          <label>Your name</label>
          <input
            type='text'
            placeholder='enter your First and Last name here'
          />
        </div>
        <div className='sign__up__password'>
          <label>Your password</label>
          <input
            type='password'
            placeholder='enter your password here'
          />
        </div>
        <div className='sign__up__acception'>
          <div>
            <input id='sign__up__acception' type='checkbox' />
            <label htmlFor='sign__up__acception'>
              You`re accept our term of privacy
            </label>
          </div>
        </div>
        <div className='sign__up__button'>
          <input type='button' value='Registration' />>
        </div>
    </div>
  );
};

export default SignUp;
