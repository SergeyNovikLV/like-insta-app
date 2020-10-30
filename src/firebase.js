import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app

  

// import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'

// var firebaseConfig = {
//   apiKey: "AIzaSyA0TT503l_VQIePr2I6kdaTrXwfGB5xtEA",
//   authDomain: "my-photo-app-8cefb.firebaseapp.com",
//   databaseURL: "https://my-photo-app-8cefb.firebaseio.com",
//   projectId: "my-photo-app-8cefb",
//   storageBucket: "my-photo-app-8cefb.appspot.com",
//   messagingSenderId: "82893298916",
//   appId: "1:82893298916:web:4f65d012ea6fc7c2f6e0f1"
// };
// // Initialize Firebase
// const fire = firebase.initializeApp(firebaseConfig);
// export const auth = fire.auth()

// export default fire; 