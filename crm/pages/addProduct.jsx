import axios from 'axios'
import React from 'react'

export default function AddProduct() {

    const add = (event) =>{
        event.preventDefault()
        axios.post("/api/products/one",{
            name:event.target.name.value,
            price:Number.parseFloat(event.target.price.value),
            description:event.target.description.value,
            img:event.target.img.value,
        }).then(res=>{
            console.log(res)
        })
    }
  return (
    <div>
        <form onSubmit={add}>
            <input className='border border-black' name='name' type="text" />
            <input className='border border-black' name='price' type="text" />
            <input className='border border-black' name='description' type="text" />
            <input className='border border-black' name='img' type="text" />
            <button>Enviar</button>
        </form>
    </div>
  )
}
