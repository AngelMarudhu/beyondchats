import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);


//  < !-- /// I JUST USED FIREBASE AUTHENTICATION TO CREATE USER AND LOGIN USER

// // dispatch(loginInitialized());
// // try {
// //   const userCredential = await createUserWithEmailAndPassword(
// //     auth,
// //     email,
// //     password
// //   );
// //   const { uid } = userCredential.user; ///// firebase will take care of uid guyz
// //   dispatch(
// //     loginSuccess({ uid: uid, name: name, email: email, photo: photo })
// //   );
// // } catch (error) {
// //   if (error.code === 'auth/email-already-in-use') {
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       const { uid } = userCredential.user; ///// firebase will take care of uid guyz
// //       dispatch(
// //         loginSuccess({ uid: uid, name: name, email: email, photo: photo })
// //       );
// //     } catch (error) {
// //       if (error.code === 'auth/invalid-credential') {
// //         dispatch(loginFailure('Ivalid Credentials'));
// //       }
// //     }
// //   } else {
// //     dispatch(loginFailure(error.message));
// //   }
// // } -->