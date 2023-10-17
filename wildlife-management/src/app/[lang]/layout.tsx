import type { Metadata } from 'next'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import Link from 'next/link'
import Header from 'components/Header';

import "global.css"
import Footer from 'components/Footer';


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
          <Footer />


        </NextIntlClientProvider>
      </body >
    </html >
  )
}
