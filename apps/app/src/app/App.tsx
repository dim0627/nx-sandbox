/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
import { UsersService } from '../../../../libs/api-client/services/UsersService';
import { OpenAPI } from 'libs/api-client/core/OpenAPI';

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

OpenAPI.BASE = "http://localhost:3333"

const App = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const res = await UsersService.create({
      requestBody: {
        email: data.email,
        password: data.password
      }
    })
    console.log(res)
    // const res = await signInWithEmailAndPassword(auth, "dim0627@gmail.com", "test1111")
    // console.log("submit", res)
    // const token = await res.user.getIdToken()
    // console.log("token", token)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Text>{auth.currentUser ? auth.currentUser.email : "no logged in"}</Text>
        <Button title="submit" onPress={handleSubmit(onSubmit)}>submit</Button>
      </SafeAreaView>
    </>
  );
};

export default App;
