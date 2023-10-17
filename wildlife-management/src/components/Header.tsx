'use client';

import Link from 'next/link'
import { useTranslations, useLocale } from 'use-intl';
import LangSwitcher from './LangSwitcher';

export default function Header({ languages }: { languages: string[] }) {
    const t = useTranslations('Header')
    const locale = useLocale()

    console.log(t('brand'))
    return (
        <main>
            <div className='h-20 w-full bg-white px-10 py-4  border-b-2 whitespace-nowrap font-medium  flex flex-row gap-x-6 place-items-center tracking-widest'>
                <span className='m-auto'><text>{t('brand')}</text></span>
                <div className='basis-full'></div>
                <Link href='/' className='py-2 px-3 m-auto bg-neutral-0 hover:bg-neutral-100 focus:outline-none active:bg-neutral-200 uppercase'>{t('homepage')}</Link>
                <Link href='/support' className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>{t('support')}</Link>
                <LangSwitcher languages={languages} />
                {/* <button className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>{locale}</button> */}
            </div>
        </main >
    )
}
