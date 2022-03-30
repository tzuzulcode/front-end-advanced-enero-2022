import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials, req) {
                await prisma.$connect()
                console.log(credentials)

                const allUsers = await prisma.user.findMany()

                console.log(allUsers)
                if(credentials.type==="register"){
                  const userByEmail = await prisma.user.findUnique({
                    where:{
                      email:credentials.email
                    }
                  })

                  console.log(!userByEmail)

                  if(!userByEmail){
                    console.log("true!!!!")
                    const user = await prisma.user.create({
                      data:{
                        email:credentials.email,
                        password:credentials.password,
                        name:credentials.name,
                        profilePic:credentials.profilePic, 
                      }
                    })

                    console.log("User:",user)

                    return {
                        email:credentials.email,
                        name:credentials.name,
                        profilePic:credentials.profilePic,
                    }
                  }

                  
                  
                }

                return null
                
      
          
                // if (user) {
                //   // Any object returned will be saved in `user` property of the JWT
                //   return user
                // } else {
                //   // If you return null then an error will be displayed advising the user to check their details.
                //   return null
          
                //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                // }
              }
        })
    ]
})