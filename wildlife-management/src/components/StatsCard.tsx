import Image from 'next/image'
import Link from 'next/link'


export default function StatsCard() {
    return (
        <div className='basis-1/4 flex flex-col'>
            <div className='w-32 h-32 bg-gray-100 border-4 border-green-400 mb-2'></div>
            <span className='w-32 text-center font-bold'>STAT</span>
            <span className='w-32 text-center'>TEXT GOES HERE</span>
        </div>
    )
}
