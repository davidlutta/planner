import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5Fy7-rLHkixq6FaS1UjI2_0pMiQe5HfA",
    authDomain: "planner-f1df5.firebaseapp.com",
    databaseURL: "https://planner-f1df5.firebaseio.com",
    projectId: "planner-f1df5",
    storageBucket: "planner-f1df5.appspot.com",
    messagingSenderId: "64219392397",
    appId: "1:64219392397:web:16f536b37d3d9faad0b5c4",
    measurementId: "G-1K7Z38B7W2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();
export {db};
export {firebase};
export default firebaseConfig;
