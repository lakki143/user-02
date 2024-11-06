// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGNpPXC1S16vUemm12yUhudsY18p-UyEI",
  authDomain: "project-02-ddada.firebaseapp.com",
  databaseURL: "https://project-02-ddada-default-rtdb.firebaseio.com",
  projectId: "project-02-ddada",
  storageBucket: "project-02-ddada.firebasestorage.app",
  messagingSenderId: "799220205114",
  appId: "1:799220205114:web:dc4e8569c1884b4b6d5703"

};

const App = initializeApp(firebaseConfig);

export default App;
