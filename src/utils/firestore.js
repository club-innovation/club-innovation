// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getFirestore } from 'firebase/firestore'; 

import { collection, addDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCeCOYMhUBuoDt1T2LmZGdC6HIajnAcBVg",
//     authDomain: "clubinnovation-web.firebaseapp.com",
//     projectId: "clubinnovation-web",
//     storageBucket: "clubinnovation-web.appspot.com",
//     messagingSenderId: "227997319479",
//     appId: "1:227997319479:web:9f43d08c815e14cb935ab2",
//     measurementId: "G-6B6H7F475Q"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCeCOYMhUBuoDt1T2LmZGdC6HIajnAcBVg",
    authDomain: "clubinnovation-web.firebaseapp.com",
    projectId: "clubinnovation-web",
    storageBucket: "clubinnovation-web.appspot.com",
    messagingSenderId: "227997319479",
    appId: "1:227997319479:web:9f43d08c815e14cb935ab2",
    measurementId: "G-6B6H7F475Q"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 
 
 export const addEmail = async (date,email) => {
    await addDoc(collection(db, 'Emails'), {Date:date,Email:email});
};