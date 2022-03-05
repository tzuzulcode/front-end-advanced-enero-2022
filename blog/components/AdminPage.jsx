import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function AdminPage({children}) {
    const { data: session } = useSession()
    const router = useRouter()

    if(session?.user?.role==="regular"){
        router.replace("/")
    }
  return (
    <>
        <section className='bg-slate-700 text-white'>
            <ul className='flex px-7 py-5 gap-5'>
                <li><Link href="/admin">Admin</Link></li>
                <li><Link href="/admin/posts">Posts</Link></li>
                <li><Link href="/admin/categories">Categories</Link></li>
                <li><Link href="/admin/comments">Comments</Link></li>
            </ul>
        </section>

        <section className='max-w-screen-2xl mx-auto text-white'>
            {children}
        </section>
    </>
  )
}
