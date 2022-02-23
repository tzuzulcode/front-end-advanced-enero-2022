import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className='bg-gray-100'>
      <p>{session?"Sesion iniciada":"Sin sesion"}</p>
      {console.log(session?.user)}
       <button onClick={() => signIn()}>Sign in</button>
       <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
