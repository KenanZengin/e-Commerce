import { NextResponse } from "next/server";
import connectMongo from "@/database/conn";
import Users from "@/models/userSchema";

export async function POST(request){

    connectMongo().catch(error => NextResponse.json({error : "Database Connection Failed...!"}));

    const body = await request.json()
    if(!body) return NextResponse.json({message : "data not found...!"},{status: 404})

    const {name,email,password,accept} = body
    const checkexistingMail = await Users.findOne({email})
    const checkexistingName = await Users.findOne({name})
    if(checkexistingName || checkexistingMail) return NextResponse.json({message : "User already exists...!"},{status : 422})

    Users.create({name,email,password,accept})
    

    return NextResponse.json(body,{status : 201});
}