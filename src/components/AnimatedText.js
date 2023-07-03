import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
    const quote = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                delay: .5,
                staggerChildren: .08
            }
        }
    }
    const singleWord = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,

            }
        }
    }
    return (
        <div className='w-full m-auto py-0 lg:py-2 flex items-center justify-center text-center overflow-hidden' >
            <motion.h1 variants={quote} initial='initial' animate='animate' className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}>{
                text.split(" ").map((word, index) =>
                    <motion.span variants={singleWord} key={index} className='inline-block'>{word}&nbsp;</motion.span>
                )
            }</motion.h1>
        </div>
    );
};

export default AnimatedText;