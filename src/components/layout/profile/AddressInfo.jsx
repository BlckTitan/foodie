'use client'

import { useSession } from 'next-auth/react'
import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

export default function AddressInfo({country, state, city, region, street, loadingState}) {

    const session = useSession()
    // const userData = session?.data?.user;

    if(session.status === 'loading' || loadingState === true) return <LoadingSpinner/>


  return (
    <section className='container bg-white'>

        <ul>
          <li className='mb-4 flex items-center'>
            <h2 className='font-semibold w-30'>Country: </h2>
            <span className='text-left mr-2'>{(country === null) ? '' : country}</span>
          </li>
          <li className='mb-4 flex items-center'>
            <h2 className='font-semibold w-30'>State: </h2>
            <span>{(state === null) ? '' : state}</span>
          </li>
          <li className='mb-4 flex items-center'>
            <h2 className='font-semibold w-30'>City: </h2>
            <span>{(city === null) ? '' : city}</span>
          </li>
          <li className='mb-4 flex items-center'>
            <h2 className='font-semibold w-30'>LGA or Region: </h2>
            <span>{(region === null) ? '' : region}</span>
          </li>
          <li className='mb-4 flex items-center'>
            <h2 className='font-semibold w-30'>Street: </h2>
            <span>{(street === null) ? '' : street}</span>
          </li>
        </ul>

    </section>
  )
}
