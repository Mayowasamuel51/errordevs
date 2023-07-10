'use client'

import app from "@/Firebase/Firebase";
import { redirect } from 'next/navigation'
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from "firebase/auth";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from "next/image";
import Profile from "./components/Profile";
import Navabr from "./components/Navabr";

function Dashboard() {
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
        <div className="text-center text-3xl font-bold underline">
            <Navabr profile={ user.photoURL}  />
        </div>

    )
}
export default Dashboard