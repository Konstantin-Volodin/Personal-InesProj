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
        fetchImage()
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
                    <span className='font-light tracking-wider text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl '>
                        {raw.Homepage.about.cards[props.identifier].position}
                    </span>

                    <a href={raw.Homepage.about.cards[props.identifier].link} role="button" target="_blank" className="w-full border-t-2 mt-4 pt-2">
                        <svg className="hover:scale-125 transition-all  m-auto h-8 w-8 fill-slate-500 hover:fill-slate-700 hover:inner-shadow transition-all" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 19.164062 10.001953 C 17.881062 10.001953 17.441406 10.919156 17.441406 11.535156 L 17.441406 13.169922 C 17.441406 13.999922 17.8935 14.792969 19.0625 14.792969 C 21.0245 14.790969 20.787109 13.306391 20.787109 12.275391 L 19.253906 12.275391 L 19.253906 12.816406 L 20.158203 12.816406 C 20.158203 13.621406 19.781453 14.162109 19.064453 14.162109 C 18.498453 14.162109 18.171875 13.671188 18.171875 12.992188 L 18.171875 11.634766 C 18.171875 11.005766 18.762062 10.642578 19.164062 10.642578 C 19.881062 10.642578 20.15625 11.271484 20.15625 11.271484 L 20.697266 10.90625 C 20.697266 10.90625 20.434062 10.001953 19.164062 10.001953 z M 13.583984 13.091797 C 12.678984 13.091797 11.296953 13.178906 10.001953 13.128906 L 10.001953 13.53125 C 10.781953 13.68225 11.107422 13.606281 11.107422 14.738281 L 11.107422 20.269531 C 11.107422 21.413531 10.780953 21.325563 10.001953 21.476562 L 10.001953 21.892578 C 10.378953 21.879578 11.031266 21.841797 11.697266 21.841797 C 12.326266 21.841797 13.144094 21.867578 13.496094 21.892578 L 13.496094 21.476562 C 12.490094 21.338562 12.1875 21.451531 12.1875 20.269531 L 12.1875 17.931641 C 12.5275 17.956641 12.817531 17.955078 13.269531 17.955078 C 14.124531 19.489078 14.94125 20.634781 15.40625 21.175781 C 16.24825 22.193781 17.594875 22.043578 17.921875 21.892578 L 17.921875 21.515625 C 17.418875 21.514625 16.914781 21.175437 16.550781 20.773438 C 15.934781 20.107437 15.104781 19.025641 14.425781 17.806641 C 15.557781 17.529641 16.400391 16.461297 16.400391 15.404297 C 16.400391 13.820297 15.179984 13.091797 13.583984 13.091797 z M 13.320312 13.730469 C 14.502313 13.730469 15.205078 14.346516 15.205078 15.478516 C 15.204078 16.586516 14.450359 17.326172 13.193359 17.326172 C 12.728359 17.326172 12.5145 17.314063 12.1875 17.289062 L 12.1875 13.767578 C 12.5145 13.729578 12.942312 13.730469 13.320312 13.730469 z" />
                            </g>
                        </svg>
                    </a>
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
