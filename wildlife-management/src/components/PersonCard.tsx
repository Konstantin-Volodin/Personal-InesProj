import { useTranslations } from "use-intl";

type Props = { identifier: string, image: string };
export default function PersonCard(props: Props) {
    let t = useTranslations('Homepage.about.'.concat("", props.identifier))
    return (
        <div className='flex flex-col sm:flex-row md:flew-row lg:flex-row xl:flex-row 2xl:flex-row place-items-center bg-white gap-6 border-2 p-4'>

            {/* IMAGE */}
            <div className='flex flex-col place-items-center gap-y-2'>
                <div className={'w-60 h-60 md:w-96 sm:h-96 bg-[url(/images/Ines.JPG)] bg-no-repeat bg-cover bg-center bg-top'}></div>
                <div className='flex flex-col place-items-center'>
                    <span className='font-medium tracking-wider 
                        text-md sm:text-md md:text-lg lg:text-xl 2xl:text-2xl'>{t("full_name")}</span>
                    <span className='font-light tracking-wider 
                        text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-xl'>{t("position")}</span>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className='w-fit xl:w-[700px] font-light tracking-tight flex flex-col gap-y-3
                text-sm sm:text-sm md:text-md lg:text-lg 2xl:text-lg'>
                {t.rich('description', { paragraph: (chunks) => <span>{chunks}</span> })}
            </div>
        </div>
    )
}
