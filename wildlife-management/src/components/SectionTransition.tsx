'use client';

import { ReactNode } from 'react';
export default function SectionTransition({ direction }: { direction: string }) {
    if (direction === 'top') {
        return (<svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-full w-full'>
            <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" />
        </svg>)
    }

    else if (direction == 'bottom') {
        return (<svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-full w-full'>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
        </svg>)
    }
    else { return (< ></>) }
}
