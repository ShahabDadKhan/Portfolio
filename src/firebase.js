import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEk2TCclu07y9-j5yUldyDJcLsX1B4Zpg",
  authDomain: "portfolio-v2-d7975.firebaseapp.com",
  projectId: "portfolio-v2-d7975",
  storageBucket: "portfolio-v2-d7975.appspot.com",
  messagingSenderId: "122699319329",
  appId: "1:122699319329:web:6f3bd1ec35fcabd2eebb60",
  measurementId: "G-31408K3YDZ"
  // apiKey: "AIzaSyDjTr6mIGvuXD5WxKMaJsvnc77OdhcKhdo",
  // authDomain: "portfolio-7956c.firebaseapp.com",
  // projectId: "portfolio-7956c",
  // storageBucket: "portfolio-7956c.appspot.com",
  // messagingSenderId: "926087712247",
  // appId: "1:926087712247:web:1880a9b573a8599dfff2f2",
  // measurementId: "G-SX5BLF1GHD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();
