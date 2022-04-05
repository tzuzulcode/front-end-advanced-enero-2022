import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export default NextAuth({
    pages:{
      signIn:"/login",
      error:"/login"
    },
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials, req) {
                console.log(credentials)
                await prisma.$connect()

                if(credentials.type==="register"){
                  const userByEmail = await prisma.user.findUnique({
                    where:{
                      email:credentials.email
                    }
                  })

                  if(!userByEmail){
                    const user = await prisma.user.create({
                      data:{
                        email:credentials.email,
                        password:credentials.password,
                        name:credentials.name,
                        profilePic:credentials.profilePic, 
                      }
                    })

                    return {
                        email:credentials.email,
                        name:credentials.name,
                        profilePic:credentials.profilePic,
                    }
                  }
                  
                }else if(credentials.type==="login"){
                  const user = await prisma.user.findUnique({
                    where:{
                      email:credentials.email
                    }
                  })

                  if(!user || user.password!==credentials.password){
                    return null
                  }

                  return {
                    email:user.email,
                    name:user.name,
                    profilePic:user.profilePic,
                  }
                }

                return null
              }
        })
    ]
})