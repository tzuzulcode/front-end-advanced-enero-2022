import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import AdminPage from './AdminPage'

export default function Page({children}) {
    const { data: session } = useSession()
    return (
        <div className='min-h-screen bg-slate-800 flex flex-col'>
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
            {session?.user?.role==="admin"?<AdminPage>{children}</AdminPage>:
            <main className="bg-slate-800 text-white h-full max-w-screen-2xl mx-auto">
                {children}
            </main>}
            <footer className="bg-slate-900 p-10 mt-auto">
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
