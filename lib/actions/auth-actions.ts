'use server'

import { redirect } from "next/dist/server/api-utils"
import { login, register } from "../auth/auth"

export const createUser = async(formData: FormData) => {
    const data = {
        // using as string to parse the data to the register as all data is required not null or undefined
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      bio: formData.get('bio') as string
    }
    await register(data)
  }

export const loginUser = async(formData: FormData) => {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    const user = await login(data)
    if(!user){
      return
    }
  }