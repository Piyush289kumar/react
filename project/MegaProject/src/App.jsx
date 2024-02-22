import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { login, logout } from './store/features/authFeature'
import authService from './appwrite/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {

        (userData) ? dispatch(login(userData)) : dispatch(logout())

        // if (userData) {
        //   dispatch(login(userData))
        // } else {
        //   dispatch(logout())
        // }


      })
      .finally(() => (setLoading(false)))
  }, [])


  return loading ? null :
    (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            {/* TODO:  <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    )
}

export default App
