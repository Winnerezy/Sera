import '../../themes/globals.css'

export const metadata = {
  title: 'Auth',
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
      <body>
        {children}
      </body>
    </html>
  )
}
