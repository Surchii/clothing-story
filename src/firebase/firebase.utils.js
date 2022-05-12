import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
   apiKey: "AIzaSyAlGzEFpA6sXB1t7cxVvkzIKBUDG6dWciE",
   authDomain: "cloth-db-1d6a3.firebaseapp.com",
   projectId: "cloth-db-1d6a3",
   storageBucket: "cloth-db-1d6a3.appspot.com",
   messagingSenderId: "887997556906",
   appId: "1:887997556906:web:20164d21a1f7621c8a48d3",
   measurementId: "G-VWTGH0S3J0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapChot = await userRef.get();

   if (!snapChot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })

      } catch (error) {
         console.log('error creating urse', error.message);

      }
   }
   return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
