import { redirect } from "next/navigation"
import { db } from "../schemas/drizzle"
import { UsersTable } from "../schemas/schema"
import { and, eq } from "drizzle-orm"
import bcrypt from "bcrypt"
export const register = async(userData: NewUser) => {
    try {
        const saltRounds = 10
        let user = userData
        const password = user.password
        const hashpassword = await bcrypt.hash(password, saltRounds)
        user.password = hashpassword
        console.log(user)
        await db.insert(UsersTable).values(user).returning()
    } catch (error) {
        console.log(error)
    }
}

export const login = async(userData: RegisteredUser) => {
    try {
        const result = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.email, userData.email));

        const user = result[0];

        const isMatch = await bcrypt.compare(userData.password, user.password);

        if (isMatch) {
            console.log('Login successful:', user);
        } else {
            console.log('Invalid credentials');
        }
    if (result.length === 0) {
        console.log('Invalid');
        return;
    }
        return user
    } catch (error) {
        console.log(error)
    }
}