import { NextResponse } from "next/server";
import { DataSetProducts } from "@/dataset/products";

export async function GET(){

    const data = DataSetProducts

    return NextResponse.json(data,{status : 200})

}