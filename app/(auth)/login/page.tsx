import { loginUser } from "@/lib/actions/auth-actions"
import Link from "next/link"

export default function Login() {

  return (
    <main className='w-full min-h-screen flex'>
      <section className='w-full min-h-screen flex flex-col gap-y-4 items-center justify-center py-4'>
        <form  className='w-full max-w-[600px] h-[700px] flex flex-col self-center justify-center p-6 gap-y-8'>
          <h3 className="text-3xl text-start font-[800] italic underline">SERA</h3>
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-md tracking-wider">Please fill in your details</p>
          <div className='flex flex-col gap-x-4 gap-y-8 w-full'>
            <section className='flex flex-col gap-y-2 w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='w-full flex-grow h-10 p-2 rounded-md outline-none' placeholder="Enter your email"/>
            </section>
            <section className='flex flex-col gap-y-2 w-full'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='w-full h-10 p-2 rounded-md outline-none' placeholder="Enter your password" />
            </section>
          </div>
          <button formAction={loginUser}className='w-36 h-10 rounded-md font-semibold text-md bg-[var(--button-bg)] p-2 self-center tracking-wide hover:bg-[var(--button-hover)]'>Login</button>
        <p className="text-center">Don&apos;t an account ? <Link href={'/register'} className="text-[var(--secondary-text)]">Login</Link></p>
        </form>
      </section>
      <section className='hidden xl:flex w-full min-h-screen bg-[var(--secondary-bg)]'>

      </section>
    </main>
  )
}
