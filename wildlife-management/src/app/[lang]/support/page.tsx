'use client';
import { useContext, useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';

import { ref, getDownloadURL } from 'firebase/storage';
import { store } from 'firebaseConfig';

import { CMSContext } from 'app/CMSProvider';
import HeaderText from 'components/HeaderText';
import SectionTransition from 'components/SectionTransition';

export default function Homepage() {
  const { locale, raw, layout, done } = useContext(CMSContext);

  // Loads Image
  const [homeImg, SetHomeImg] = useState("")
  const [supportImg, SetSupportImg] = useState("")
  const [pageDone, setPageDone] = useState(false)


  useEffect(() => {
    const fetchImage = async function () {
      const storageRef = ref(ref(store, "LayoutImages"), "Support")
      getDownloadURL(ref(storageRef, layout.Support.images['home'])).then(url => SetHomeImg(url))
      getDownloadURL(ref(storageRef, layout.Support.images['support'])).then(url => SetSupportImg(url))
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
          <div className='backdrop-blur'>

            {/* MAIN SECTION */}
            <div className='w-full min-h-screen'>
              <div className='flex place-items-center'>
                <div className='flex flex-col gap-y-12 
                  w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 2xl:w-1/2
                  p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'
                >
                  <HeaderText>{raw.Support.intro.title}</HeaderText>
                  <div className='w-full flex flex-col gap-y-6 font-light tracking-tight text-sm sm:text-sm md:text-base lg:text-lg 2xl:text-xl'
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw.Support.intro.description) }} />
                </div>
              </div>
            </div>


            {/* TRANSITION */}
            <div className='h-32 w-full fill-slate-50 '>
              <SectionTransition direction='bottom' />
            </div>

          </div>
        </div>
      )}

      {/* DONATE */}
      {pageDone && (
        <div className='h-full flex flex-col gap-y-12 px-36 py-24'>
          {/* <HeaderText>{t('support.title')}</HeaderText> */}

          <div className='flex flex-row gap-12'>
            <div className='basis-2/3 h-96 bg-red-100 '>
              PAYPAL API GOES HERE
            </div>

            <div className='basis-1/3 h-96 bg-[url(/images/DSCN9821.JPG)] bg-no-repeat bg-cover bg-center bg-top'></div>
          </div>

        </div>
      )}
    </main >
  )
}
