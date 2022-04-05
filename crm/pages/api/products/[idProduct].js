import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function one(req,res){
    const product = prisma.product.findFirst({
        where:{
            id:req.query.idProduct
        }
    })


    return res.json(product)
}