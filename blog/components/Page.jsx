import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Page({children}) {
    const { data: session } = useSession()
    return (
        <div className='h-screen bg-slate-800 flex flex-col justify-between'>
            <nav className="bg-slate-900 text-white p-7">
                <ul className='flex gap-5'>
                    <Link href="/">Home</Link>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    {session?.user?.role==="admin"&&<Link href="/admin">Admin</Link>}
                </ul>
            </nav>
            <main className="bg-slate-800 text-white h-full">
                {children}
            </main>
            <footer className="bg-slate-900 p-10 text-white">
                <ul className='flex gap-5'>
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
