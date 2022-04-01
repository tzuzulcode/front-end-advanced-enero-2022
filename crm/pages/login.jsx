import React, { useState } from 'react'
import {useSession,signOut,getCsrfToken} from 'next-auth/react'
import {AiFillGithub} from "react-icons/ai"
import {AiFillGoogleCircle} from "react-icons/ai"
import Input from '../components/input'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  
  return {
    props: { csrfToken },
  }
}

export default function Login({csrfToken}) {
    const {data:session} = useSession()

    const [isLogin,setIsLogin] = useState(true)

    const router = useRouter()

    const {error} = router.query


  return (
    <>
        <div className='bg-gray-800 w-1/2 mx-auto p-10 mt-10 rounded-md'>
          <button onClick={()=>{setIsLogin(!isLogin)}}>Cambiar</button>
          <form className='flex flex-col' action='/api/auth/callback/credentials' method='POST'>
              <Input name={"csrfToken"} type={"hidden"} defaultValue={csrfToken}/>
              <Input name={"type"} type={"hidden"} defaultValue={isLogin?"login":"register"}/>
              {!isLogin&&<Input name={"name"} type={"text"} placeholder={"Nombre..."}/>}
              {!isLogin&&<Input name={"profilePic"} type={"text"} placeholder={"Profile pic..."}/>}
              <Input name={"email"} type={"email"} placeholder={"Email..."}/>
              <Input name={"password"} type={"pasword"} placeholder={"Password..."}/>
              {!isLogin&&<Input name={"confirmPassword"} type={"pasword"} placeholder={"Confirm Password..."}/>}
              <button className='bg-slate-900 text-white p-3 rounded hover:bg-yellow-100 hover:text-black mt-5' type="submit">{isLogin?"Iniciar sesión":"Registrar"}</button>
          </form>

          <form className='flex justify-center text-white' action='/api/auth/signin/google' method='POST'>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <button className='bg-slate-900 p-3 rounded hover:bg-yellow-100 hover:text-black' type="submit"><AiFillGoogleCircle className='w-10 h-10 inline-block'/> Inicia sesión con Google</button>
          </form>
          {error&&<div className='bg-yellow-300'>
            <p>Revisa tus credenciales</p>
          </div>
            }
        </div>
        
    </>
  )
}
