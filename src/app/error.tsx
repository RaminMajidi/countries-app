'use client'

import { useTranslations } from 'next-intl';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const tErrors = useTranslations('errors');
    const tBtns = useTranslations('btns');

    return (
        <div className='border-2 rounded-2xl py-2
        border-red-500 px-4 text-center font-bold'>
            <h2 className='text-xl md:text-2xl'>
                {tErrors("server")}
            </h2>
            <button
                className='mt-2 bg-blue-500 p-2 rounded-md 
                cursor-pointer text-slate-100'
                onClick={
                    () => reset()
                }
            >
                {tBtns("again")}
            </button>
        </div>
    )
}