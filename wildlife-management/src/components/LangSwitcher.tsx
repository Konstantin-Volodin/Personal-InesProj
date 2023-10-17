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
        <Menu as='div' className='relative'>
            <Menu.Button className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500 uppercase'>
                {locale}
            </Menu.Button>

            <Menu.Items className='border-2 bg-white flex flex-col p-1 absolute right-0 '>
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
        // <div px={2} py={1} border='2px' borderColor={'charcoal.500'} w='fit-content'>
        //     <Menu>
        //         <MenuButton display={'inline-block'}>
        //             <StandardLink isexternal={false}>
        //                 <HStack><BiWorld /><Text display='inline'>{lang}</Text></HStack>
        //             </StandardLink>
        //         </MenuButton>

        //         <MenuList p={2} borderRadius={0}>
        //             {lang_options.map((key: string) => (
        //                 <MenuItem key={key} onClick={() => setLang(key)}>
        //                     <StandardLink isexternal={false}>{header.lang[key]}</StandardLink>
        //                 </MenuItem>
        //             ))}
        //         </MenuList>
        //     </Menu>
        // </div >
    );
}
