import { initializeApp } from "firebase/app";
import "firebase/firestore";
// import "firebase/storage";
import "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import _ from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyCcT3s5DqUSVk5sWJ4wBaIBRHwvHwynd24",
  authDomain: "myproject-f8190.firebaseapp.com",
  databaseURL:
    "https://myproject-f8190-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myproject-f8190",
  storageBucket: "myproject-f8190.appspot.com",
  messagingSenderId: "996228281255",
  appId: "1:996228281255:web:a0e67acd4ac74b6155bc82",
  measurementId: "G-QVDF3NLEMD",
};

const app = initializeApp(firebaseConfig);
// const db = firebase.firestore(app);
// export const auth = auth();
const auth = getAuth(app);

// signIn
export const signIn = (user) => {
  const { email, password } = user;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("[userCredential]: ", userCredential.user);
      return user;
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  
  return email
};

// logout
export const logout = () => {
  auth.signOut().then(() => {
    window.localStorage.clear();
    window.location.reload();
  });
};

// sign up
export const signUp = (user) => {
  const { email, password, firstName, lastName } = user;
  const displayName = firstName.concat(" ", lastName);

  const actionCodeSettings = {
    // TODO update domain to prod domain
    // TODO URL must be in the authorized domains list in the Firebase Console.
    url: window.location.origin + "/host-email-link",
    // This must be true.
    handleCodeInApp: true,
  };

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then(() => {
          console.log("Profile updated!");

          sendEmailVerification(user, actionCodeSettings).then(() => {
            // Email verification sent!
            // ...
            return user;
          });
          // return user;
        })
        .catch((error) => {
          console.log(error);
        });
      // return user;
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert(
            "Thrown if there already exists an account with the given email address"
          );
        case "auth/invalid-email":
          alert("Thrown if the email address is not valid");
        case "auth/operation-not-allowed":
          alert(
            "Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab"
          );
        case "auth/weak-password":
          alert("Thrown if the password is not strong enough");
        default:
          return null;
      }
    });
  // });
  // return true;
};

// verify token
export const getJWT = async () => {
  if (!isLoggedIn()) return null;
  const token = await auth.currentUser.getIdToken();
  return token;
};

// verify session user
export const isLoggedIn = () => {
  console.log(auth.currentUser)
  return !!auth.currentUser;
};

// get user details
export const getCurrentUser = () => {
  return !!auth.currentUser ? auth.currentUser : null;
};

// const actionCodeSettings = {
//   // TODO update domain to prod domain
//   // TODO URL must be in the authorized domains list in the Firebase Console.
//   url: window.location.origin + "/login-email-link",
//   // This must be true.
//   handleCodeInApp: true,
// };

// auth
// .sendSignInLinkToEmail(email, actionCodeSettings)
// .then(() => {
//   window.localStorage.removeItem("emailForSignIn");
//   window.localStorage.setItem("emailForSignIn", email);
//   alert("Login link has been sent to you email");
// })
// .catch((error) => {
//   console.error(error);
// });
