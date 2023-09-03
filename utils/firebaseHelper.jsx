// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const getFirebaseApp = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAx-hJvF2KjmJGBmjmNMNh4xw0ZJgFshFE",
    authDomain: "whatsapp-c48aa.firebaseapp.com",
    projectId: "whatsapp-c48aa",
    storageBucket: "whatsapp-c48aa.appspot.com",
    messagingSenderId: "945129763648",
    appId: "1:945129763648:web:09113b5c5da0c65fea00a5",
    measurementId: "G-W9DREN0L3C",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};

export const initializeFirebaseAuth = (app) => {
  // Initialize Firebase Authentication with AsyncStorage
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });

  return auth;
};
