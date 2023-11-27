'use client'

import { useContext, useEffect, useState } from "react";
import { store } from "firebaseConfig";
import { CMSContext } from "app/CMSProvider";
import DOMPurify from 'isomorphic-dompurify';
import { ref, getDownloadURL } from "firebase/storage";
import Image from "next/image"

type Props = { identifier: string };
export default function ProjectCard(props: Props) {
    const { raw } = useContext(CMSContext);

    // Loads Image
    const [img, SetImg] = useState("")
    useEffect(() => {
        const fetchImages = async function () {
            const storageRef = ref(store, "ProjectCards")
            const imageRef = ref(storageRef, raw.Homepage.projects.cards[props.identifier].img)
            getDownloadURL(imageRef).then(url => SetImg(url))
        }
        fetchImages()
    }, [])

    return (
        <a href={raw.Homepage.projects.cards[props.identifier].link} target="_blank">
            <div
                className='w-full lg:w-[400px] xl:w-[600px] p-6 
                    flex flex-col gap-6 place-items-center
                    bg-slate-100 drop-shadow-lg
                    transition-all border-2 hover:border-slate-700 hover:scale-110'>

                {/* TITLE */}
                <span className='font-medium tracking-wider text-md sm:text-md md:text-lg lg:text-xl 2xl:text-xl'>
                    {raw.Homepage.projects.cards[props.identifier].name}
                </span>

                {/* IMAGE */}
                <div className='aspect-square  
                    w-48 h-48
                    bg-no-repeat bg-cover bg-center bg-top 
                    border-slate-700 border-2'
                    style={{ backgroundImage: 'url(' + img + ')' }}>
                </div>


                {/* DESCRIPTION */}
                <div className='
                w-fit font-light tracking-tight flex flex-col gap-y-3
                text-sm sm:text-sm md:text-sm lg:text-md 2xl:text-md'
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw.Homepage.projects.cards[props.identifier].description) }}
                />

            </div >
        </a>
    )
}
