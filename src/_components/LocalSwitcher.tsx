'use client';
import { useState, useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/local';
import HeroIcon from './HeroIcon';
import { useLocale } from 'next-intl';
import CircleLoding from './CircleLoding.tsx';


function LocalSwitcher() {
    const Languages = ['en', 'fa'];

    const [isPending, startTransition] = useTransition();
    const [isShow, setIsShow] = useState<Boolean>(false);
    const locale = useLocale();

    function changeLangHandler(value: String) {
        const newLocale = value as Locale;
        setIsShow(false);
        newLocale !== locale &&
            startTransition(() => {
                setUserLocale(newLocale);
            });
    }

    function showItemsHandler() {
        setIsShow(s => !s);
    }

    return (
        <>
            {isPending ? <CircleLoding /> :
                <section className='relative w-14'>
                    <article
                        onClick={showItemsHandler}
                        className='w-full border border-slate-100 flex 
                        justify-center items-center cursor-pointer relative
                        rounded-none'
                    >
                        <HeroIcon
                            icon='LanguageIcon'
                            className='text-[var(--color-secondary)] w-5 h-5'
                        />
                        <h6 className='capitalize select-none ms-1'>{locale}</h6>
                    </article>
                    {isShow &&
                        <article className="flex flex-col border w-full absolute 
                                   top-7 right-0 z-50 border-b-0  rounded-none">
                            {Languages.map((item, i) => (
                                <button
                                    key={item + "_" + String(i)}
                                    onClick={() => changeLangHandler(item)}
                                    type="button"
                                    className={`px-3 py-1 capitalize
                                     bg-blue-500/85 border-b`}>
                                    {item}
                                </button>
                            ))}
                        </article>}
                </section>
            }
        </>
    )
}

export default LocalSwitcher;