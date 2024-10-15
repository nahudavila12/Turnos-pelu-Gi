import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Peluquería Gisela',
  description: 'Donde la belleza se encuentra con la experiencia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
