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

      <form onSubmit={(e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        let obj = Object.fromEntries(form)
        console.log(obj)
      }} action="">
        {Register ? <h1>sign in</h1> : <h1>sign up</h1>}
        {Register ? '' : <div>
          <input name='name' type="text" placeholder='Username' />
        </div>}

        <div>
          <input name='email' type="text" placeholder='Email' />
        </div>

        <div>
          <input name='pass' type="text" placeholder='Password' />
        </div>

        {Register ? '' : <div>
          <input name='cpass' type="text" placeholder='ConfirmPass' />
        </div>}

        <div>

          {Register ? '' : <button

            className='cc form-control signup' >
            Create
          </button>}

          {Register ? '' :
            <p >Already have account?<button className='signin'>Signin</button></p>}


          {Register ?
            <button className='cc form-control login' >
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


