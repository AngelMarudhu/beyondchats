# React + Vite 

## Project setup

# OTP based web scrapping react based application

This project is react based OTP authentication page the integrates firebase authentication firebase allows to login using email and password or your personal google account we've included otp based authentication as well ensure genuine email id and password are used to login.

## Features && Tech Stack

### 1. OTP based authentication
### 2. Firebase authentication
### 3. Google authentication
### 4. React based application
### 5. Redux for state management
### 6. React hooks
### 7. React router dom
### 8. Custom hooks for firebase and manual authentication
### 9. React toastify for notification
### 10.React icons
### 11.handled mobile responsiveness
### 12.User friendly UX experience with help of framer motion

## Live Demo 
Live Demo: [Live Demo](https://beyond-chats-assessment.netlify.app/)

## Installation
1. Clone the repository (https://github.com/AngelMarudhu/beyondchats.git)
2. cd beyondchats folder (cd beyondchats)
3. Install the dependencies (npm install)
4. Run the application (npm run dev)

# We can use this feature later it's a firebase login feature 

1. Just import create and signin module from firebase/auth 

const handleManualAuth = async () => {
      dispatch(loginInitialized());
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user; // firebase will take care of uid guyz
    dispatch(
      loginSuccess({ uid: uid, name: name, email: email, photo: photo })
    );
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { uid } = userCredential.user; // firebase will take care of uid guyz
        dispatch(
          loginSuccess({ uid: uid, name: name, email: email, photo: photo })
        );
      } catch (error) {
        if (error.code === 'auth/invalid-credential') {
          dispatch(loginFailure('Ivalid Credentials'));
        }
      }
    } else {
      dispatch(loginFailure(error.message));
    }
  }
}