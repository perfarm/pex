import { cert, getApp, initializeApp as initializeAdminApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const { FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_APP_KEY, FIREBASE_DATABASE_URL, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCCKET } = process.env;

const firebaseConfig = {
  appId: FIREBASE_APP_ID,
  apiKey: FIREBASE_APP_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

let hasApp = false;
try {
  hasApp = !!getApp('pex');
} catch { }

export const adminFirebase = hasApp ? getApp('pex') : initializeAdminApp({
  credential: cert(require('./perfarm-experience-firebase-adminsdk-mp5zh-9cfa485f5f.json')),
  databaseURL: FIREBASE_DATABASE_URL,
}, 'pex');

export const firestore = getFirestore(adminFirebase);
