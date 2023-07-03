import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
    return (
        <div className='border-t-2 border-dark text-[10px] lg:text-xl dark:border-light font-medium'>
            <Layout className='py-3 flex items-center justify-between dark:text-light'>
                <h1>{new Date().getFullYear()} &copy; All rights reserved.</h1>
                <div className='flex items-center '>
                    Build with <span className='px-1 text-primary dark:text-primaryDark'>&#9825;</span> by&nbsp;
                    <Link href={'/'} target='_blank' className='underline underline-offset-2'>Rakibul Hasan</Link>
                </div>
                <Link href={'mailto:rakibulhasanbu@gmail.com'} target='_blank' className='underline underline-offset-2'>Say hello</Link>
            </Layout>
        </div>
    );
};

export default Footer;