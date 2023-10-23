'use client';

import { useContext, useTransition } from 'react';
import { Menu } from "@headlessui/react"
import { CMSContext } from 'app/structureProvider';
import { useRouter, usePathname } from 'next/navigation';

export default function LangSwitcher() {

    const { locale, languages, raw, done } = useContext(CMSContext)
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
        <Menu as='div' className='relative z-10 w-24'>
            <Menu.Button className='w-24 py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>
                {locale}
            </Menu.Button>

            <Menu.Items className='border-2 bg-white flex flex-col p-1 absolute right-0'>
                {languages.map((cur: any) => {
                    return (
                        <Menu.Item key={cur}
                            as='button' onClick={() => { onSelectChange(cur) }}
                            className='py-2 px-3 m-auto bg-neutral-0 hover:bg-neutral-100 focus:outline-none active:bg-neutral-200'>
                            {done && raw.LangSwitcher[cur]}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    );
}
