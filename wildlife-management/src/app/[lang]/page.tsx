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
      <div className='min-h-[calc(100vh-80px)] flex flex-row bg-[url(/images/326496248_5401809366591635_6734550174955137256_n.JPG)] bg-no-repeat bg-cover bg-center bg-top bg-fixed'>
        <div className='w-full backdrop-blur flex place-items-center'>
          <div className='flex flex-col gap-y-12
            w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 2xl:w-1/2
            p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'
          >
            <HeaderText>{t('intro.title')}</HeaderText>
            <HeaderDescription>
              {t.rich('intro.description', { paragraph: (chunks) => <span>{chunks}</span> })}
            </HeaderDescription>
          </div>
        </div >
      </div>


      {/* IMPACT */}
      <div className='h-full flex flex-col gap-y-12 p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
        <HeaderText>{t('impact.title')}</HeaderText>

        <div className='flex flex-row 
          gap-8 sm:gap-8 md:gap-12 lg:gap-12 xl:gap-12 2xl:gap-12
        '>
          <div className='grow
            bg-[url(/images/DSCN1522.JPG)] bg-no-repeat bg-cover bg-center bg-top
            w-96 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-[500px] 
            h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-[500px] 
            hidden sm:hidden md:hidden lg:block xl:block 2xl:block
          '>

          </div>

          <div className='flex flex-row flex-wrap place-content-center gap-y-8 gap-x-12'>
            <StatsCard identifier={'card1'} />
            <StatsCard identifier={'card2'} />
            <StatsCard identifier={'card3'} />
            <StatsCard identifier={'card4'} />
            <StatsCard identifier={'card5'} />
            <StatsCard identifier={'card6'} />
            <StatsCard identifier={'card7'} />
            <StatsCard identifier={'card8'} />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className='h-full bg-gray-100 flex flex-col gap-y-12 p-8 sm:p-8 md:p-12 lg:p-24 xl:p-32 2xl:p-32'>
        <HeaderText>{t("about.title")}</HeaderText>

        <div className='flex flex-row flex-wrap place-content-start gap-16'>
          <PersonCard identifier={'Ines'} image={"/images/Ines.JPG"} />
        </div>
      </div >


      {/* SUPPORT */}
      <div className='h-full flex flex-col gap-y-12 px-36 py-24'>
        <HeaderText>{t('support.title')}</HeaderText>

        <div className='flex flex-row gap-12'>
          <HeaderDescription>
            {t.rich('support.description', { paragraph: (chunks) => <span>{chunks}</span> })}
            <Link href='/support' className='py-6 px-24 mx-auto bg-green-700 hover:bg-green-800 focus:outline-none active:bg-green-900 text-white font-semibold tracking-widest'>SUPPORT</Link>
          </HeaderDescription>

          <div className='basis-1/3 h-96 bg-[url(/images/DSCN9821.JPG)] bg-no-repeat bg-cover bg-center bg-top'></div>
        </div>

      </div>
    </main >
  )
}
