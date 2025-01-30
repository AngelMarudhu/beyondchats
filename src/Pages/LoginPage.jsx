import React, { useEffect, useState } from 'react';
import '../Css/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle } from 'react-icons/fa';
import { authProvider, auth } from '../Utils/Firebase';
import { signInWithPopup } from 'firebase/auth';
import {
  loginInitialized,
  loginSuccess,
  loginFailure,
} from '../Redux/LoginSlice';
import { useNavigate } from 'react-router';
import OtpAuthentication from '../Components/OtpAuthentication';

const LoginPage = () => {
  const [showOtp, setShowOtp] = useState(false);
  //// set random uid for now
  const [userDetails, setUserDetails] = useState({
    uid: Math.random().toString(36).substring(2, 10),
    name: '',
    email: '',
    password: '',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);

  const handleGoogleAuth = async () => {
    dispatch(loginInitialized());
    try {
      const userCredential = await signInWithPopup(auth, authProvider);
      const { uid, displayName, email, photoURL } = userCredential.user;
      dispatch(
        loginSuccess({
          uid: uid,
          name: displayName,
          email: email,
          photo: photoURL,
        })
      );
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    let { name, email, password, uid, photo } = userDetails;
    if (name === '' || email === '' || password === '') {
      alert('Please fill all the fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    setShowOtp(true)
  };
  // console.log(error)
  return (
    <div className="login-page">
      <div className="login-header">
        <h2>Beyond Chat</h2>
        <div
          onClick={handleGoogleAuth}
          className="commonButton"
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <button className="commonButton" disabled={showOtp}>Login With Google</button>
          <FaGoogle />
        </div>
      </div>
      {
        showOtp ? (<OtpAuthentication userDetails={userDetails} />) : (
          <div className="login-container">
            <div className="login-form">
              {isLoading ? <h1>Loading...</h1> : <h1>Login</h1>
              }
              <form action="" onSubmit={handleManualSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={userDetails.name}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={userDetails.email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  value={userDetails.password}
                />
                <button className="commonButton" type="submit">
                  Login
                </button>
              </form>
              {
                error && (
                  <p
                    style={{
                      color: 'yellow',
                      fontSize: '20px',
                      marginTop: '20px',
                      textAlign: 'left',
                    }}
                  >
                    {error}
                  </p>
                )
              }
            </div >
          </div >
        )
      }
    </div>
  );
};

export default LoginPage;
