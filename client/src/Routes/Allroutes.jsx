import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../components/Login'
import PageNotFound from '../components/PageNotFound'

import Signup from '../Components/Signup'
import Users from '../Components/Users'
import Protectedroutes from './Protectedroutes';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Protectedroutes><Users/></Protectedroutes>}/>

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes