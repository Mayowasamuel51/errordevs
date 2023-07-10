'use client'
import app from "@/Firebase/Firebase";
import { redirect } from 'next/navigation'
import { getAuth } from "firebase/auth";
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navabr from "./components/Navabr";
import DashSectionWrapper from "../components/DashSectionWrapper";

function Dashboard() {

    return (
        <div className="text-center text-3xl font-bold underline">
         
        </div>

    )
}
export default DashSectionWrapper( Dashboard)