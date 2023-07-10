'use client'

import app from "@/Firebase/Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from "firebase/auth";
import { redirect } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import HomeNav from "./components/HomeNav";
import Job from "./components/Job";
import Portfoillo from "./components/Portfoillo";
function Home() {
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
    return <h1 className="text-center font-semibold">LOADING....</h1>
  }
  if (user) {
    redirect('/dashboard')
    return <div className="text-left">welcome back {user.displayName}</div>
  }

  return (
    <>
      <HomeNav signin={signin} />
      <div className="px-2 py-10 flex flex-col gap-y-5 items-center md:px-14 md:py-20">

        <Job />
        <Portfoillo />

      </div>

    </>
  )
}


export default Home;


// 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