import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Landing'
import Login from '../../Components/Signin'
import HouseSearch from '../../Pages/SearchHouses'
import SignUpForm from '../SignUp'
import Profile from '../Profile'
import HouseDetails from '../Details'
import ResponsiveAppBar from '../../Components/NavBar'
import './style.css'
import AddHouseForm from '../../Components/AddHouse'
import AboutUs from '../../Components/AboutUs'

const Layout = ({ children }) => {
  return (
    <>
      
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/search' exact element={<HouseSearch />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/house/:id' element={<HouseDetails />} />
          <Route path='/add-house' element={<AddHouseForm />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default Layout
