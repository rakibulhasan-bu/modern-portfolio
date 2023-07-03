import { motion } from 'framer-motion';

const Skills = () => {
    const Skill = ({ name, x, y }) => {
        return (
            <motion.div whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} viewport={{ once: true }} className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark absolute py-2 lg:py-3 px-4 lg:px-6 text-sm lg:text-base shadow-dark">
                {name}
            </motion.div>
        )
    }
    return (
        <>
            <h2 className='font-bold dark:text-light !text-5xl lg:text-8xl mt-8 pb-4 w-full text-center'>Skills</h2>
            <div className="w-full rounded-full cursor-pointer h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-5 shadow-dark">
                    Web
                </motion.div>
                <Skill name={'HTML'} x={'-16vw'} y={'-8vw'} />
                <Skill name={'CSS'} x={'5vw'} y={'-12vw'} />
                <Skill name={'Javascript'} x={'20vw'} y={'6vw'} />
                <Skill name={'ReactJs'} x={'0vw'} y={'12vw'} />
                <Skill name={'NodeJs'} x={'-24vw'} y={'-15vw'} />
                <Skill name={'NextJs'} x={'20vw'} y={'-12vw'} />
                <Skill name={'MongoDB'} x={'36vw'} y={'-5vw'} />
                <Skill name={'ExpressJS'} x={'0vw'} y={'-20vw'} />
                <Skill name={'Firebase'} x={'-22vw'} y={'16vw'} />
                <Skill name={'Framer Motion'} x={'18vw'} y={'18vw'} />
                <Skill name={'Tailwind Css'} x={'-28vw'} y={'2vw'} />
            </div>
        </>
    );
};

export default Skills;