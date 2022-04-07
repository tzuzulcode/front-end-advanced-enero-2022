import prisma from "../../../libs/prisma"

export default async function activityProduct(req,res){
    let user = await prisma.user.findFirst({
        where:{
            idProvider: req.body.idUser
        }
    })

    if(!user){
        user = await prisma.user.create({
            data:{
                idProvider:req.body.idUser,
                email:req.body.email,
                password:req.body.idUser
            }
        })
    }

    const userUpdate = await prisma.user.update({
        where:{
            id:user.id
        },
        data:{
            productIDs:{
                push:req.body.idProduct
            }
        }
    })

    // console.log(ObjectID(req.body.idUser))
    // console.log(ObjectID(req.body.idProduct))
    const product = await prisma.product.update({
        where:{
            id:req.body.idProduct
        },
        data:{
            userIDs:{
                push:user.id
            }
        }
    })

    console.log(userUpdate,product)
    return res.json({succes:true})
}