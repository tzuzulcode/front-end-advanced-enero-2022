import React from 'react'
import AdminPage from '../../../components/AdminPage'
import Link from 'next/link'

export default function Posts() {
    return (
        <AdminPage>
            <h1>Posts</h1>
            <Link href="/admin/posts/create">Crear nueva publicación</Link>
        </AdminPage>
    )
}
