import Image from 'next/image'
import Link from 'next/link'

import StatsCard from '@/components/StatsCard'

export default function Home() {
  return (
    <main>


      {/* INTRO */}
      <div className='h-screen bg-green-200'>

        {/* HEADER */}
        <div className='w-full bg-white px-10 py-4  border-b-2 border-neutral-400  whitespace-nowrap font-medium  flex flex-row gap-x-6 justify-items-stretch tracking-widest'>
          <span className='m-auto'><text>Ladera del Mar</text></span>
          <div className='basis-full'></div>
          <Link href='/' className='py-2 px-3 m-auto bg-neutral-0 hover:bg-neutral-100 focus:outline-none active:bg-neutral-200'>HOMEPAGE</Link>
          <Link href='/support_us' className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500'>SUPPORT US</Link>
          <button className='py-2 px-3 m-auto bg-green-300 hover:bg-green-400 focus:outline-none active:bg-green-500'>LANGUAGE</button>
        </div>

        {/* BODY */}
        <div className='h-full flex flex-col gap-y-12 justify-center px-36'>
          <header className='font-bold tracking-[0.35em] text-4xl'>WILDLIFE MONITORING </header>
          <div className='font-light tracking-tight text-xl flex flex-col gap-y-3'>
            <span>Ladera del Mar is committed to maintaining monkey corridors.</span>
            <span>Protecting and maintaining connectivity we allow the movement of wildlife throughout the project.</span>
            <span>Through connectivity with wildlife canopy's and biological monitoring, we protect the wildlife that is mobilized by the development project, trying to provide a safe opportunity for passage and refuge for its natural dynamics.</span>
            <span>Our objective is to seek a coexistence between the people who inhabit the project and the wildlife present. Avoiding negative interactions and adding suitable spaces for everyone.</span>
            <span>Living in balance!</span>
          </div>
        </div >
      </div >


      {/* IMPACT */}
      <div className='h-screen flex flex-col gap-y-12 justify-center px-36'>
        <header className='font-bold tracking-[0.35em] text-4xl'>OUR IMPACT</header>
        <div className='flex flex-row gap-12'>
          <div className='basis-1/3 bg-gray-100'></div>

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


      {/* SUPPORT */}
      <div className='h-screen bg-green-200 flex flex-col gap-y-12 justify-center px-36'>
        <header className='font-bold tracking-[0.35em] text-4xl'>SUPPORT US </header>

        <div className='flex flex-row gap-12'>

          <div className='basis-2/3 font-light tracking-tight text-xl flex flex-col gap-y-12 place-content-center'>
            <span>
              Etiam tempor arcu vitae lacus feugiat, ac dictum dolor mattis.
              Nullam hendrerit consectetur libero sit amet dapibus. Quisque finibus velit at pharetra mollis.
              Nam et ligula lobortis urna euismod egestas. Vestibulum ligula lorem, tempor et pulvinar ut, vulputate quis justo.
              Praesent ut maximus nisi. Phasellus sodales egestas sem id aliquam. Integer ut lectus at tellus consequat posuere.
            </span>
            <Link href='/support_us' className='py-6 px-24 mx-auto bg-green-700 hover:bg-green-800 focus:outline-none active:bg-green-900 text-white font-semibold tracking-widest'>DONATE</Link>
          </div>

          <div className='basis-1/3 h-96 bg-gray-100'></div>
        </div>

      </div>
    </main >
  )
}
