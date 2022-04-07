import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import axios from 'axios'
import {useSession} from 'next-auth/react'
import { setCookies } from 'cookies-next'

export async function getServerSideProps({req}){

  const secure = req.connection.encrypted
  
  const url = `${secure?"https":"http"}://${req.headers.host}/api/products`
  
  const res = await axios.get(url)

  return {
    props:{
      products:res.data
    }
  }

}

export default function Home({products}) {

  const data = useSession()

  if(data.data?.user?.id){
    console.log("Session")
    setCookies("userID",data.data.user?.id)
    setCookies("email",data.data.user?.email)
  }

  return (
    <div>
      {console.log(data)}
      <motion.h1
        
        className=' bg-sky-300'>Home</motion.h1>
      <Link href="/login">Login</Link>

      <section>
        {products.map(product=><Link href={"/products/"+product.id}>
          <article key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.img}/>
          </article>
        </Link>)}
      </section>
    </div>
  )
}
