import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import axios from 'axios'

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
  return (
    <div>
      <motion.h1
        
        className=' bg-sky-300'>Home</motion.h1>
      <Link href="/login">Login</Link>

      <section>
        {products.map(product=><article key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <img src={product.img}/>
        </article>)}
      </section>
    </div>
  )
}
