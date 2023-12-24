import {useEffect, useState} from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './home-page.js';
import Login from './login-page.js'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loginSuccess, setLoginSucsess] = useState(false);
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
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
        loginSuccess ? <HomePage/> : <Login/>
      }
    </main>
  )
}
