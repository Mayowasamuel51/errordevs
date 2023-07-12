'use client'
import { useState } from 'react';
function ApiKey({ apikey }) {

    return (
        <>
            <div className="mt-10 max-w-full p-10">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Api Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Api Key
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Date 
                            </th>

                        </tr>
                    </thead>

                    <tbody >
                        {apikey.map((item) => {
                            return (

                                <tr key={item.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">

                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.apiname}
                                                </p>

                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.apikey}</p>
                                   
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.createdAt}</p>
                                    </td>


                                </tr>


                            )
                        })}
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default ApiKey;