import firebase from "firebase";
import { ref, onMounted } from "vue";

const config = {
  apiKey: "AIzaSyBMov59Or0so9TswHjpb2vpwSwVCpWC57c",
  authDomain: "vue-crud-5432d.firebaseapp.com",
  projectId: "vue-crud-5432d",
  storageBucket: "vue-crud-5432d.appspot.com",
  messagingSenderId: "60726985321",
  appId: "1:60726985321:web:2c9b3c98d470eb67acd8f8",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const userCollection = db.collection("users");

export const createUser = (user) => {
  return userCollection.add(user);
};
