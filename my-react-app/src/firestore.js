
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC9C0SyZNpIojxCDgGD19eBJ0fjGhwIWw",
    authDomain: "formtemp-55058.firebaseapp.com",
    projectId: "formtemp-55058",
    storageBucket: "formtemp-55058.appspot.com",
    messagingSenderId: "732862648085",
    appId: "1:732862648085:web:18dd60ca7a8326a801231c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAC9C0SyZNpIojxCDgGD19eBJ0fjGhwIWw",
//     authDomain: "formtemp-55058.firebaseapp.com",
//     projectId: "formtemp-55058",
//     storageBucket: "formtemp-55058.appspot.com",
//     messagingSenderId: "732862648085",
//     appId: "1:732862648085:web:18dd60ca7a8326a801231c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// export { db }



