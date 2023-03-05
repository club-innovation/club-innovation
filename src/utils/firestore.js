import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, query, where, doc, updateDoc } from "firebase/firestore";

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


export async function addEmail(date, email, newsletter) {
  await addDoc(collection(db, 'Emails'), { Date: date, Email: email, Newsletter: newsletter });
}

//This function retrieves the ID of a document in the "Emails" collection that corresponds to a given email address
export async function getDocIdByEmail(email) {
  // Get a reference to the "Emails" collection in Firestore
  const usersRef = collection(db, "Emails");

  // Create a query to search for documents where the "Email" field matches the specified email address
  const userQuery = query(usersRef, where("Email", "==", email));
  try {
  // Get a query snapshot of the documents that match the query.
    const querySnapshot = await getDocs(userQuery);

  // Initialize an array to store the document IDs
    const DocIds = []; 

  // Return the ID of the first document in the DocIds array, or null if there are no matches.
    if (querySnapshot.size != 0) { 
      return querySnapshot.docs[0].id;
    } else { 
      return null;
    }

  } catch (error) {
    console.error(error);
    return null;
  }

}


// This function updates a newsletter value (true or false) for a given email in a Firestore collection.
export async function updateNewsLetter(docId, email, newsletter) {
  try {
    // Get a reference to the document with the given ID in the "Emails" collection.
    const EmailsRef = doc(db, "Emails", docId);

    // Update the document's "Newsletter" field with the new value (true or false) only if it has changed.
    await updateDoc(EmailsRef, { Newsletter: newsletter }, { merge: true });

  } catch (error) {
    console.error(error);
  }
}

