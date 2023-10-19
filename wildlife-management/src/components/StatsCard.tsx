import { useTranslations } from "use-intl";

type Props = { identifier: string };
export default function StatsCard(props: Props) {
    let t = useTranslations('Homepage.impact.'.concat("", props.identifier))
    return (
        <div className='flex flex-col'>
            <div className='w-32 h-32 bg-gray-100 border-4 border-green-400 mb-2'></div>
            <span className='w-32 text-center font-bold uppercase 
                text-md sm:text-md md:text-lg lg:text-xl 2xl:text-2xl '
            >{t('stat')}</span>
            <span className='w-32 text-center 
                text-sm md:text-base lg:text-lg 2xl:text-xl'
            >{t('text')}</span>
        </div>
    )
}
