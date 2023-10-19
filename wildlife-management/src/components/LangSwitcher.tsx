'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';
import { Menu } from "@headlessui/react"

export default function LangSwitcher({ languages }: { languages: string[] }) {

    const t = useTranslations('LangSwitcher');
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(locale: string) {
        startTransition(() => { router.replace(pathname, { locale: locale }); });
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
                            {t('locale', { locale: String(cur) })}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    );
}
