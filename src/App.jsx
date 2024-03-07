import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import Home from './components/Home'
import DashboardPage from './components/DashboardPage'
import Product from './components/Product'
import RouteNavigator from './components/AuthRoutes'
import Error404Page from './components/Error404Page';

function App() {
  const { isLogin } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>

        <Route element={<RouteNavigator.PublicRoute isLogin={isLogin} />}>
          <Route path='/' element={<Home />} />
          <Route path={'/404'} element={<Error404Page />} />
        </Route>

        <Route element={<RouteNavigator.PrivateRoute isLogin={isLogin} />}>
          <Route path='/product' element={<Product />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>

        <Route element={<RouteNavigator.RestrictedRoute isLogin={isLogin} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
        </Route>

        <Route
          path="/*"
          element={
            <Navigate to='/404' replace />
          }
        />
      </Routes>
    </>
  )
}

export default App
