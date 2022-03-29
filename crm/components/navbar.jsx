import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <ul>
        <Link href="/"><li>Home</li></Link>
        </ul>
        <ul>
        <Link href="/login"><li>Iniciar sesión</li></Link>
        </ul>
    </nav>
  )
}
