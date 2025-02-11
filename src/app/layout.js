import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className=" max-w-[1336px] min-h-screen my-0 mx-auto py-0 px-14 flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
