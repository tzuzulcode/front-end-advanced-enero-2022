import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Home() {
  return (
    <div>
      <motion.h1
        
        className=' bg-sky-300'>Home</motion.h1>
      <Link href="/login">Login</Link>
    </div>
  )
}
