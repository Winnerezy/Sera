import { BottomBar } from '@/components/BottomBar'
import '../../themes/globals.css'
import { Sidebar } from '@/components/SideBar'
export const metadata = {
  metadataBase: new URL('https://postgres-drizzle.vercel.app'),
  title: 'HOme',
  description:
    'A Student Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex'>
        <Sidebar/>
        <main className="lg:ml-[90px] lg:flex-1 w-full min-h-screen mb-[70px] lg:mb-0">
          {children}
        </main>
       <BottomBar/>
      </body>
    </html>
  )
}
