import {useEffect, useState} from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './home-page.js';
import Login from './login-page.js'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loginSuccess, setLoginSucsess] = useState(false);
  const isLoginSuccess = (isSuccess) => {
    setLoginSucsess(isSuccess);
  }
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
    import("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css")
  }, []);
  return (
    <main className={inter.className}>
      {/* <Router>
        <Routes>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router> */}
      {
        loginSuccess ? <HomePage/> : <Login isLoginSuccess={isLoginSuccess}/>
      }
    </main>
  )
}
