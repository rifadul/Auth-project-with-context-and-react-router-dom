import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import PrivateRoute from './components/common/PrivateRoute'
import Home from './components/Home'
import DashboardPage from './components/DashboardPage'

function App() {
  const { user, login, logout, isLogin } = useAuth();
  console.log(isLogin);

  return (
    <>
      <Navbar />
      {/* <Login />
      <Signup /> */}

      <Routes>
        {
          !isLogin && <Route path='/login' element={<Login />} />
        }
        {!isLogin && <Route path='/sign-up' element={<Signup />} />}
        <Route element={<PrivateRoute isLogin={isLogin} />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
