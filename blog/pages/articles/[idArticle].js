import React from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'

const Output = dynamic(
  ()=>import("editorjs-react-renderer").then((mod)=>mod.default),{
      ssr:false
  }
)

export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted
  
  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/articles/${context.params.idArticle}`
  
  const res = await axios.get(url)

  return {
      props:{
          article:res.data
      }
  }
}

export default function Article({article}) {

  return (
    <>
      <header className="h-96 mt-10 bg-fixed"
        style={{backgroundImage:`url(${article.image})`}}
          >
        <div className='w-full h-full bg-slate-900 flex flex-col justify-end items-start p-10 bg-opacity-70'>
          <h1 className='font-bold text-6xl'>{article.title}</h1>
          <div className='mt-5 flex items-center gap-3 bg-slate-900 bg-opacity-60 p-2 pr-5 rounded-full'>
            <img className='rounded-full w-10 h-10' src={article.author.image}></img>
            <p className='text-xl font-light'>{article.author.name}</p>
          </div>
        </div>
      </header>

      <section className='mt-20'>
        <article className='prose prose-2xl prose-invert leading-[2.5] prose-p:my-16 max-w-none mx-auto'>
          <Output data={ article.content }/>
        </article>
      </section>
    </>
  )
}
