import React from "react";
import './Style/Main.scss';
import {Route} from 'react-router-dom';
import LogIn from '../Authorization/LogIn/LogIn';
import SignUp from '../Authorization/SignUp/SignUp';
import CallbackTest from '../CallbackTest';

const Main = (props) => {
  return (
    <main className='main'>
      <div className='main__container container'>
          <Route render={() => <LogIn />} exact path='/LogIn' />
          <Route render={() => <SignUp />} exact path='/SignUp' />
          <Route render={ () => <CallbackTest Page={props.CallbackTestPage} AddTestElement={props.AddTestElement} UpdateTestElement={props.UpdateTestElement} /> } exact path='/CallbackTest'></Route>
      </div>
    </main>
  );
};

export default Main;
