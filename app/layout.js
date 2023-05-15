import {Poppins } from 'next/font/google';
import React from 'react'
import './globals.css'
import Header from './component/Header';

const poppins = Poppins ({
weight: ['400','700'],
subsets: ['latin'],
});



export const metadata = {
  title: 'shawa  App uwu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    

      <body className={poppins.className}>
        <Header></Header>
      <main className='container'>  {children}
      </main>
        </body>
  
  )
}
