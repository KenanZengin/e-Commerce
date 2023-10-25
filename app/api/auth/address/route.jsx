import { NextResponse } from "next/server";
import connectMongo from "@/database/conn";
import userAddress from "@/models/addressSchema";

export async function POST(request){

    connectMongo().catch(error => NextResponse.json({error : "Database Connection Failed...!"}));

    const body = await request.json()
    if(!body) return NextResponse.json({message : "data not found...!"},{status: 404})

    const {address} = body
    
   

    userAddress.create({address})
    

    return NextResponse.json(body,{status : 200});
}