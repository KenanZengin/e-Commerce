import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import connectMongo from "@/database/conn";
import Users from "@/models/userSchema";

export const authOptions = ({
    providers : [

        CredentialsProvider({
            name : "Credentials",
            async  authorize(credentials,req){
                connectMongo().catch(error => {error : "connection failed..."})

                const result = await Users.findOne({email : credentials.email})
                if(!result) throw new Error("no user find with email please sign up")

                return result 

            }
        })
    ],
    callbacks:{
        async jwt({token,user,session}){
            //console.log("jwt callback",{token, session, user})

            if(user){
                return{
                    ...token,
                    id : user._id,
                    name : user.name
                }
            }
            return token;
        },
        async session({session,token,user}){
            //console.log("session callback",{session, token, user})
            return {
                ...session,
                user : {
                    ...session.user,
                    id : token.id,
                    name : token.name
                }
            }
            return session
        }
    },
    session : {
      strategy : "jwt",  
    },
    secret : process.env.NEXTAUTH_SECRET
})

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}