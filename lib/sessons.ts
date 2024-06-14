import 'server-only'
import { jwtDecrypt, JWTPayload, jwtVerify, SignJWT } from "jose"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
const key = new TextEncoder().encode(process.env.SECRET)

const cookie = {
    name: 'session',
    options: {
        httpOnly: true,
        secure: true,
        sameSite: true,
        path: '/'
    },
    duration: 24 * 60 * 60 * 1000
}

export const encrypt = async(payload: JWTPayload) =>{
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key)
}

export const createSession = async(userId: string) =>{

        const expires = new Date(Date.now() + cookie.duration)
        const session = await encrypt({ userId, expires })
    
        cookies().set(cookie.name, session, { ...cookie.options, expires })
        return userId
}

export const getSession = async() =>{
    const session = cookies().get('session')?.value
    if(!session) return null
    return await decryptSession(session)
}

export const decryptSession = async(session: string) => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256']
        })
        return payload
    } catch (error) {
        console.log('Token decryption error', error)
        return null
    }
}

export const deleteSession = () =>{

    cookies().delete('session')
    // redirect('/login')
}

