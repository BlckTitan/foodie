'use client';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import useFetch from '@/customHooks/useFetch';
import {  Table } from 'react-bootstrap';
import { BsTrash3 } from 'react-icons/bs';
import Image from 'next/image';

export default function UserPage() {

  // const [isAdmin, setIsAdmin] = useState(false)
  const session = useSession()

  useEffect(() => {
    // setIsAdmin(session?.data?.user?.isAdmin)
    if(session.status === 'unauthenticated') return redirect('/login')
    (session.status === 'loading') && <LoadingSpinner/> 
    
  }, [session]); 

  const {data, error, isLoading } = useFetch('/api/user');

  if(isLoading) return <LoadingSpinner/>;
  if(session?.data?.user?.isAdmin === false) return redirect('/login')

  const handleDelete = async (e, id) => {
    confirm(`Are you sure to delete user`)
  }
  
  return (
    <section className='flex flex-col lg:flex-row w-full h-screen bg-white'>

      <Sidebar/>

      <main className='w-full lg:w-10/12 bg-gray-50 px-4 lg:px-6 py-6 lg:py-8 overflow-x-scroll'>

      <header className='w-full h-24 mb-4 flex justify-between items-center'>
        <h2 className='text-xl font-semibold'>Registered Users</h2>
      </header>

        { (isLoading) ? <LoadingSpinner/> :
            
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>SN</th>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        (data !== null) && data.map((userData, index) => (

                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <Image 
                                        src={userData?.image?.secure_url} 
                                        alt=''
                                        width={60}
                                        height={60}
                                        style={{width: '45', height: '45'}}
                                        className='object-cover rounded-full'
                                    />
                                </td>
                                <td>{(userData?.name) ? userData.name.toUpperCase() : `${userData?.firstName.toUpperCase()} ${userData?.firstName.toUpperCase()}`}</td>
                                <td>{userData?.phone}</td>
                                <td>{(userData?.isAdmin === true) ? "Administrator" : "Customer"}</td>
                                <td>
                                    <a href={`/profile/?id=${userData?._id}`} className='text-underline text-blue-500 hover:text-primaryColor'>view profile</a>
                                    <button 
                                      type='button' 
                                      className='text-red-500 ml-4' 
                                      onClick={(e) => {handleDelete(e, userData?._id)}}
                                    >
                                      <BsTrash3 />
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>

            </Table>
        }
      </main>
    </section>
  )
}
