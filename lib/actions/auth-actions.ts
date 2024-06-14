'use server'

import { redirect } from "next/navigation"
import { login, register } from "../auth/auth"
import { UsersTable } from "../schemas/schema"
import { createSession } from "../sessons"
import { eq } from "drizzle-orm"
import { db } from "../schemas/drizzle"
import bcrypt from "bcrypt"

export const createUser = async(formData: FormData) => {
    const data = {
        // using as string to parse the data to the register as all data is required not null or undefined
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      bio: formData.get('bio') as string
    }

    let success = false
    try {
      const saltRounds = 10
      let user = data
      const password = user.password
      const hashpassword = await bcrypt.hash(password, saltRounds)
      user.password = hashpassword
      console.log(user)
      await db.insert(UsersTable).values(user).returning()
      await createSession(user.firstname)
      success = true
      } catch (error) {
        console.log(error)
    } finally {
      if(success){
        redirect('/dashboard')
      }
    }
  }

export const loginUser = async(formData: FormData) => {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    let success = false
    try {
      const result = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, data.email));

      if (result.length === 0) {
          console.log('Invalid');
          return;
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(data.password, user.password);

      if (isMatch) {
          console.log('Login successful:', user);
      } else {
          console.log('Invalid credentials');
          return
      }
      await createSession(user.firstname)

      success = true
      } catch (error) {
        console.log(error)
    } finally {
      if(success){
        redirect('/dashboard')
      }
    }
        
        
  }