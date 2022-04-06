import axios from 'axios'
import { getCookie } from 'cookies-next'
import React from 'react'

export async function getServerSideProps({params,query,req,res}){

    const secure = req.connection.encrypted

    console.log(getCookie("userID",{ req, res }))
    
    const url = `${secure?"https":"http"}://${req.headers.host}/api/products/${params.idProduct}`


    
    const {data:producto} = await axios.get(url)

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
