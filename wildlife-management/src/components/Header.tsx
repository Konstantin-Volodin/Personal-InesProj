'use client';

import Link from 'next/link'
import { Disclosure } from '@headlessui/react';
import LangSwitcher from './LangSwitcher';
import { useContext } from 'react';
import { CMSContext } from 'app/structureProvider';

export default function Header() {
    const { locale, raw, done } = useContext(CMSContext);

    return (
        <main className='w-full h-20 border-b-2  bg-white tracking-widest whitespace-nowrap font-medium z-10'>

            {/* LARGE SCREEN */}
            <div className='hidden md:flex flex-row gap-x-6 place-items-center px-10 py-4'>
                <span className='m-auto'>{raw.Header.brand}</span>
                <div className='basis-full'></div>
                <Link href={"/" + locale + "/"} className='py-2 px-3 m-auto bg-neutral-0 hover:bg-neutral-100 focus:outline-none active:bg-neutral-200 uppercase'>{raw.Header.homepage}</Link>
                <Link href={"/" + locale + "/support/"} className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>{raw.Header.support}</Link>
                <LangSwitcher />
            </div>


            {/* SMALL SCREEN */}
            <Disclosure as='div' className='block md:hidden'>
                <div className='flex flex-row gap-x-6 place-items-center px-10 py-4'>
                    <span className='m-auto'>{raw.Header.brand}</span>
                    <div className='basis-full'></div>
                    <Disclosure.Button className="py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </Disclosure.Button>
                </div>

                <Disclosure.Panel className="p-4 flex bg-white w-full relative z-10 border-t-2">
                    <div className='flex flex-col w-full place-items-center gap-y-4'>
                        <Link href={locale + "/"} className='py-2 px-3 m-auto bg-neutral-0 hover:bg-neutral-100 focus:outline-none active:bg-neutral-200 uppercase'>{raw.Header.homepage}</Link>
                        <Link href={locale + "/support/"} className='w py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>{raw.Header.support}</Link>
                        <LangSwitcher />
                    </div>
                </Disclosure.Panel>
            </Disclosure>

        </main >
    )
}
