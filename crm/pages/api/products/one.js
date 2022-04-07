import prisma from "../../../libs/prisma"


export default async function one(req,res){
    console.log(req)
    if(req.method==="POST"){
        const product =await prisma.product.create({
            data:req.body
        })

        return res.json(product)
    }

}