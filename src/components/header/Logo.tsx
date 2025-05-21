import { getTranslations } from 'next-intl/server';


const Logo = async () => {
    const t = await getTranslations('app');
    return (
        <h2 className='hidden md:block text-2xl uppercase font-bold'>
            {t("name")}
        </h2>
    )
}

export default Logo