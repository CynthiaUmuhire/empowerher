import { FirebaseApp, initializeApp } from "firebase/app";
import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

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

class ApiClient {
  app: FirebaseApp;
  db: Firestore;
  customCollection: CollectionReference;
  constructor(public collectionName: string) {
    this.collectionName = collectionName;
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.customCollection = collection(this.db, this.collectionName);
  }

  async getDatas() {
    const querySnapshot = await getDocs(this.customCollection); 
    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return data;
  }

  async getData(id: string) {
    const stories = await this.getDatas();
    const story = stories.find((story) => story.id == id);
    return story;
  }

  async addData(story: { [key: string]: string }) {
    const querySnapshot = await addDoc(
      collection(this.db, this.collectionName),
      story
    );
    return querySnapshot;
  }

  async deleteData(id: string) {
    const querySnapshot = await deleteDoc(
      doc(this.db, this.collectionName, id)
    );
    return querySnapshot;
  }
}

export default function (collection: string) {
  return new ApiClient(collection);
}
