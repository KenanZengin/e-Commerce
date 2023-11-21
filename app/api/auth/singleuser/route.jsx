import { NextResponse } from "next/server";
import connectMongo from "@/database/conn";
import Users from "@/models/userSchema";

export async function GET(request){

    connectMongo().catch((error) => NextResponse.json({error : "connection failed"},{status:404}))
    
    const {searchParams} = new URL(request.url)
    const user_name = searchParams.get("user_name")
    

    try{

        const user = await Users.findOne({name : user_name})

        if(!user) return NextResponse.json({error : "Data not found"},{status : 404})

        return NextResponse.json(user,{status : 200})
        
    } catch(error){
        NextResponse.json({message : error},{status : 404})
    }


}