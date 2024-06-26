import '../themes/globals.css'
export const metadata = {
  metadataBase: new URL('https://postgres-drizzle.vercel.app'),
  title: 'Sera',
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
      <body>{children}</body>
    </html>
  )
}
