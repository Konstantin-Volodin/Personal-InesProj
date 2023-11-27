'use client';

import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react';
import LangSwitcher from './LangSwitcher';
import { useContext } from 'react';
import { CMSContext } from 'app/CMSProvider';

export default function Header() {
    const { locale, raw, done } = useContext(CMSContext);

    return (
        <main className='w-full h-20 bg-slate-50 border-b-2 border-slate-700 text-slate-900 tracking-widest whitespace-nowrap font-medium z-10 '>

            {/* LARGE SCREEN */}
            {done && (
                <div className='hidden md:flex flex-row gap-x-6 place-items-center px-10 py-4'>
                    <span className='m-auto'>{raw.Header.brand}</span>
                    <div className='basis-full'></div>
                    <Link href={"/" + locale + "/"} className='transition-all hover:scale-110 py-2 px-4 m-auto bg-slate-0 hover:bg-slate-200 outline-none active:bg-slate-300 uppercase'>{raw.Header.homepage}</Link>
                    <Link href={"/" + locale + "/support/"} className='transition-all hover:scale-110 py-2 px-4 m-auto bg-green-300 hover:bg-green-400 outline-none active:bg-green-500 uppercase'>{raw.Header.support}</Link>
                    <LangSwitcher />
                </div>
            )}


            {/* SMALL SCREEN */}
            {done && (
                <Disclosure as='div' className='block md:hidden h-20 bg-slate-50 border-b-2 border-slate-700 '>

                    {/* Disclosure Menu */}
                    <div className='flex flex-row gap-x-6 place-content-center px-10 py-4 h-full'>
                        <span className='m-auto'>{raw.Header.brand}</span>
                        <div className='basis-full'></div>
                        <Disclosure.Button className="py-2 px-3 m-auto bg-green-300 hover:bg-green-400 outline-none transition-all active:bg-green-500 uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </Disclosure.Button>
                    </div>

                    {/* Disclosure Contents */}
                    <Transition className="relative z-10 transition-all duration-300 bg-red-200 overflow-hidden"
                        enterFrom="transform max-h-0"
                        enterTo="transform max-h-96"
                        leaveFrom="transform max-h-96"
                        leaveTo="transform max-h-0"
                    >
                        <Disclosure.Panel className="p-4 flex bg-slate-50 w-full border-t-2 border-slate-700">
                            <div className='flex flex-col w-full place-content-center gap-y-4'>
                                <Link href={"/" + locale + "/"} className='transition-all hover:scale-110 py-2 px-4 m-auto bg-neutral-0 hover:bg-neutral-100 outline-none active:bg-neutral-200 uppercase transition-all'>{raw.Header.homepage}</Link>
                                <Link href={"/" + locale + "/support/"} className='transition-all hover:scale-110 py-2 px-4 m-auto bg-green-300 hover:bg-green-400 outline-none active:bg-green-500 uppercase transition-all'>{raw.Header.support}</Link>
                                <div className='m-auto w-min'><LangSwitcher /></div>
                            </div>
                        </Disclosure.Panel>
                    </Transition>

                </Disclosure>
            )}

        </main >
    )
}
