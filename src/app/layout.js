import { Hind_Siliguri,} from 'next/font/google'
import './globals.css'

const hind_Siliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Grontho Bilash - A Bookish Platform',
  description: 'we talk about books in different languages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hind_Siliguri.className}>{children}</body>
    </html>
  )
}
