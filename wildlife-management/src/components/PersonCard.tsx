import { useTranslations } from "use-intl";

type Props = { identifier: string, image: string };
export default function PersonCard(props: Props) {
    let t = useTranslations('Homepage.about.'.concat("", props.identifier))
    return (
        <div className='flex flex-row gap-x-12'>

            {/* IMAGE */}
            <div className='flex flex-col place-items-center gap-y-6'>
                <div className={'w-80 h-80 bg-[url(' + props.image + ')] bg-no-repeat bg-cover bg-center bg-top'}></div>
                <div className='flex flex-col place-items-center'>
                    <span className='font-medium tracking-wider text-xl'>{t("full_name")}</span>
                    <span className='font-light tracking-wider text-lg'>{t("position")}</span>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className='w-96 font-light tracking-tight text-lg flex flex-col gap-y-3'>
                {t.rich('description', { paragraph: (chunks) => <span>{chunks}</span> })}
            </div>
        </div>
    )
}
