import React from 'react'

export default function Input({type,name,placeholder,onChange,value}) {
  return (
    <input className='bg-gray-700 p-3 mb-5 rounded-md' type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}></input>
  )
}
