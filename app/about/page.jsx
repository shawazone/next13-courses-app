import Link from 'next/link';
import React from 'react'

export const metadata  = {
    title : 'about shawas app uwu',
}


const aboutPage = () => {
  return (
    <div>
       <h1>about my uwu project </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odit animi. Facilis, quia? Incidunt, accusantium. Repellendus et nam facere vitae deserunt beatae minus, officia odio quaerat, commodi, quis rem sunt.</p>
      <ul><li> <Link href={'/about/team'}>our teamu!!! </Link>
    </li></ul>
    </div>
  )
}

export default aboutPage;
