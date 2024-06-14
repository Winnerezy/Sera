import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
    try {
        const userData = await req.json()
        return new NextResponse(JSON.stringify(userData))
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500
        })
    }
}