import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/sessons";
import { redirect } from "next/navigation";

export const middleware = async(req: NextRequest) => {
    try {
        const res = NextResponse.next()
        const session = await getSession()
        
        if(!session && req.nextUrl.pathname === '/dashboard'){
            return NextResponse.redirect(new URL('/login', req.url));
             
        }
        const { userId } = session

        res.headers.set('userId', userId)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const config = {
    matchers: ['/dashboard']
}
