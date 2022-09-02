import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


console.log(process.env.REACT_APP_API);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJID,
  storageBucket: process.env.REACT_APP_STRG,
  messagingSenderId: process.env.REACT_APP_MSGID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
