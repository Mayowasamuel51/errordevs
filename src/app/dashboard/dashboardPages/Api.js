import React, { Suspense, cache } from "react";
import NetworkError from "../../NetworkError";
import ApiKey from "../components/ApiKey";
async function fetchapis() {
    const response = await fetch('/api/apikey', {
        next: { revalidate: 20 }
    })
    try {
        if (!response.ok) {
            if (response.status === 404) {
                return <NetworkError />
                throw new Error('Resource not found');
            } else if (response.status === 500) {
                return <NetworkError />
                throw new Error('Internal server error');
            } else {
                return <NetworkError />
                throw new Error('Unknown server error');
            }
        }
        const data = await response.json()
        return data.data
    } catch (err) {
        return <NetworkError />
    }
}
async function Api() {
    const apikey = await fetchapis()
    return (
        <>
            <div className="container mx-auto w-full max-w-full">
                <div className="w-full relative top-[4em] p-4">
                    <h2 className="text-2xl text-orange-500 px-8">Your Apis</h2>
                </div>
                <div className="mt-3">
                    <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                        <ApiKey apikey={apikey} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
export default Api;