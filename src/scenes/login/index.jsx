import React, { useState } from 'react';
import {signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const results = await signInWithPopup(auth, provider)
    const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
    }
    setUser(results.user.displayName,)
    localStorage.setItem("auth", JSON.stringify(authInfo))
    navigate("/dashboard")
  };

  return (
    <div className="login-form" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50%"}}>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
          <h2>Login</h2>
          <IconButton onClick={handleGoogleSignIn}><GoogleIcon /></IconButton>
        </div>
      )}
    </div>
  );
};

export default Login;
