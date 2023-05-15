import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <header className='header'> 
    <div className='contianer'> 
     <div className='logo'>
       <Link href="/" > shawa app uwu</Link>
     </div>
      <div className='links'>
       <Link href="/" > Home</Link>
       <Link href="/about" > About</Link>
       <Link href="/about/team" >teamu </Link>
       <Link href="/code/repos" > code</Link>
          
      </div>
    </div>
    </header>
  )
}

export default Header
