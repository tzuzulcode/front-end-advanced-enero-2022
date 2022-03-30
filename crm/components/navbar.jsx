import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gray-900 text-white p-5'>
        <ul className='flex gap-5'>
          <Link href="/"><li className=''>Home</li></Link>
          <Link href="/login"><li>Iniciar sesión</li></Link>
          <Link href="/signup"><li>Registrarse</li></Link>
        </ul>
    </nav>
  )
}
