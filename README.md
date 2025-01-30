# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

    <!-- /// I JUST USED FIREBASE AUTHENTICATION TO CREATE USER AND LOGIN USER

    // dispatch(loginInitialized());
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   const { uid } = userCredential.user; ///// firebase will take care of uid guyz
    //   dispatch(
    //     loginSuccess({ uid: uid, name: name, email: email, photo: photo })
    //   );
    // } catch (error) {
    //   if (error.code === 'auth/email-already-in-use') {
    //     try {
    //       const userCredential = await signInWithEmailAndPassword(
    //         auth,
    //         email,
    //         password
    //       );
    //       const { uid } = userCredential.user; ///// firebase will take care of uid guyz
    //       dispatch(
    //         loginSuccess({ uid: uid, name: name, email: email, photo: photo })
    //       );
    //     } catch (error) {
    //       if (error.code === 'auth/invalid-credential') {
    //         dispatch(loginFailure('Ivalid Credentials'));
    //       }
    //     }
    //   } else {
    //     dispatch(loginFailure(error.message));
    //   }
    // } -->