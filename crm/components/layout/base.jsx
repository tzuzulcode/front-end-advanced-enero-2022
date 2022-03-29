import React from 'react'
import Navbar from '../navbar'

export default function Base({children}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
