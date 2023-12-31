'use client';

import { useState } from "react"


interface Props { text: string }
export default function ClickableText(props: Props) {
    return (
        <div className='w-fit relative 
            group flex flex-row place-content-center place-items-center gap-6
            font-light group-hover:font-normal '>
            <span
                onClick={() => navigator.clipboard.writeText(props.text)}
                className='transition-all tracking-wide group-hover:scale-110 group-active:font-medium' >
                {props.text}
            </span >

            <svg className="fill-slate-900 h-5 w-5 group-active:h-6 group-active:w-6  transition-all absolute -right-16 opacity-0 group-hover:opacity-100 " viewBox="0 0 36 36">
                <path d="M22.6,4H21.55a3.89,3.89,0,0,0-7.31,0H13.4A2.41,2.41,0,0,0,11,6.4V10H25V6.4A2.41,2.41,0,0,0,22.6,4ZM23,8H13V6.25A.25.25,0,0,1,13.25,6h2.69l.12-1.11A1.24,1.24,0,0,1,16.61,4a2,2,0,0,1,3.15,1.18l.09.84h2.9a.25.25,0,0,1,.25.25Z" />
                <path d="M33.25,18.06H21.33l2.84-2.83a1,1,0,1,0-1.42-1.42L17.5,19.06l5.25,5.25a1,1,0,0,0,.71.29,1,1,0,0,0,.71-1.7l-2.84-2.84H33.25a1,1,0,0,0,0-2Z" />
                <path d="M29,16h2V6.68A1.66,1.66,0,0,0,29.35,5H27.08V7H29Z" />
                <path d="M29,31H7V7H9V5H6.64A1.66,1.66,0,0,0,5,6.67V31.32A1.66,1.66,0,0,0,6.65,33H29.36A1.66,1.66,0,0,0,31,31.33V22.06H29Z"></path>
            </svg>
        </div >
    )
}
