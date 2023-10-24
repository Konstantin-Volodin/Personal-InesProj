// INITIALIZATION
import { ReactNode, useEffect } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import "global.css"
import Header from 'components/Header';
import Footer from 'components/Footer';
import { db } from 'firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { CMSProvider } from 'app/CMSProvider';

const font = Inter({ subsets: ['latin'] })


// STATIC PAGE GENERATION
type Props = { children: ReactNode; params: { lang: string }; };
export async function generateStaticParams() {
  let languagesSnap = await getDoc(doc(db, 'layout', 'languages'))
  if (languagesSnap.exists()) {
    let languages = languagesSnap.data()['list']
    return languages.map((key: any) => ({ lang: key }))
  }
}

// MULTI LANGUAL METADATA
export const metadata: Metadata = {
  title: 'Wildlife Monitoring',
  description: 'Ladera del Mar is committed to maintaining monkey corridors. Protecting and maintaining connectivity we allow the movement of wildlife throughout the project.',
}

// LAYOUT
export default async function LocaleLayout({ children, params: { lang } }: Props) {

  return (
    <html lang={lang}>
      <body className={font.className} suppressHydrationWarning={true}>

        <CMSProvider locale={lang}>


          {/* HEADER */}
          <Header />

          {/* BODY */}
          {children}

          {/* FOOTER */}
          <Footer />

        </CMSProvider>
      </body >
    </html >
  )
}
