import prisma from "../../../libs/prisma"

export default async function one(req,res){
    const product = await prisma.product.findFirst({
        where:{
            id:req.query.idProduct
        }
    })

    return res.json(product)
}