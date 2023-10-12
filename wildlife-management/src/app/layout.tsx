import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wildlife Monitoring',
  description: 'Ladera del Mar is committed to maintaining monkey corridors. Protecting and maintaining connectivity we allow the movement of wildlife throughout the project.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* BODY */}
        {children}

        {/* FOOTER */}
        <div className='w-full bg-white p-10 border-t-2 border-neutral-400 flex flex-row gap-x-6 text-center tracking-[0.35em]'>

          {/* LOGO */}
          <div className='cursor-default basis-1/3 flex flex-col gap-y-3'>
            <header className=' font-semibold text-2xl'>LOGO</header>
            <div className='font-light'>WILDLIFE MANAGEMENT</div>
          </div>

          {/* SITE MAP */}
          <div className='basis-1/3 flex flex-col gap-y-3'>
            <header className='cursor-default font-semibold text-2xl'>SITE MAP</header>
            <Link href='/' className='font-light tracking-wide'>HOMEPAGE</Link>
            <Link href='/support_us' className='font-light tracking-wide'>SUPPORT US</Link>
          </div>

          {/* CONNECT */}
          <div className='basis-1/3 flex flex-col gap-y-3'>
            <header className='cursor-default font-semibold text-2xl'>CONNECT</header>
            <div className='mx-auto flex flex-row gap-x-3'>
              <span>i</span>
              <span>i</span>
              <span>i</span>
            </div>
            <span className='font-light tracking-wide'>email@email.com</span>
          </div>
        </div>



      </body >
    </html >
  )
}
