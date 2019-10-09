import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQmkp4zYxQxbG871KeYAaDXHW73M7_P6c",
  authDomain: "auctionid-7e457.firebaseapp.com",
  databaseURL: "https://auctionid-7e457.firebaseio.com",
  projectId: "auctionid-7e457",
  storageBucket: "auctionid-7e457.appspot.com",
  messagingSenderId: "116312265922",
  appId: "1:116312265922:web:73ee4d07da3948d76ed75b",
  measurementId: "G-KYXHT9NHKN"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;