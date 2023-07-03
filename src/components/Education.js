import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    const Details = ({ type, time, place, info }) => {
        const ref = useRef(null);
        return (
            <li ref={ref} className='w-3/5 mx-auto flex flex-col items-center justify-between'>
                <LiIcon reference={ref} />
                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: .5, type: 'spring' }}>
                    <h3 className='capitalize text-dark dark:text-light font-bold text-2xl'>{type}</h3>
                    <span className='font-medium capitalize text-dark/75 dark:text-light/70'>{time} | {place}</span>
                    <p className='dark:text-light w-full text-justify'>{info}</p>
                </motion.div>
            </li>
        )
    }
    return (
        <div className='mt-8 mb-40'>
            <h2 className='font-bold dark:text-light text-5xl mb-10 w-full text-center'>Education</h2>

            <div ref={ref} className="w-4/5 mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute top-0 left-9 origin-top w-1 bg-dark dark:bg-light h-full' />
                <ul className='space-y-8 flex flex-col items-start justify-between ml-4'>
                    <Details info={"I studied Soil and Environmental Sciences at Barisal University, gaining knowledge in soil health, environmental management, and sustainable agriculture. Through rigorous coursework and research projects, I developed critical thinking skills and a deep understanding of the intricate relationship between soil, the environment, and agricultural practices."} time={'2019-Present'} place={'University of Barishal'} type={'Bachelor Of Science In Soil and Environmental Sciences'} />
                    <Details info={"I completed my Higher Secondary Certificate (HSC) education at Srijanee Bidyaniketan College in Bangladesh. Throughout my time at the college, I engaged in a comprehensive curriculum that provided me with a strong foundation in various subjects, enabling me to develop critical thinking skills, a thirst for knowledge, and the ability to excel academically. The college environment fostered my personal and intellectual growth, preparing me for higher education and future endeavors."} type={'Higher Secondary Certificate'} time={'2015-2017'} place={'Srijanee Bidyaniketan'} />
                    {/* <Details info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."} time={'2022-Present'} place={'Massachusetts Institute Of Technology (MIT)'} type={'Bachelor Of Science In Computer Science'} /> */}
                </ul>
            </div>
        </div>
    );
};

export default Education;