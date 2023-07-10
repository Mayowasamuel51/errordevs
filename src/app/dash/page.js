'use client'
import app
    // { intiFirebase }
    from "@/Firebase/Firebase"
    import { redirect } from 'next/navigation'
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from "firebase/auth";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from "next/image";

const Dashboard = () => {
    app
    const auth = getAuth()
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <h1>LOADING....</h1>
    }
    if (!user) {
        redirect('/')
        return <div>welcome back {user.displayName}</div>
    }
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                signOut
            </button>

            {user.displayName}

            {/* <Image width="300" height="200" src={user.photoURL}></Image> */}
            
            {user.phoneNumber}
            <button>Add item</button>
            Daconst Dashboard</div>
    )
}

export default Dashboard