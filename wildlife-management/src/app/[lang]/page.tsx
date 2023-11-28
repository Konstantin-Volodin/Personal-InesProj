'use client';

import { useContext, useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

import { ref, getDownloadURL } from 'firebase/storage';
import { store } from 'firebaseConfig';

import { CMSContext } from 'app/CMSProvider';
import StatsCard from 'components/StatsCard'
import PersonCard from 'components/PersonCard'
import HeaderText from 'components/HeaderText';
import SectionTransition from 'components/SectionTransition';
import ProjectCard from 'components/ProjectCard';


export default function Homepage() {
  const { locale, raw, layout, done } = useContext(CMSContext);

  // Loads Image
  const [homeImg, SetHomeImg] = useState("")
  const [impactImg, SetImpactImg] = useState("")
  const [supportImg, SetSupportImg] = useState("")
  const [pageDone, setPageDone] = useState(false)


  useEffect(() => {
    const fetchImage = async function () {
      const storageRef = ref(ref(store, "LayoutImages"), "Homepage")
      getDownloadURL(ref(storageRef, layout.Homepage.images['home'])).then(url => SetHomeImg(url))
      getDownloadURL(ref(storageRef, layout.Homepage.images['impact'])).then(url => SetImpactImg(url))
      getDownloadURL(ref(storageRef, layout.Homepage.images['support'])).then(url => SetSupportImg(url))
    }

    if (done) { fetchImage().then(() => setPageDone(true)) }
  }, [done])


  return (
    <main className='text-slate-900'>

      {/* INTRO */}
      {pageDone && (
        <div className='min-h-screen bg-no-repeat bg-cover bg-center bg-top bg-fixed'
          style={{ backgroundImage: 'url(' + homeImg + ')' }}
        >
          <div className='backdrop-blur' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))" }}>

            {/* MAIN SECTION */}
            <div className='w-full min-h-screen flex place-items-center'>
              <div className='flex flex-col gap-y-12 text-stone-200
                  w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 2xl:w-1/2
                  p-4 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'
              >
                <HeaderText>{raw.Homepage.intro.title}</HeaderText>
                <div className='w-full flex flex-col gap-y-6 font-light cp tracking-tight text-sm sm:text-sm md:text-base lg:text-lg 2xl:text-xl'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw.Homepage.intro.description) }} />
              </div>
            </div>

            <div className='h-32 w-full fill-slate-50 '>
              <SectionTransition direction='bottom' />
            </div>
          </div>
        </div>
      )}



      {/* IMPACT */}
      {pageDone && (
        < div className='h-full bg-slate-50 flex flex-col gap-y-12 p-4 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
          <HeaderText>{raw.Homepage.impact.title}</HeaderText>

          <div className='flex flex-row gap-8 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 place-items-center'>

            {/* IMAGE ON THE SIDE */}
            <div className='bg-no-repeat bg-cover bg-center bg-top rounded-full 
              border-4 border-slate-700 drop-shadow-2xl
              aspect-square
              hidden sm:hidden md:hidden lg:block xl:block 2xl:block
              md:w-60 lg:w-72 xl:w-96
              md:h-60 lg:h-72 xl:h-96'
              style={{ backgroundImage: 'url(' + impactImg + ')' }}
            >
              <div className='' />
            </div>

            {/* CARDS */}
            <div className='
              w-full h-min place-content-center
              p-2 sm:p-4
              gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-12
              flex flex-wrap 
              lg:grid lg:grid-cols-3 
              xl:grid xl:grid-cols-3 
              2xl:grid 2xl:grid-cols-4'>
              {layout.Homepage.StatsCards.map((ident: string) => {
                return (<StatsCard key={ident} identifier={ident} />)
              })}
            </div>
          </div>
        </div>
      )}

      {pageDone && (
        <div className='h-32 w-full bg-slate-50 fill-slate-300'>
          <SectionTransition direction='bottom' />
        </div>
      )}


      {/* ABOUT US*/}
      {pageDone && (
        <div className='h-full bg-slate-300 flex flex-col gap-y-12 p-4 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
          <HeaderText>{raw.Homepage.about.title}</HeaderText>

          <div className='
            flex flex-row flex-wrap place-content-start 
            p-2 sm:p-4 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-12'>
            {layout.Homepage.PersonCards.map((ident: string) => {
              return (<PersonCard key={ident} identifier={ident} />)
            })}
          </div>
        </div >
      )}

      {pageDone && (
        <div className='h-32 w-full bg-slate-300 fill-slate-50'>
          <SectionTransition direction='bottom' />
        </div>
      )}


      {/* OUR PROJECTS*/}
      {pageDone && (
        <div className='h-full bg-slate-50 flex flex-col gap-y-12 p-4 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
          <HeaderText>{raw.Homepage.projects.title}</HeaderText>

          <div className='
            flex flex-row flex-wrap place-content-start 
            p-2 sm:p-4 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-12'>
            {layout.Homepage.ProjectCards.map((ident: string) => {
              return (<ProjectCard key={ident} identifier={ident} />)
            })}
          </div>
        </div >
      )}

      {pageDone && (
        <div className='h-32 w-full bg-slate-300 fill-slate-50'>
          <SectionTransition direction='top' />
        </div>
      )}


      {/* SUPPORT */}
      {pageDone && (
        <div className='h-full bg-slate-300 flex flex-col gap-y-12 p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
          <HeaderText>{raw.Homepage.support.title}</HeaderText>

          <div className='flex flex-row justify-between 
                          gap-8 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32'>

            {/* SUPPORT BUTTON */}
            <div className='flex flex-col place-content-evenly gap-8'>
              <div className='w-full flex flex-col gap-y-6 font-light tracking-tight text-sm sm:text-sm md:text-base lg:text-lg 2xl:text-xl'
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw.Homepage.support.description) }} />

              <Link href={"https://www.paypal.com/donate/?hosted_button_id=DLTFJNJ3T2ZFN"} target='_blank'
                className='m-auto px-8 py-4 text-2xl text-slate-50 mx-auto my-0 bg-green-700 hover:bg-green-800 focus:outline-none active:bg-green-900 uppercase hover:scale-110 transition-all '
              >{raw.Homepage.support.button}</Link>
            </div>

            {/* IMAGE ON THE SIDE */}
            <div className='bg-no-repeat bg-cover bg-center bg-top rounded-full 
              border-4 border-slate-700 drop-shadow-2xl
              aspect-square
              hidden sm:hidden md:hidden lg:block xl:block 2xl:block
              md:w-60 lg:w-72 xl:w-96
              md:h-60 lg:h-72 xl:h-96'
              style={{ backgroundImage: 'url(' + supportImg + ')' }}
            />
          </div>
        </div>
      )}

    </main >
  )
}
