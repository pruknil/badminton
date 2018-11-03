import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBsepm7V1IN4P_MAfjqaNzmb1UfYfLwTF4",
    authDomain: "guanbad-c73e6.firebaseapp.com",
    databaseURL: "https://guanbad-c73e6.firebaseio.com",
    projectId: "guanbad-c73e6",
    storageBucket: "guanbad-c73e6.appspot.com",
    messagingSenderId: "201886198335"
  };
let app = Firebase.initializeApp(config);
export const firebase = app;