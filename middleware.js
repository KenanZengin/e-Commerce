import { NextResponse } from "next/server"
export {default} from "next-auth/middleware"


export function middleware(request){
   
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/membership/signin'  ||  path === '/membership/signup'
    
    const token = request.cookies.get('__Secure-next-auth.session-token')?.value
    
    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/",request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/membership/signin",request.nextUrl))
    }
}

export const config = {
    matcher : [
        '/profile/:path*',
        '/membership/signin',
        '/membership/signup'
    ]
}



