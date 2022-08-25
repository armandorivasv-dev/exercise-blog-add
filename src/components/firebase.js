
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {firebaseConfig} from './fireconfigKey';

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

