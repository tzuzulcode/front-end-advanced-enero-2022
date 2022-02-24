import React from 'react'

export default function Page({children}) {
  return (
    <div className='h-screen bg-slate-800 flex flex-col justify-between'>
        <nav className="bg-slate-900 text-white p-10">
            <ul className='flex'>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
            </ul>
        </nav>
        <main className="bg-slate-800 text-white p-10">
            {children}
        </main>
        <footer className="bg-slate-900 p-10 text-white">
            <ul className='flex'>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
            </ul>
        </footer>
    </div>
  )
}
