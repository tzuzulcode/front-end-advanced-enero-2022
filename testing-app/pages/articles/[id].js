import React from 'react'
import Link from 'next/link'

export async function getServerSideProps({params}){
    const articlesReq = await fetch("http://localhost:3000/api/articles/"+params.id)
  
    const article = await articlesReq.json()

    if(articlesReq.status===404){
      return {
        redirect:{
          permanent:false,
          destination:'/404'
        },
        props:{}
      }
    }
  
    return {
      props:{
        article
      }
    }
}

export default function ArticlePage({article}) {
  return (
    <div>
        <div>
            <Link href="/">
                <a>Regresar al home</a>
            </Link>

            <section>
              <article>
                <h1>{article.title}</h1>
              </article>
            </section>
        </div>

    </div>
  )
}
