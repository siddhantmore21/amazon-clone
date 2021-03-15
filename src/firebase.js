import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAOlXxoCrpJUEDyCok2OaUmRmcOOmdnYKE",
    authDomain: "clone-9a911.firebaseapp.com",
    projectId: "clone-9a911",
    storageBucket: "clone-9a911.appspot.com",
    messagingSenderId: "471504206542",
    appId: "1:471504206542:web:1556d57d372506323aee9f"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export {db, auth};