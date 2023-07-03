import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='lg:w-full p-4 lg:p-8 relative flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-4 dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 text-dark dark:text-light'>{summary}</p>
                <div className="mt-2 flex gap-4 items-center">
                    <Link href={github} target='_blank' className='w-10 dark:text-light'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-1.5 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full p-4 lg:p-8 flex relative flex-col items-center justify-between rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left dark:text-light text-3xl font-bold hover:underline underline-offset-4'>{title}</h2>
                </Link>
                <p className='my-2 text-dark dark:text-light'>{summary}</p>
                <div className="mt-2 w-full flex justify-between gap-4 items-center">
                    <Link href={link} target='_blank' className='underline text-lgb dark:text-light font-semibold'>Visit Project</Link>
                    <Link href={github} target='_blank' className='w-10 dark:text-light'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects page | Rakibul Hasan</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText className={'text-5xl'} text={'A collection of my latest projects!'} />
                    <div className="flex flex-col lg:grid grid-cols-12 gap-12 mt-12">
                        <div className="col-span-12">
                            <FeaturedProject github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Athletic Academy'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Crypto Screener Application'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Crypto Screener Application'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Crypto Screener Application'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />

                        </div>
                        <div className="col-span-6">
                            <Project github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Crypto Screener Application'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'/'} link={'/'} img={img1} type={'Feature project'} title={'Crypto Screener Application'} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;