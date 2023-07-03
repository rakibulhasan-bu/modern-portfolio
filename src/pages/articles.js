import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../public/images/articles/What is Redux with easy explanation.png';
import article4 from '../../public/images/articles/create modal component in react using react portals.png';
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    const handleMouse = event => {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-5)
    }
    const handleMouseLeave = event => {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }
    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='hover:underline text-xl capitalize font-semibold'>{title}</h2>
            <FramerImage style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className='absolute z-10 hidden h-auto w-96 rounded-lg' />
        </Link>
    )
}

const Article = ({ img, title, link, date }) => {
    return (
        <motion.li initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: .5, ease: "easeInOut" } }} viewport={{ once: true }} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light border border-dark dark:border-light first:mt-0 border-r-4 border-b-4'>
            <MovingImg title={title} link={link} img={img} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, link, time, summary }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl'>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .2 } }} transition={{ duration: 0.2 }} src={img} alt={title} className='w-full h-auto' />
            </Link>
            <Link href={link} target='_blank'><h2 className='capitalize text-2xl font-bold my-2 hover:underline dark:text-light'>{title}</h2></Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>About page | Rakibul Hasan</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='mb-16 w-full flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16 dark:text-light'>
                    <AnimatedText text={'Words Can Change The World!'} className={'mb-16'} />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle img={article1} link={'/'} summary={'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'} title={' Build A Custom Pagination Component In Reactjs From Scratch'} time={'9 min read'} />
                        <FeaturedArticle img={article2} link={'/'} summary={'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'} title={' Build A Custom Pagination Component In Reactjs From Scratch'} time={'9 min read'} />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article link={'/'} date={'March 22, 2022'} img={article3} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                        <Article link={'/'} date={'March 22, 2022'} img={article4} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                        <Article link={'/'} date={'March 22, 2022'} img={article1} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                        <Article link={'/'} date={'March 22, 2022'} img={article2} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                        <Article link={'/'} date={'March 22, 2022'} img={article3} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                        <Article link={'/'} date={'March 22, 2022'} img={article3} title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'} />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;