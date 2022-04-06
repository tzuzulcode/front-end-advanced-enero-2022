import { PrismaClient } from '@prisma/client'
import { getCookie } from 'cookies-next'
const prisma = new PrismaClient()

export default async function one(req,res){
    const product = await prisma.product.findFirst({
        where:{
            id:req.query.idProduct
        }
    })

    return res.json(product)
}