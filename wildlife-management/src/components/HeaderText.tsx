'use client';

import Link from 'next/link'
import { ReactNode } from 'react';
import { useTranslations } from 'use-intl';


interface Props { children: ReactNode }
export default function HeaderText(props: Props) {
    return (
        <header className='
            font-bold tracking-[0.35em] uppercase 
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
        >
            {props.children}
        </header>
    )
}
