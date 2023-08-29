// Import the functions you need from the SDKs you need
import { cert, getApp, initializeApp as initializeAdminApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const { FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_APP_KEY, FIREBASE_DATABASE_URL, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCCKET } = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  appId: FIREBASE_APP_ID,
  apiKey: FIREBASE_APP_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
// export const firebase = initializeApp(firebaseConfig);

export const adminFirebase = getApp('pex') ? getApp('pex') : initializeAdminApp({
  credential: cert(require('./perfarm-experience-firebase-adminsdk-mp5zh-9cfa485f5f.json')),
  databaseURL: FIREBASE_DATABASE_URL,
}, 'pex');

export const firestore = getFirestore(adminFirebase);

// export const database = getDatabase(firebase);
