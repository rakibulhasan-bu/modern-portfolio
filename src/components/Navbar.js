import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher("")
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    // these link for desktop
    const CustomLink = ({ href, title, className = "" }) => {
        return (
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={`${router.asPath === href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
            </Link>
        )
    }
    // these link for mobile
    const CustomMobileLink = ({ href, title, className = "" }) => {
        return (
            <Link href={href} className={`${className} relative group text-light dark:text-dark text-xl`} onClick={() => setIsOpen(prev => !prev)}>
                {title}
                <span className={`${router.asPath === href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
            </Link>
        )
    }
    return (
        <div className='w-full relative container mx-auto px-4 py-6 font-medium flex items-center justify-between dark:text-light'>

            <button onClick={() => setIsOpen(prev => (!prev))} className='flex lg:hidden flex-col items-center justify-center'>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded transition-all duration-300 ease-out my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>
            {/* these is desktop navigation  */}
            <div className="hidden lg:flex items-center justify-between w-full">
                <nav className='space-x-6 text-xl'>
                    <CustomLink href='/' title='Home' />
                    <CustomLink href='/about' title='About' />
                    <CustomLink href='/projects' title='Projects' />
                    {/* <CustomLink href='/articles' title='Articles' /> */}
                </nav>

                <nav className='flex justify-center items-center flex-wrap gap-x-6'>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -4 }} className='w-6' whileTap={{ scale: .9 }}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -4 }} className='w-6' whileTap={{ scale: .9 }}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -4 }} className='w-6' whileTap={{ scale: .9 }}>
                        <GithubIcon />
                    </motion.a>
                    {/* <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -4 }} className='w-6' whileTap={{ scale: .9 }}>
                        <PinterestIcon /> </motion.a>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -4 }} className='w-6' whileTap={{ scale: .9 }}>
                        <DribbbleIcon /> </motion.a> */}

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} rounded-full p-1`}>
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={'fill-dark'} />
                        }
                    </button>
                </nav>
            </div>
            {/* these is mobile navigation  */}
            {isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .2 }} className="lg:hidden flex flex-col gap-4 items-center justify-between w-[80vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                <nav className='flex flex-col items-center justify-center gap-4'>
                    <CustomMobileLink href='/' title='Home' />
                    <CustomMobileLink href='/about' title='About' />
                    <CustomMobileLink href='/projects' title='Projects' />
                    {/* <CustomMobileLink href='/articles' title='Articles' /> */}
                </nav>

                <nav className='flex justify-center items-center flex-wrap gap-x-6 text-light dark:text-dark'>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -3 }} className='w-6' whileTap={{ scale: .9 }}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/rakibulhasanbu/' target='_blank' whileHover={{ y: -3 }} className='w-6' whileTap={{ scale: .9 }}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href='https://github.com/rakibulhasan-bu' target='_blank' whileHover={{ y: -3 }} className='w-6' whileTap={{ scale: .9 }}>
                        <GithubIcon />
                    </motion.a>
                    {/* <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -3 }} className='w-6' whileTap={{ scale: .9 }}>
                        <PinterestIcon /> </motion.a>
                    <motion.a href='www.facebook.com' target='_blank' whileHover={{ y: -3 }} className='w-6' whileTap={{ scale: .9 }}>
                        <DribbbleIcon /> </motion.a> */}

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`${mode === "light" ? "bg-dark dark:bg-light text-light dark:text-dark" : "bg-light dark:bg-dark text-dark dark:text-light"} rounded-full p-1`}>
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={'fill-dark'} />
                        }
                    </button>
                </nav>
            </motion.div> : null}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </div>
    );
};

export default Navbar;