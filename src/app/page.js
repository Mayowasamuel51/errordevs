'use client'

import app
  // { intiFirebase }
  from "@/Firebase/Firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from "firebase/auth";
import { redirect } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import HomeNav from "./components/HomeNav";
export default function Home() {
  //  intiFirebase()
  app

  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const [user, loading] = useAuthState(auth)
  // const router = useRouter()
  const signin = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result.user)

  }
  if (loading) {
    return <h1 className="text-center">LOADING....</h1>
  }
  if (user) {
    redirect('/dashboard')
    return <div className="text-left">welcome back {user.displayName}</div>
  }

  return (
    <>
      <div className="bg-white-500">
        <HomeNav signin={signin} />
      
      </div>

    </>
  )
}
