// /* eslint-disable react-hooks/rules-of-hooks */
// 'use client'
// import React, { useState } from 'react'
// import { set, ref, get } from "firebase/database";
// import { db } from "./firebase";
// let obj: any = {}
// export default function page() {

//     const [login, setlogin] = useState(false)
//     return (
//         <>

//             <form action="">
//                 <h1>sign up</h1>
//                 {login ? '' : <div>
//                     <input onChange={(e) => {
//                         // console.log(e.target.value)
//                         obj.name = e.target.value
//                     }} className='form-control ' type="text" placeholder='Username' />
//                 </div>}
//                 <div>
//                     <input onChange={(e) => {
//                         // console.log(e.target.value)
//                         obj.email = e.target.value
//                     }} className='form-control' type="text" placeholder='Email' />
//                 </div>
//                 <div>
//                     <input onChange={(e) => {
//                         // console.log(e.target.value)
//                         obj.password = e.target.value
//                     }} className='form-control' type="text" placeholder='Password' />
//                 </div>

//                 <div>
//                     <button onClick={(e) => {
//                         e.preventDefault()
//                         console.log(obj)

//                         if (obj.name || obj.email || obj.password) {
//                             get(ref(db, "data")).then((e) => {
//                                 if (e.val()) {
//                                     let arr = JSON.parse(e.val())

//                                     for (let i = 0; i < arr.length; i++) {
//                                         if (obj.email === arr[i].email) {
//                                             alert('email already exist...!')
//                                         }
//                                         else {
//                                             arr.push(obj)
//                                             set(ref(db, "data"), JSON.stringify(arr))
//                                         }

//                                     }

//                                 }
//                                 else {
//                                     set(ref(db, "data"), JSON.stringify([obj]))
//                                     alert("registration successfully")
//                                 }
//                             })
//                         } else {
//                             alert("please enter all the details")
//                         }

//                     }} className='cc form-control'>
//                         Create
//                     </button>


//                     <button className='cc form-control' onClick={(e) => {
//                         e.preventDefault()
//                         setlogin(true)

//                         get(ref(db, 'data')).then((e) => {
//                             if (e.val()) {
//                                 let arr = JSON.parse(e.val())

//                                 let x = 1;

//                                 for (let i = 0; i < arr.length; i++) {
//                                     if (obj.email === arr[i].email && obj.password === arr[i].password) {
//                                         console.log(arr[i].name)
//                                         localStorage.setItem('data', JSON.stringify(arr[i]))
//                                         open('./welcome')
//                                         x -= 1;
//                                         break;
//                                     }

//                                 }
//                                 if (x) {
//                                     alert('invaild email...!')
//                                 }
//                             }
//                         })
//                     }}>
//                         Login
//                     </button>
//                 </div>
//             </form >
//         </>
//     )
// }
// onClick = { async(e) => {
//     e.preventDefault()
//     const querySnapshot = await getDocs(collection(db, "users"));
//     let valid = true
//     for (let i = 0; i < querySnapshot.docs.length; i++) {
//         if (querySnapshot.docs[i].data().email === obj.email) {
//             valid = false
//             localStorage.setItem('status', JSON.stringify(querySnapshot.docs[i].data()))
//             window.location.href = './'
//             break
//         }

//     }
//     if (valid) {
//         alert('Email Not Registered')
//     }
// }}
