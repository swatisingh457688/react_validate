'use client'
import React, { useState } from 'react'
import './Form.css'
import { db } from './firestore'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'


export default function Form() {

    const [Register, setlogin] = useState(true)
    return <>

        <form onSubmit={async (e) => {
            e.preventDefault()
            let form = new FormData(e.target)
            let obj = Object.fromEntries(form)
            // console.log(obj)

            if (obj.name && obj.email && obj.pass && obj.cpass) {

                if ((obj.name !== '') && (obj.email !== '') && (obj.pass !== '') && (obj.cpass !== '')) {

                    if ((obj.pass === obj.cpass)) {

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
                                console.log("Document written with ID:", docRef.id);
                                alert('successfully registered')
                                setTimeout(() => {
                                    window.location.href = './'
                                }, 1000);
                            } catch (e) {
                                console.error("Error adding document:", e);
                            }

                        } else {
                            alert('email already registered')
                        }

                    } else {
                        alert('password not matched')
                    }

                } else {
                    alert('Please enter all the  details')
                }


            } else if ((obj.email !== '') && (obj.pass !== '')) {

                const querySnapshot = await getDocs(collection(db, "users"));
                let valid = true
                for (let i = 0; i < querySnapshot.docs.length; i++) {

                    if (querySnapshot.docs[i].data().email === obj.email) {
                        valid = false
                        localStorage.setItem('status', JSON.stringify(querySnapshot.docs[i].data()))
                        // alert('welcome to home page')
                        localStorage.setItem('user', JSON.stringify(obj.email))
                        window.location.replace('home')
                        break
                    }
                }
                if (valid) {
                    alert('Email not registered')
                }
            }


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

                {Register ? '' : <button className='cc form-control signup' >
                    Create
                </button>}

                {Register ? '' :
                    <p >
                        Already have account?
                        <Link href='' className='signin' onClick={(e) => {
                            e.preventDefault()
                            setlogin(true)
                        }}>Signin</Link>
                    </p>}


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
}



