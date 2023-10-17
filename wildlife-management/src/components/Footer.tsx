'use client';

import Link from 'next/link'
import { useTranslations } from 'use-intl';

export default function Footer() {
    const t = useTranslations('Footer')
    return (
        <main>
            <div className='uppercase w-full bg-white p-10 border-t-2 flex flex-row gap-x-6 text-center tracking-[0.35em]'>

                <div className='cursor-default basis-1/3 flex flex-col gap-y-3'>
                    <header className=' font-semibold text-2xl'>{t("logo.title")}</header>
                    <div className='font-light'>{t("logo.description")}</div>
                </div>

                <div className='basis-1/3 flex flex-col gap-y-3'>
                    <header className='cursor-default font-semibold text-2xl'>{t("site_map.title")}</header>
                    <Link href='/' className='font-light tracking-wide'>{t("site_map.page1")}</Link>
                    <Link href='/support' className='font-light tracking-wide'>{t("site_map.page2")}</Link>
                </div>

                <div className='basis-1/3 flex flex-col gap-y-3'>
                    <header className='cursor-default font-semibold text-2xl'>{t("connect.title")}</header>
                    <div className='mx-auto flex flex-row gap-x-3'>
                        <span>i</span>
                        <span>i</span>
                        <span>i</span>
                    </div>
                    <span className='font-light tracking-wide'>{t("connect.email")}</span>
                </div>
            </div>
        </main >
    )
}
