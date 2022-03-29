import React from 'react'
import {useSession,signOut,getCsrfToken} from 'next-auth/react'
import {AiFillGithub} from "react-icons/ai"
import {AiFillGoogleCircle} from "react-icons/ai"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  await prisma.$connect()
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  return {
    props: { csrfToken },
  }
}

export default function Login({csrfToken}) {
    const {data:session} = useSession()
  return (
    <div>
        <p>{session?session.user.name:"No tienes sesion"}</p>
        {session?<button onClick={()=>{signOut()}}>Sign out</button>:
        <form className='flex justify-center text-white' action='/api/auth/signin/google' method='POST'>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <button className='bg-slate-900 p-3 rounded hover:bg-yellow-100 hover:text-black' type="submit"><AiFillGoogleCircle className='w-10 h-10 inline-block'/> Inicia sesión con Google</button>
        </form>
        }
        <form className='flex justify-center text-white' action='/api/auth/signin/google' method='POST'>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <input placeholder='Email...' type="email" />
            <input placeholder='Password...' type="pasword" />
            <button className='bg-slate-900 p-3 rounded hover:bg-yellow-100 hover:text-black' type="submit">Iniciar sesión</button>
        </form>
    </div>
  )
}
