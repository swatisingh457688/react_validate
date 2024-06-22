import "./App.css";
import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import { storage } from "./firestore";
import { v4 } from "uuid";

function App() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="App">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <button onClick={uploadFile}> Upload Image</button>


            {imageUrls.map((url, index) => {
                return <img key={index} src={url} />;
            })}


        </div>
    );
}

export default App;




































// 'use client'
// import React, { useState } from 'react'
// import './App.css'
// import { db } from './firestore'
// import { addDoc, collection, getDocs } from 'firebase/firestore'


// const A = () => {
//   const [Register, setlogin] = useState(true)

//   return <>

//     <form onSubmit={async (e) => {
//       e.preventDefault()
//       let form = new FormData(e.target)
//       let obj = Object.fromEntries(form)
//       // console.log(obj)

//       if (obj.name && obj.email && obj.pass && obj.cpass) {

//         if ((obj.name !== '') && (obj.email !== '') && (obj.pass !== '') && (obj.cpass !== '')) {

//           if ((obj.pass === obj.cpass)) {

//             let valid = true
//             const querySnapshot = await getDocs(collection(db, "users"));

//             for (let i = 0; i < querySnapshot.docs.length; i++) {
//               if (querySnapshot.docs[i].data().email === obj.email) {
//                 valid = false
//                 break
//               }

//             }
//             if (valid) {
//               try {
//                 const docRef = await addDoc(collection(db, "users"), obj);
//                 console.log("Document written with ID:", docRef.id);
//                 alert('successfully registered')
//                 setTimeout(() => {
//                   window.location.href = './'
//                 }, 1000);
//               } catch (e) {
//                 console.error("Error adding document:", e);
//               }

//             } else {
//               alert('email already registered')
//             }

//           } else {
//             alert('password not matched')
//           }

//         } else {
//           alert('Please enter all the  details')
//         }


//       } else if ((obj.email !== '') && (obj.pass !== '')) {

//         const querySnapshot = await getDocs(collection(db, "users"));
//         let valid = true
//         for (let i = 0; i < querySnapshot.docs.length; i++) {

//           if (querySnapshot.docs[i].data().email === obj.email) {
//             valid = false
//             localStorage.setItem('status', JSON.stringify(querySnapshot.docs[i].data()))
//             alert('welcome to home page')

//             break
//           }
//         }
//         if (valid) {
//           alert('Email not registered')
//         }
//       }


//     }} action="">
//       {Register ? <h1>sign in</h1> : <h1>sign up</h1>}
//       {Register ? '' : <div>
//         <input name='name' type="text" placeholder='Username' />
//       </div>}

//       <div>
//         <input name='email' type="text" placeholder='Email' />
//       </div>

//       <div>
//         <input name='pass' type="text" placeholder='Password' />
//       </div>

//       {Register ? '' : <div>
//         <input name='cpass' type="text" placeholder='ConfirmPass' />
//       </div>}

//       <div>

//         {Register ? '' : <button className='cc form-control signup' >
//           Create
//         </button>}

//         {Register ? '' :
//           <p >
//             Already have account?
//             <a href='' className='signin'>Signin</a>
//           </p>}


//         {Register ?
//           <button className='cc form-control login' >
//             Login
//           </button> : ''}
//         {Register ?
//           <p onClick={(e) => {
//             e.preventDefault()
//             setlogin(false)
//           }} >Don't have account? <span className='signin'>Register</span></p> : ''}
//       </div>


//     </form >
//   </>
// }
