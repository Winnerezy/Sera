import { AuthButton } from "@/components/AuthButton"
import { createUser } from "@/lib/actions/auth-actions"
import Link from "next/link"

export default function Register() {

  return (
    <main className='w-full min-h-screen flex'>
      <section className='w-full min-h-screen flex flex-col items-center justify-center py-4'>
        <form  className='w-full max-w-[600px] h-[700px] flex flex-col self-center justify-center p-6 gap-y-8'>
          <h3 className="text-3xl text-start font-[800] italic underline">SERA</h3>
          <h1 className="text-4xl font-bold">Register</h1>
          <p className="text-md tracking-wider">Please fill in your details</p>
          <div className='flex gap-x-4 w-full'>
            <section className='flex flex-col gap-y-2 max-w-[400px] w-full'>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name='firstname' className='w-full flex-grow h-10 p-2 rounded-md outline-none' placeholder="Enter your first name"/>
            </section>
            <section className='flex flex-col gap-y-2 max-w-[400px] w-full'>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name='lastname' className='w-full max-w-[400px] h-10 p-2 rounded-md outline-none' placeholder="Enter your last name"/>
            </section>
          </div>
          <div className='flex flex-col gap-x-4 gap-y-8 w-full'>
            <section className='flex flex-col gap-y-2 w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='w-full flex-grow h-10 p-2 rounded-md outline-none' placeholder="Enter your email"/>
            </section>
            <section className='flex flex-col gap-y-2 w-full'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='w-full h-10 p-2 rounded-md outline-none' placeholder="Enter your password" />
            </section>
            <section className='flex flex-col gap-y-2 w-full'>
              <label htmlFor="password">Bio</label>
              <input type="text" name='bio' className='w-full h-10 p-2 rounded-md outline-none' placeholder="Write something about your self" maxLength={50} />
            </section>
          <AuthButton formAction={createUser} type="Register"/>
       <p className="text-center">Have an account ? <Link href={'/login'} className="text-[var(--link-text)]">Login</Link></p>          </div>
        </form>
      </section>
      <section className='hidden xl:flex w-full min-h-screen bg-[var(--secondary-bg)]'>

      </section>
    </main>
  )
}
