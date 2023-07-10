"use client"
import DashSectionWrapper from "../../components/DashSectionWrapper";
import Button from 'react-bootstrap/Button';
import { Suspense, useState } from "react";



function Apikey() {
    return ( 
        <>
          <div className=" ">
                <h1 className="text-center font-semibold pt-4">Store Api Key </h1>
                <form method="post" >
                    <div class="w-ful">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                  Api Name
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" api name"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                   Api key
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="  Website Name"/>
                                    
                            </div>
                            
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                 Store Api
                                </button>
                               
                            </div>
                        </form>
                       
                    </div>
                
                </form>
            </div>
            <hr />
        
        </>
    )
}

export default DashSectionWrapper(Apikey)