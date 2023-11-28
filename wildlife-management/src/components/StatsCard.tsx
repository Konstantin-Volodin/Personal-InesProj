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
        fetchImage()
    }, [])

    return (
        <div className='w-28 sm:w-36 flex flex-col drop-shadow-xl place-items-center'>

            <div className='w-full h-28 sm:h-36 border-4 border-slate-700 mb-1 bg-no-repeat bg-cover bg-center bg-top'
                style={{ backgroundImage: 'url(' + img + ')' }}
            />

            <span className='w-full text-center font-light text-lg sm:text-lg md:text-lg lg:text-xl 2xl:text-2xl'>
                {raw.Homepage.impact.cards[props.identifier].stat}
            </span>

            <span className='w-full text-center font-medium text-sm sm:text-sm md:text-sm lg:text-md 2xl:text-md uppercase tracking-wider'>
                {raw.Homepage.impact.cards[props.identifier].text}
            </span>

        </div>
    )
}
