'use client'
import React, { useState } from 'react'
import './App.css'
import { db } from './firestore'
import { addDoc, collection, getDocs } from 'firebase/firestore'


let obj = {}
export default function App() {

  const [Register, setlogin] = useState(true)
  return (
    <>

      <form action="">
        {Register ? <h1>sign in</h1> : <h1>sign up</h1>}
        {Register ? '' : <div>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              obj.name = e.target.value
            }}
            name='name' type="text" placeholder='Username' />
        </div>}

        <div>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              obj.email = e.target.value
            }}
            name='email' type="text" placeholder='Email' />
        </div>

        <div>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              obj.pass = e.target.value
            }}
            name='pass' type="text" placeholder='Password' />
        </div>

        {Register ? '' : <div>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              obj.cpass = e.target.value
            }}
            name='cpass' type="text" placeholder='ConfirmPass' />
        </div>}

        <div>

          {Register ? '' : <button

            className='cc form-control' onClick={async (e) => {
              e.preventDefault()


              if ((obj.name !== '') && (obj.email !== '') && (obj.pass !== '') && (obj.cpass !== '')) {


                if (obj.pass === obj.cpass) {

                  let valid = true

                  const querySnapshot = await getDocs(collection(db, "users"));

                  for (let i = 0; i < querySnapshot.docs.length; i++) {
                    if (querySnapshot.docs[i].data().email === obj.email) {
                      valid = false
                      break
                    }

                  }

                  if (valid) {
                    try {
                      const docRef = await addDoc(collection(db, "users"), obj);
                      console.log(docRef.id)
                      alert('successfully registred')
                    }
                    catch (e) {
                      console.error('error added')

                    }
                  } else {
                    alert('email already registred')
                  }
                } else {
                  alert('incorrect password')
                }
              } else {
                alert('empty field')
              }

            }}>
            Create
          </button>}

          {Register ? '' :
            <p >Already have account?<button className='signin'>Signin</button></p>}


          {Register ?
            <button
              onSubmit={async (e) => {
                e.preventDefault()
                let form = new FormData(e.target)
                let obj = Object.fromEntries(form)


                const querySnapshot = await getDocs(collection(db, "users"));
                console.log(querySnapshot.docs[0].data().email)
                let valid = true
                for (let i = 0; i < querySnapshot.docs.length; i++) {
                  if (querySnapshot.docs[i].data().email === obj.email) {
                    valid = false
                    localStorage.setItem('status', JSON.stringify(querySnapshot.docs[i].data()))
                    alert('123')
                    window.location.href = './'
                    break
                  }

                }
                if (valid) {
                  alert('Email Not Registered')
                }
              }}

              className='cc form-control' >
              Login
            </button> : ''}
          {Register ?
            <p onClick={(e) => {
              e.preventDefault()
              setlogin(false)
            }} >Don't have account? <span className='signin'>Register</span></p> : ''}
        </div>


      </form >
    </>
  )
}
