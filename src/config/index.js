import * as firebase from "firebase/app";
import 'firebase/storage'

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

export const Firebase = firebase.initializeApp(firebaseConfig);
export const Firestore = firebase.firestore(Firebase);
const Storage = firebase.storage();

export {
	Storage,
	firebase as default
}