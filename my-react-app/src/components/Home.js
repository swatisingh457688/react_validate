"use client"
import React from 'react'

export default function Home() {

    if (localStorage.getItem('user') == null) {
        window.location.replace('./');
    }


    return (
        <>
            <div>Home</div>
            <button onClick={() => {
                window.localStorage.removeItem('user')
                window.location.replace('./')
            }}>logout</button>

        </>
    )
}

