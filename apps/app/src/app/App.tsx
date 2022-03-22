/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSU3av4bAysEHWJXqAigJ31O3XDotzXMc",
  authDomain: "sandbox-24c0e.firebaseapp.com",
  projectId: "sandbox-24c0e",
  storageBucket: "sandbox-24c0e.appspot.com",
  messagingSenderId: "646606508735",
  appId: "1:646606508735:web:3535c3c3ca48dc3d0aac0a",
  measurementId: "G-60VQ737P06"
};

initializeApp(firebaseConfig);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>aaa</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
