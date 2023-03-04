import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

const getEmails = async () => {
  const notesSnapshot = await getDocs(collection(db, "Emails"));
  const Emails = notesSnapshot.docs.map((doc) => doc.data());
  return Emails;
};

export const isEmailExists = async (email) => {
  const data = await getEmails();

  for (let i = 0; i < data.length; i++) {
    if (data[i].Email === email) {
      return true;
    }
  }

  return false;
};

export const addEmail = async (date, email, newsletter) => {
  await addDoc(collection(db, 'Emails'), { Date: date, Email: email, Newsletter: newsletter });
};