import { NextResponse } from "next/server";
import connectMongo from "@/database/conn";
import Users from "@/models/userSchema";

export async function POST(request){

    connectMongo().catch(error => NextResponse.json({error : "Database Connection Failed...!"}));

    const body = await request.json()
    const {name,email,password} = body

    if(!body) return NextResponse.json({message : "data not found...!"},{status: 404})

    const checkexisting = await Users.findOne({email})
    if(checkexisting) return NextResponse.json({message : "User already exists...!"},{status : 404})

    Users.create({name,email,password})

    return NextResponse.json(body,{status : 200});

}