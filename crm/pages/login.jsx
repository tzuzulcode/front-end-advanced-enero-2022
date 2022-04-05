import React, { useState } from 'react'
import {useSession,signOut,getCsrfToken} from 'next-auth/react'
import {AiFillGithub} from "react-icons/ai"
import {AiFillGoogleCircle} from "react-icons/ai"
import Input from '../components/input'
import { useRouter } from 'next/router'
import {Formik} from 'formik'
import axios from "axios"

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

    const auth = (data,{setSubmitting})=>{
      console.log(data)

      axios.post("/api/auth/callback/credentials",data,{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }).then(data=>{
        console.log(data)
        setSubmitting(false)
        //window.location.href = data.request.responseURL
      }).catch(error=>{
        console.log(error)
      })
      
    }


  return (
    <>
        <div className='bg-gray-800 w-1/2 mx-auto p-10 mt-10 rounded-md'>
          <Formik
            initialValues={{
              csrfToken,
              type:isLogin?"login":"register",
              name:"",
              profilePic:"",
              email:"",
              password:"",
              confirmPassword:""
            }}
            validate={(values)=>{
              return {}
            }}

            onSubmit={auth}
          >
            {({values,handleChange,isSubmitting,handleSubmit})=>{
              return <form className='flex flex-col' onSubmit={handleSubmit}>
                <Input name={"csrfToken"} type={"hidden"} onChange={handleChange} value={values.csrfToken} />
                <Input name={"type"} type={"hidden"} onChange={handleChange} value={values.type} />
                {!isLogin&&<Input name={"name"} type={"text"} placeholder={"Nombre..."} onChange={handleChange} value={values.name}/>}
                {!isLogin&&<Input name={"profilePic"} type={"text"} placeholder={"Profile pic..."} onChange={handleChange} value={values.profilePic}/>}
                <Input name={"email"} type={"email"} placeholder={"Email..."} onChange={handleChange} value={values.email}/>
                <Input name={"password"} type={"pasword"} placeholder={"Password..."} onChange={handleChange} value={values.password}/>
                {!isLogin&&<Input name={"confirmPassword"} type={"pasword"} placeholder={"Confirm Password..."} onChange={handleChange} value={values.confirmPassword}/>}
                <button disabled={isSubmitting} className='bg-slate-900 text-white p-3 rounded hover:bg-yellow-100 hover:text-black mt-5 disabled:bg-slate-700 disabled:hover:text-white' type="submit">{isLogin?"Iniciar sesión":"Registrar"}</button>
            </form>
            }}
          </Formik>
          <button onClick={()=>{setIsLogin(!isLogin)}}>Cambiar</button>
          

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
