import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
 import { actionTypes } from './reducer';

import { useStateValue } from './StateProvider';
 



function Login() {
const[state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          });
       
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
     
        <img
          src="./images/desc.png"
          alt=""
        />
    
      <div className="login__des">
        <img
          src="./images/log.jpg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;