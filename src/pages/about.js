import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import profileImg from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const About = () => {
    const AnimateNumbers = ({ value }) => {
        const ref = useRef(null);
        const motionValue = useMotionValue(0)
        const springValue = useSpring(motionValue, { duration: 3000 })
        const isInView = useInView(ref, { once: true })
        useEffect(() => {
            if (isInView) {
                motionValue.set(value)
            }
        }, [value, isInView, motionValue])

        useEffect(() => {
            springValue.on("change", (latest => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest?.toFixed(0)
                }
            }))
        }, [springValue, ref, value])
        return <span ref={ref}></span>
    }

    return (
        <>
            <Head>
                <title>About page | Rakibul Hasan</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main>
                <Layout className='py-4 !px-12'>
                    <AnimatedText className={'mb-10 lg:mb-16 !text-5xl'} text={'Passion Fuels Purpose! '} />
                    <div className='flex flex-col lg:grid w-full grid-cols-8 gap-8 lg:gap-16'>
                        {/* these is Biography div  */}
                        <div className='col-span-3 flex flex-col items-start'>
                            <h2 className='mb-4 text-lg font-bold   uppercase text-dark/75 dark:text-light/70'>Biography</h2>
                            <p className='font-medium dark:text-light text-justify'>Welcome to my portfolio website! I&apos;m Rakibul Hasan, a passionate MERN stack web developer with a love for creating dynamic and intuitive user experiences. With a strong foundation in JavaScript, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                            </p>
                            <p className='my-4 font-medium dark:text-light text-justify'>Throughout my journey as a web developer, I&apos;ve honed my skills in front-end development using modern libraries and frameworks like React.js, Redux, and Bootstrap, ensuring seamless UI/UX experiences across devices and browsers. I also have a solid understanding of back-end technologies, including Express.js and Node.js, which allow me to create fast, efficient, and scalable server-side solutions. In addition to technical expertise, I am a strong advocate for clean code architecture, modular design, and agile development methodologies.
                            </p>
                            {/* <p className='font-medium dark:text-light text-justify'>When I am not coding, you will find me staying up to date with the latest industry trends, exploring new technologies, and continuously learning to improve my craft. I am passionate about staying ahead in the ever-evolving field of web development and leveraging emerging technologies to build innovative solutions. Thank you for visiting my portfolio website. I am excited to showcase my projects, skills, and achievements. If you have any inquiries or opportunities for collaboration, please feel free to reach out. Lets create something amazing together
                            </p> */}
                        </div>
                        {/* these is image div  */}
                        <div className="col-span-3 h-max rounded-2xl border-2 border-dark dark:border-light bg-light dark:bg-dark p-4 lg:p-8">
                            <Image src={profileImg} alt={'Rakibul Hasan'} className='w-full h-auto rounded-2xl' />
                        </div>
                        {/* these is projects number div  */}
                        <div className='col-span-2 flex lg:flex-col gap-2 lg:gap-0 items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <h3 className='text-5xl lg:text-7xl text-dark dark:text-light font-bold'><AnimateNumbers value={2} />+</h3>
                                <h3 className='capitalize text-dark/75 dark:text-light/70 text-xs lg:text-xl font-medium'>Satisfied clients</h3>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <h3 className='text-5xl lg:text-7xl text-dark dark:text-light font-bold'><AnimateNumbers value={14} />+</h3>
                                <h3 className='capitalize text-dark/75 dark:text-light/70 text-xs lg:text-xl font-medium'>Projects Completed</h3>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <h3 className='text-5xl lg:text-7xl text-dark dark:text-light font-bold'><AnimateNumbers value={8} />+</h3>
                                <h3 className='capitalize text-dark/75 dark:text-light/70 text-xs lg:text-xl font-medium'>Months of experience</h3>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;