import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/sessons";
import { redirect } from "next/navigation";
import { JWTPayload } from "jose";

interface CustomJwtPayload extends JWTPayload {
    userId: string
}

export const middleware = async(req: NextRequest) => {
    try {
        const res = NextResponse.next()
        const session = await getSession()
        
        if(!session && req.nextUrl.pathname === '/dashboard'){
            return NextResponse.redirect(new URL('/login', req.url));
             
        }
        const { userId }: CustomJwtPayload = session as CustomJwtPayload

        res.headers.set('userId', userId)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const config = {
    matchers: ['/dashboard']
}
