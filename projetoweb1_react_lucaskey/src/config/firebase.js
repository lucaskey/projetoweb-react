import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAj_ytBoc5AEtHrevJWD43xYOuJyqTkfQE",
    authDomain: "my-app-79f89.firebaseapp.com",
    databaseURL: "https://my-app-79f89.firebaseio.com",
    projectId: "my-app-79f89",
    storageBucket: "my-app-79f89.appspot.com",
    messagingSenderId: "7082657120",
    appId: "1:7082657120:web:98499a8cd812d5f831ca05",
    measurementId: "G-17Q083CWRG"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

