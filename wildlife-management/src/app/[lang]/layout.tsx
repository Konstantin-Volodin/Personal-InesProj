import type { Metadata } from 'next'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import Link from 'next/link'
import Header from 'components/Header';

import "global.css"


const font = Inter({ subsets: ['latin'] })
type Props = { children: ReactNode; params: { lang: string }; };

export async function generateStaticParams() {
  let languages: string[] = (await import("localization/languages.json")).default
  return languages.map((key: string) => ({ key }))
}

// export const metadata: Metadata = {
//   title: 'Wildlife Monitoring',
//   description: 'Ladera del Mar is committed to maintaining monkey corridors. Protecting and maintaining connectivity we allow the movement of wildlife throughout the project.',
// }

export default async function LocaleLayout({ children, params: { lang } }: Props) {
  let languages: string[] = (await import("localization/languages.json")).default
  let translations = (await import(`localization/${lang}.json`)).default

  return (
    <html lang={lang} >
      <body className={font.className}>
        <NextIntlClientProvider locale={lang} messages={translations}>


          {/* HEADER */}
          <Header languages={languages} />


          {/* BODY */}
          {children}

          {/* FOOTER */}
          <div className='w-full bg-white p-10 border-t-2 flex flex-row gap-x-6 text-center tracking-[0.35em]'>

            <div className='cursor-default basis-1/3 flex flex-col gap-y-3'>
              <header className=' font-semibold text-2xl'>LOGO</header>
              <div className='font-light'>WILDLIFE MANAGEMENT</div>
            </div>

            <div className='basis-1/3 flex flex-col gap-y-3'>
              <header className='cursor-default font-semibold text-2xl'>SITE MAP</header>
              <Link href='/' className='font-light tracking-wide'>HOMEPAGE</Link>
              <Link href='/support' className='font-light tracking-wide'>SUPPORT US</Link>
            </div>

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


        </NextIntlClientProvider>
      </body >
    </html >
  )
}
