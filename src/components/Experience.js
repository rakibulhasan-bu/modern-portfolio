import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    const Details = ({ position, company, companyLink, time, address, work }) => {
        const ref = useRef(null);
        return (
            <li ref={ref} className='w-3/5 mx-auto flex flex-col items-center justify-between'>
                <LiIcon reference={ref} />
                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: .5, type: 'spring' }}>
                    <h3 className='capitalize text-dark dark:text-light font-bold text-2xl'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark'>@{company}</a></h3>
                    <span className='font-medium capitalize text-dark/75 dark:text-light/70'>{time} | {address}</span>
                    <p className='dark:text-light w-full text-justify'>{work}</p>
                </motion.div>
            </li>
        )
    }
    return (
        <div className='my-8'>
            <h2 className='font-bold dark:text-light text-5xl mb-10 w-full text-center'>Experience</h2>

            <div ref={ref} className="w-4/5 mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute top-0 left-9 origin-top w-1 bg-dark dark:bg-light h-full' />
                <ul className='space-y-8 flex flex-col items-start justify-between ml-4'>
                    {/* <Details work={"Worked on a team responsible for developing new features for Softkarrot, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."} time={'2022-Present'} address={'Mountain View, CA'} position={'Software Engineer'} company={'Google'} /> */}
                    <Details work={"Worked on a team responsible for developing a new website feature that allowed users to create and share product and sell it, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."} time={'2023-Present'} address={'Dhaka, Bangladesh'} position={'Front End Developer'} company={'Softkarrot'} />
                    {/* <Details work={"Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."} time={'2022-Present'} address={'Mountain View, CA'} position={'Software Engineer'} company={'Amazon'} />
                    <Details work={"Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."} time={'2022-Present'} address={'Mountain View, CA'} position={'Software Engineer'} company={'MIT'} />
                    <Details work={"Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."} time={'2022-Present'} address={'Mountain View, CA'} position={'Software Engineer'} company={'Microsoft'} /> */}
                </ul>
            </div>
        </div>
    );
};

export default Experience;