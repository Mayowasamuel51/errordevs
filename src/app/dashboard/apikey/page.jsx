"use client"
import DashSectionWrapper from "../../components/DashSectionWrapper";
import Button from 'react-bootstrap/Button';
import { Suspense, useState } from "react";
import axios from "axios"
import app from "@/Firebase/Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify';
function Apikey() {
    app
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)
    const notify = () => toast.error("Error!!!", {
        position: toast.POSITION.TOP_LEFT
    });
    const good = () => toast.success("Added successfully", {
        position: toast.POSITION.TOP_LEFT
    });
    const [input, setInput] = useState({
        apiname: '',
        apikey: '',
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const apikeyhandle = async (e) => {
        e.preventDefault();
        const data = {
            apiname: input.apiname,
            apikey: input.apikey,
            email: user.email,
        }

        axios.post(`http://localhost:3000/api/apikey`, data)
            .then((res) => {
                // if (res.status.data === 200) {
              
                setTimeout(() => {
                    good()
             }, 6000)
                // }
            }
            ).catch((err) => {
                // notyf.error('Network issues')
                console.log(err)
                notify()

            }
            )
    }

    return (
        <>
            <div className="bg-black px-5 py-7 md:px-14 md:py-14 ">
                <h1 className="text-center font-semibold pt-4 text-white">Store Api Key </h1>

                <div className="w-ful">
                    <form onSubmit={apikeyhandle} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Api Name
                            </label>
                            <input onChange={inputHandle} value={input.apiname} required name="apiname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" api name" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Api key
                            </label>
                            <input onChange={inputHandle} value={input.apikey} required name="apikey" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="api key" />

                        </div>
                        <div className="item-center container is-widescreen">
                            <ToastContainer className="h-24" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Store Api
                            </button>

                        </div>
                    </form>

                </div>


            </div>
            <hr />

        </>
    )
}

export default DashSectionWrapper(Apikey)