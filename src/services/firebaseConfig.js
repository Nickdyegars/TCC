import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCs6MU0calAKkVTl2dKr0d6vULr5bmsj0k",
  authDomain: "eduflex-df1a5.firebaseapp.com",
  projectId: "eduflex-df1a5",
  storageBucket: "eduflex-df1a5.firebasestorage.app",
  messagingSenderId: "918722155170",
  appId: "1:918722155170:web:424a741101a288256b7dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);