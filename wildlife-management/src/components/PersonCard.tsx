import Image from 'next/image'
import Link from 'next/link'


export default function PersonCard() {
    return (
        <div className='flex flex-row gap-x-12'>

            {/* IMAGE */}
            <div className='flex flex-col place-items-center gap-y-6'>
                <div className='w-80 h-80 bg-[url(/images/Ines.JPG)] bg-no-repeat bg-cover bg-center bg-top'></div>
                <div className='flex flex-col place-items-center'>
                    <span className='font-medium tracking-wider text-xl'>Ines Azofeifa Rojas</span>
                    <span className='font-light tracking-wider text-lg'>Position</span>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className='w-96 font-light tracking-tight text-lg flex flex-col gap-y-3'>
                <span>
                    {"Master in Sustainable Development from the University of Costa Rica (2022) with an emphasis on biological resource conservation. She is a specialist in management and conservation of wild primates in urban and peri-urban areas of Costa Rica. She has extensive experience in managing conflicts between humans and non-human primates and evaluating the habitat of wild species in order to seek sustainable coexistence in time and space."}
                </span>
                <span>
                    {"She has a degree in Ecotourism Management (2019) and a Bachelor's degree in Ecological Tourism (2017) with experience in the field of operation of the tourism industry and which has allowed her to understand the social processes linked to environmental changes in this matter, social, economic and political."}
                </span>
            </div>
        </div>
    )
}
