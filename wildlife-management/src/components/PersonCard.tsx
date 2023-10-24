'use client'

import { useContext, useEffect, useState } from "react";
import { store } from "firebaseConfig";
import { CMSContext } from "app/CMSProvider";
import DOMPurify from 'isomorphic-dompurify';
import { ref, getDownloadURL } from "firebase/storage";

type Props = { identifier: string };
export default function PersonCard(props: Props) {
    const { raw } = useContext(CMSContext);

    // Loads Image
    const [img, SetImg] = useState("")
    useEffect(() => {
        const fetchImage = async function () {
            const storageRef = ref(store, "PersonCards")
            const imageRef = ref(storageRef, raw.Homepage.about.cards[props.identifier].img)
            getDownloadURL(imageRef).then(url => SetImg(url))
        }
        fetchImage().then(() => { console.log(img) })
    }, [])

    return (
        <div className='flex flex-col sm:flex-row md:flew-row lg:flex-row xl:flex-row 2xl:flex-row place-items-center bg-slate-50 gap-6 p-6 drop-shadow-lg border-slate-700'>

            {/* IMAGE */}
            <div className='flex flex-col place-items-center gap-y-2'>
                <div className='w-60 h-60 md:w-96 sm:h-96 bg-no-repeat bg-cover bg-center bg-top rounded-full border-slate-700 border-2'
                    style={{ backgroundImage: 'url(' + img + ')' }}
                />
                <div className='flex flex-col place-items-center'>
                    <span className='font-medium tracking-wider text-md sm:text-md md:text-lg lg:text-xl 2xl:text-2xl'>
                        {raw.Homepage.about.cards[props.identifier].full_name}
                    </span>
                    <span className='font-light tracking-wider text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                        {raw.Homepage.about.cards[props.identifier].position}
                    </span>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className='w-fit xl:w-[700px] font-light tracking-tight flex flex-col gap-y-3
                text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-lg'
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw.Homepage.about.cards[props.identifier].description) }}
            />

        </div>
    )
}
