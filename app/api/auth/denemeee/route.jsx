import { NextResponse } from "next/server";
import connectMongo from "@/database/conn";
import Users from "@/models/userSchema";

export async function GET(){

    connectMongo().catch(error => NextResponse.json({error : "connection failed"},{status:404}))

    try{

        const users = await Users.find({})

        if(!users) return NextResponse.json({error : "Data not found"},{status : 404})

        return NextResponse.json(users,{status : 200})
        
    } catch(error){
        NextResponse.json({message : error},{status : 404})
    }


}