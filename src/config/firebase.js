import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAtWzkCCVxLrXOnfybSZRA_n43Ac2b_89M",
  authDomain: "calmai-b0844.firebaseapp.com",
  projectId: "calmai-b0844",
  storageBucket: "calmai-b0844.appspot.com",
  messagingSenderId: "831108524658",
  appId: "1:831108524658:web:ad9c13f49c9f85975cb0eb",
  measurementId: "G-LFK94SK0EN"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  export default firebase