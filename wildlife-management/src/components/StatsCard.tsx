'use client'

import { useContext, useEffect, useState } from "react";
import { store } from "firebaseConfig";
import { CMSContext } from "app/CMSProvider";
import { ref, getDownloadURL } from "firebase/storage";

type Props = { identifier: string };
export default function StatsCard(props: Props) {
    const { raw } = useContext(CMSContext);

    // Loads Image
    const [img, SetImg] = useState("")
    useEffect(() => {
        const fetchImage = async function () {
            const storageRef = ref(store, "StatsCards")
            const imageRef = ref(storageRef, raw.Homepage.impact.cards[props.identifier].img)
            getDownloadURL(imageRef).then(url => SetImg(url))
        }
        fetchImage().then(() => { console.log(img) })
    }, [])

    return (
        <div className='flex flex-col p-2 drop-shadow-xl'>
            <div className='w-48 h-48 border-2 border-slate-700 mb-2 bg-no-repeat bg-cover bg-center bg-top'
                style={{ backgroundImage: 'url(' + img + ')' }}
            />
            <div className='flex flex-col'>
                <span className='w-48 text-center font-light text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>
                    {raw.Homepage.impact.cards[props.identifier].stat}
                </span>
                <span className='w-48 text-center font-medium text-sm sm:text-sm md:text-sm lg:text-md 2xl:text-lg uppercase tracking-wider'>
                    {raw.Homepage.impact.cards[props.identifier].text}
                </span>
            </div>
        </div>
    )
}
