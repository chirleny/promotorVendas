import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZGktcnIgrwblamlCaU-EkDCZant6MvOk",
  authDomain: "pvendas-a486d.firebaseapp.com",
  projectId: "pvendas-a486d",
  storageBucket: "pvendas-a486d.appspot.com",
  messagingSenderId: "602665692262",
  appId: "1:602665692262:web:441c15213f52d0da7811a7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);