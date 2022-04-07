import axios from 'axios'
import { getCookie } from 'cookies-next'
import React from 'react'

export async function getServerSideProps({params,query,req,res}){

    const secure = req.connection.encrypted

    const idUser = getCookie("userID",{ req, res })
    const email = getCookie("email",{ req, res })
    
    const url = `${secure?"https":"http"}://${req.headers.host}/api/products/${params.idProduct}`
    const urlActivity = `${secure?"https":"http"}://${req.headers.host}/api/activity/product`


    
    const {data:producto} = await axios.get(url)
    const activity = await axios.post(urlActivity,{
      idUser,
      email,
      idProduct:params.idProduct
    })

    return {
        props:{
            producto
        }
    }
}

export default function Producto({producto}) {
  return (
    <div>
        {console.log(producto)}
    </div>
  )
}
