// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"


// export default withAuth(
//     function middleware(req){
//         console.log("1",req.nextUrl.pathname);
//         console.log("2",req.nextauth.token.role);

//         if(req.nextUrl.pathname.startsWith("/membership/signin") && req.nextauth.token.role !="admin"){
//             return NextResponse.rewrite(new URL("/test"),req.url)
//         }
//     },
//     {
//        callbacks:{
//         authorized: ({token}) => !!token,
//        }
//     }
// )

// export const config = {matcher : ["/membership/signin"]}

