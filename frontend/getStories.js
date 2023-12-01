import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore/lite";
// import {getAuth} from "firebase/auth"

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_kcLdDPgcGFhSl88fSl_d2pfHrVUigHs",
  authDomain: "empowerher-42d31.firebaseapp.com",
  projectId: "empowerher-42d31",
  storageBucket: "empowerher-42d31.appspot.com",
  messagingSenderId: "144168931728",
  appId: "1:144168931728:web:2706746470a4159051e315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "my users");

export async function getUsers(id) {
  try {
    if (!id) {
      // Fetch all users
      const querySnapshot = await getDocs(usersCollection);
      const users = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return users;
    } else {
      const userDocRef = doc(usersCollection, id);
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.exists() ? userDoc.data() : null;

      if (userData) {
        // Combine user data with ID
        userData.id = userDoc.id;
      }

      return userData;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

// export const auth = getAuth(app)
