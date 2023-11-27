'use client';

import { useContext, useTransition } from 'react';
import { Menu } from "@headlessui/react"
import { CMSContext } from 'app/CMSProvider';
import { useRouter, usePathname } from 'next/navigation';

export default function LangSwitcher() {

    const { locale, langs, raw, done } = useContext(CMSContext)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    let pathName = usePathname()

    function onSelectChange(new_locale: string) {
        startTransition(() => {
            pathName = pathName.replace("/" + locale + "/", "/" + new_locale + "/")
            router.push(pathName);
        });
    }

    return (
        <Menu as='div' className='relative z-10'>
            <Menu.Button className='hover:scale-110 w-20 py-2 px-3 m-auto bg-green-300 hover:bg-green-400 outline-none active:bg-green-500 uppercase transition-all'>
                {locale}
            </Menu.Button>

            <Menu.Items className='border-slate-800 border-2 bg-slate-50 flex flex-col p-2 absolute right-0 transition-all'>
                {langs.list.map((cur: any) => {
                    return (
                        <Menu.Item key={cur}
                            as='button' onClick={() => { onSelectChange(cur) }}
                            className='hover:scale-110 py-2 px-4 m-auto outline-none bg-slate-0 hover:bg-slate-200 active:bg-slate-300 transition-all'>
                            {done && langs.translation[cur]}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    );
}
