import React from 'react'
import Link from 'next/link'
import axios from 'axios'

export async function getServerSideProps(context){
    const secure = context.req.connection.encrypted
    
    const url = `${secure?"https":"http"}://${context.req.headers.host}/api/posts`
    
    const res = await axios.get(url)
    
    return {
        props:{
            posts:res.data.posts
        }
    }
}

export default function Posts({posts}) {
    return (
        <>
            <div className='flex justify-between my-10'>
                <h1 className='text-3xl font-bold'>Publicaciones realizadas</h1>
                <Link href="/admin/posts/create"><span className='bg-yellow-200 text-black p-2 hover:bg-yellow-300 rounded-md cursor-pointer'>Crear publicación</span></Link>
            </div>

            <section className='grid grid-cols-4 gap-5'>
            {posts.map((post)=>{
                return <article className='bg-slate-700 p-5' key={post.id}>
                    <div className='flex items-center mb-5'>
                        <img className='h-10 w-10 rounded-full mr-3' src={post.author.image}></img>
                        <div className='flex flex-col justify-center'>
                            <p className='text-lg font-semibold'>{post.author.name}</p>
                            <p className='text-xs'>{new Date(post.date).toLocaleDateString()}</p>
                            {/* <p className='text-xs'>{new Date(post.date).toLocaleTimeString()}</p> */}
                        </div>
                    </div>
                    <Link href={`/admin/posts/${post.id}`}><h3 className='text-3xl font-bold mb-3 cursor-pointer'>{post.title}</h3></Link>
                    
                    <img src={post.image}></img>
                </article>
            })}
            </section>
        </>
    )
}
