/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth()
onAuthStateChanged(auth, user => {
  console.log("onAuthStateChanged", user)
})

const App = () => {
  const handleSubmit = async () => {
    const res = await signInWithEmailAndPassword(auth, "dim0627@gmail.com", "test1111")
    console.log("submit", res)
    const token = await res.user.getIdToken()
    console.log("token", token)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{auth.currentUser ? auth.currentUser.email : "no logged in"}</Text>
        <Button title="submit" onPress={handleSubmit}>submit</Button>
      </SafeAreaView>
    </>
  );
};

export default App;
