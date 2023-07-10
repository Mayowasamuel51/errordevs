"use client"

import app from "@/Firebase/Firebase";
import { redirect } from 'next/navigation'
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from "firebase/auth";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from "next/image";
import Navabr from "../dashboard/components/Navabr";
const DashSectionWrapper = (Component) =>

    function Page() {
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
            <>
                <Navabr />

                <Component />


            </>
        );
    };

export default DashSectionWrapper;