'use client';
import { useState, useTransition } from 'react';
import { Locale } from '../../src/i18n/config';
import { setUserLocale } from '../../src/services/local';
import { useLocale } from 'next-intl';


function LocalSwitcherSelect() {
    const Languages = ['en', 'fa'];

    const [isPending, startTransition] = useTransition();


    function changeLangHandler(value: String) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }



    return (
        <>
            {Languages.map((item, i) => (
                <button
                    key={item + "_" + String(i)}
                    onClick={() => changeLangHandler(item)}
                    type="button"
                    className={`bg-blue-500 w-12 p-3 text-center mx-2`}>
                    {item}
                </button>
            ))}

        </>

    )
}

export default LocalSwitcherSelect;