import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Home  from './pages/home/Home'
import  Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import  NoPage  from './pages/nopage/NoPage'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import  ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import {Home2}  from './pages/home/Home2'

export const App = () => {
  
  return (
    <MyState>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/home2' element={<Home2/>}/>
      <Route path="/order" element={
            <ProtectedRoutesForUser>
              <Order />
            </ProtectedRoutesForUser>
          } />
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/dashboard'element={
      <ProtectedRoutesForAdmin>
      <Dashboard/>
      </ProtectedRoutesForAdmin>
      }/>
      <Route path='/*'element={<NoPage/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/productInfo/:id'element={<ProductInfo/>}/>
      <Route path='/addproduct'element={<AddProduct/>}/>
      <Route path='/updateproduct'element={<UpdateProduct/>}/>
    </Routes>
    </BrowserRouter>
    </MyState>
  )
}




export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'rananaman12@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}


export const ProtectedRoutesForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.user.email !== 'rananaman12@gmail.com') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}