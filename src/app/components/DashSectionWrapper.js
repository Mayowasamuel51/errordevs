"use client"
import app from "@/Firebase/Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navabr from "../dashboard/components/Navabr";
import { useRouter } from "next/navigation";
const DashSectionWrapper = (Component) =>
    function Page() {
        app
        const auth = getAuth()
        const [user, loading, error] = useAuthState(auth)
        const router = useRouter()
        if (loading) {
            return <h1>LOADING...............</h1>
        }
        if (error) {
            return (
                <div>
                    <p>Error: {error}</p>
                </div>
            );
        }
        if (!user) {
            router.push('/')
        }
        return (
            <>
                <Navabr profile={user.photoURL} />
                <Component />
            </>
        );
    };

export default DashSectionWrapper;