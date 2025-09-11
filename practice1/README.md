ChatGPT said:

That’s a great goal — combining React Native, Firebase Firestore, biometric authentication, and Redux is a solid way to put your skills to the test. Below is a step-by-step roadmap you can follow to build this mini project from scratch. It includes:

Project setup

Firebase Firestore integration

Authentication (email/password)

Biometric authentication

Redux store setup for state persistence

Persisting login state

Testing flow and optional polish

✅ 1. Project Setup

1.1. Initialize Project

npx react-native init AuthBiometricApp
cd AuthBiometricApp


1.2. Install Required Libraries

# Firebase
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore

# Redux & persistence
npm install @reduxjs/toolkit react-redux redux-persist

# Async Storage
npm install @react-native-async-storage/async-storage

# Biometric auth
npm install react-native-biometrics

# Navigation
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# Install pods (iOS only)
cd ios && pod install && cd ..

✅ 2. Firebase Setup

2.1. Firebase Console

Go to Firebase Console

Create a new project

Add iOS and Android apps with bundle ID (e.g. com.yourcompany.authbiometricapp)

Download google-services.json (Android) and GoogleService-Info.plist (iOS)

Enable Email/Password in Authentication > Sign-in method

Enable Cloud Firestore and set rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}


2.2. Add Firebase files

Place google-services.json in android/app/

Place GoogleService-Info.plist in ios/ using Xcode

✅ 3. Setup Authentication (Signup/Login)

3.1. Auth Form (Email/Password)

Create a reusable auth form with:

Email input

Password input

Button to switch between Login / Sign Up

3.2. Firebase Auth Methods

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signUp = async (email, password) => {
  const userCredential = await auth().createUserWithEmailAndPassword(email, password);
  await firestore().collection('users').doc(userCredential.user.uid).set({
    email,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
};

const login = async (email, password) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

✅ 4. Add Redux for Global State Management

4.1. Setup Redux Store

# already installed redux toolkit

// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


4.2. Auth Slice Example

// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;


4.3. Wrap App with Provider & PersistGate

// App.js
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <YourAppNavigator />
  </PersistGate>
</Provider>

✅ 5. Add Biometric Authentication

5.1. Setup react-native-biometrics

import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const checkBiometricSupport = async () => {
  const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  return available && biometryType;
};

const promptBiometric = async () => {
  const result = await rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' });
  return result.success;
};


5.2. Use biometric after successful login/signup

// After login/signup and before navigating to Home:
const success = await promptBiometric();
if (success) {
  dispatch(setUser(userData));
  navigation.navigate('Home');
}

✅ 6. Persist Login State

Since you’re using Redux + redux-persist, the login state will automatically be persisted between app restarts.

To auto-login if user already exists:

// In splash or initial screen
useEffect(() => {
  const checkLogin = async () => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      const bioSuccess = await promptBiometric();
      if (bioSuccess) {
        dispatch(setUser({ uid: currentUser.uid, email: currentUser.email }));
        navigation.replace('Home');
      }
    } else {
      navigation.replace('Login');
    }
  };
  checkLogin();
}, []);

✅ 7. Optional / Polish

Use react-hook-form or Formik for form handling

Add error messages and validations

Show loading indicators

Securely store biometric secrets using secure storage

Add sign-out functionality

Improve UI using react-native-paper or native-base

✅ Final Project Structure (Suggested)
/src
  /screens
    - LoginScreen.js
    - SignupScreen.js
    - HomeScreen.js
    - SplashScreen.js
  /redux
    - store.js
    - authSlice.js
  /utils
    - biometric.js
  /components
    - AuthForm.js
App.js

🔁 Your Learning Milestones
Feature	Skill Tested
Firebase auth & Firestore	Backend integration
Biometric login	Native module & security
Redux + redux-persist	State management & persistence
Navigation	App flow handling
Async Storage	Data persistence

If you want, I can help you scaffold the boilerplate code too. Let me know.