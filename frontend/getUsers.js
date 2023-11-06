import { initializeApp } from "firebase/app";
import { collection, getFirestore,getDocs } from "firebase/firestore/lite"

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_kcLdDPgcGFhSl88fSl_d2pfHrVUigHs",
    authDomain: "empowerher-42d31.firebaseapp.com",
    projectId: "empowerher-42d31",
    storageBucket: "empowerher-42d31.appspot.com",
    messagingSenderId: "144168931728",
    appId: "1:144168931728:web:2706746470a4159051e315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const userCollection = collection(db, "my users")

export async function getUsers() {
    try {
        const querySnapshot = await getDocs(userCollection);

        // Extract data from the query snapshot
        const users = querySnapshot.docs.map((doc) => doc.data());
        console.log('Fetched users:', users);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Example usage of getUsers
