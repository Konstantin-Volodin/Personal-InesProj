'use client';

import Link from 'next/link'
import { ReactNode } from 'react';
import { useTranslations } from 'use-intl';


interface Props { children: ReactNode }
export default function HeaderDescription(props: Props) {
    return (
        <div className='w-full 
            flex flex-col gap-y-6
            font-light tracking-tight 
            text-sm sm:text-sm md:text-base lg:text-lg 2xl:text-xl'
        >
            {props.children}
        </div>
    )
}
