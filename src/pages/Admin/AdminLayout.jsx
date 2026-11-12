import React from 'react'
import { Outlet } from 'react-router'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div>
        <AdminHeader/>
        <h1 className='text-6xl'> This is Admin</h1>
        <Outlet/>

        <h1 className='text-6xl'> This ENds here</h1>

    </div>
  )
}

export default AdminLayout