import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
        <Link className='rese' href={"/resenas"}>Reseñas</Link>
        <Link href={"/acerca"}>Acerca de</Link>
    </div>
  )
}

export default Navbar