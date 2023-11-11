import { NextResponse } from "next/server";
import { DataSetProducts } from "@/dataset/products";

export async function GET(request){

    const { searchParams } = new URL(request.url)
    const product_id = searchParams.get("id")
    const product = DataSetProducts.find((item) => item._id == product_id)

    if(!product) return NextResponse.json({message : "Product Not Found...!"},{status:404})
    

    return NextResponse.json(product,{status : 200})

}