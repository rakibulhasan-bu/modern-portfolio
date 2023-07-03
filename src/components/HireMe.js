import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className='hidden lg:fixed left-4 bottom-4 overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <CircularText className={'fill-dark dark:fill-light animate-spin-slow'} />
                <Link href={'mailto:rakibulhasanbu@gmail.com'} className='bg-dark dark:bg-light text-white dark:text-dark left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 w-20 flex items-center justify-center rounded-full h-20 text-lg font-semibold border-2 border-dark dark:border-light hover:text-dark hover:dark:text-light hover:bg-light hover:dark:bg-dark'>Hire me</Link>
            </div>
        </div>
    );
};

export default HireMe;