'use client';

import Link from 'next/link'
import StatsCard from 'components/StatsCard'
import PersonCard from 'components/PersonCard'
import { useTranslations } from 'use-intl';
import HeaderText from 'components/HeaderText';
import HeaderDescription from 'components/HeaderDescription';

export default function Homepage() {
  const t = useTranslations('Homepage')

  return (
    <main>

      {/* INTRO */}
      <div className='min-h-[calc(100vh-80px)] flex flex-row bg-[url(/images/DSCN9806.JPG)] bg-no-repeat bg-cover bg-center bg-top bg-fixed'>
        <div className='w-full backdrop-blur flex place-items-center'>
          <div className='flex flex-col gap-y-12
            w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 2xl:w-1/2
            p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'
          >
            <HeaderText>Support Us</HeaderText>
            <HeaderDescription>
              You can support our project by donating to be able to maintain the operational costs of monitoring and field work. Any donation makes a difference!
            </HeaderDescription>
          </div>
        </div >
      </div>


      {/* DONATE */}
      <div className='h-full flex flex-col gap-y-12 px-36 py-24'>
        <HeaderText>{t('support.title')}</HeaderText>

        <div className='flex flex-row gap-12'>
          <div className='basis-2/3 h-96 bg-red-100 '>
            PAYPAL API GOES HERE
          </div>

          <div className='basis-1/3 h-96 bg-[url(/images/DSCN9821.JPG)] bg-no-repeat bg-cover bg-center bg-top'></div>
        </div>

      </div>
    </main >
  )
}
