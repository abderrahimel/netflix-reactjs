import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBY0-y0tbsLbSpe1lYgbFR6aJ6uIXwRl_I",
  authDomain: "netflix-clone-82eeb.firebaseapp.com",
  projectId: "netflix-clone-82eeb",
  storageBucket: "netflix-clone-82eeb.appspot.com",
  messagingSenderId: "1092247712518",
  appId: "1:1092247712518:web:f61eb217c290701bd36487"
};
const firsebaseApp = firebase.initializeApp(firebaseConfig)
const db = firsebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db