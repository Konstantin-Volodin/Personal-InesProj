'use client';

import Link from 'next/link'
import StatsCard from 'components/StatsCard'
import PersonCard from 'components/PersonCard'
import { useTranslations } from 'use-intl';

export default function Homepage() {
  const mt = useTranslations('Homepage')
  console.log(mt('title'))
  console.log(mt('description'))

  return (
    <main>

      {/* INTRO */}
      <div className='h-[calc(100vh-80px)] bg-[url(/images/DSCN1285.JPG)] bg-no-repeat bg-cover bg-center bg-top bg-fixed'>
        <div className='h-full flex flex-col gap-y-12 justify-center px-36'>
          <header className='font-bold tracking-[0.35em] text-4xl'>{mt('title')}</header>
          <div className='font-light tracking-tight text-lg flex flex-col gap-y-3'>
            {mt.rich('description', { break: (chunks) => <span>{chunks}</span> })}
          </div>
        </div >
      </div >


      {/* IMPACT */}
      <div className='h-screen flex flex-col gap-y-12 justify-center px-36 '>
        <header className='font-bold tracking-[0.35em] text-4xl'>OUR IMPACT</header>
        <div className='flex flex-row gap-12'>
          <div className='w-[500px] h-[500px] bg-[url(/images/DSCN1522.JPG)] bg-no-repeat bg-cover bg-center bg-top'></div>

          <div className='basis-2/3 flex flex-row flex-wrap place-content-evenly gap-y-12'>
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
          </div>
        </div>
      </div >

      {/* ABOUT */}
      <div className='bg-gray-100 h-screen flex flex-col gap-y-12 justify-center px-36'>
        <header className='font-bold tracking-[0.35em] text-4xl'>ABOUT US</header>

        <div className='flex flex-row flex-wrap place-content-start gap-16'>
          <PersonCard />
        </div>
      </div >


      {/* SUPPORT */}
      <div className='h-screen flex flex-col gap-y-12 justify-center px-36'>
        <header className='font-bold tracking-[0.35em] text-4xl'>SUPPORT US </header>

        <div className='flex flex-row gap-12'>

          <div className='basis-2/3 font-light tracking-tight text-lg flex flex-col gap-y-12 place-content-center'>
            <span>
              Etiam tempor arcu vitae lacus feugiat, ac dictum dolor mattis.
              Nullam hendrerit consectetur libero sit amet dapibus. Quisque finibus velit at pharetra mollis.
              Nam et ligula lobortis urna euismod egestas. Vestibulum ligula lorem, tempor et pulvinar ut, vulputate quis justo.
              Praesent ut maximus nisi. Phasellus sodales egestas sem id aliquam. Integer ut lectus at tellus consequat posuere.
            </span>
            <Link href='/support' className='py-6 px-24 mx-auto bg-green-700 hover:bg-green-800 focus:outline-none active:bg-green-900 text-white font-semibold tracking-widest'>DONATE</Link>
          </div>

          <div className='basis-1/3 h-96 bg-gray-100'></div>
        </div>

      </div>
    </main >
  )
}
