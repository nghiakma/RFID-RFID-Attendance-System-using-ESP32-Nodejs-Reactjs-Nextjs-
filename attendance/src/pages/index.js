import {useEffect} from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './home-page.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
    <main className={inter.className}>
      <HomePage />
    </main>
  )
}
