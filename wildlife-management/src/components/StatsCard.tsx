import { useTranslations } from "use-intl";

type Props = { identifier: string };
export default function StatsCard(props: Props) {
    let t = useTranslations('Homepage.impact.'.concat("", props.identifier))
    return (
        <div className='basis-1/4 flex flex-col'>
            <div className='w-32 h-32 bg-gray-100 border-4 border-green-400 mb-2'></div>
            <span className='w-32 text-center font-bold uppercase'>{t('stat')}</span>
            <span className='w-32 text-center'>{t('text')}</span>
        </div>
    )
}
