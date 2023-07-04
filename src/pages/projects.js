import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import athletic from '../../public/images/projects/athletic.png'
import talent from '../../public/images/projects/talent-spark.png'
import crappo from '../../public/images/projects/crappo.png'
import quizHero from '../../public/images/projects/quiz-hero.png'
import savior from '../../public/images/projects/savior-cuisiner.png'
import toy from '../../public/images/projects/toy-galaxy.png'
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
                <Layout className='pt-8'>
                    <AnimatedText className={'!text-6xl'} text={'Discover the digital solutions that make an impact!'} />
                    <div className="flex flex-col lg:grid grid-cols-12 gap-12 mt-12">
                        <div className="col-span-12">
                            <FeaturedProject github={'https://github.com/rakibulhasan-bu/athletic-academy-client'} link={'https://athletic-academy.web.app/'} img={athletic} type={'Feature project'} title={'Athletic Academy'} summary={'This website provides user registration and login for secure access. Instructors have profiles displaying their information, while users can browse and enroll in classes with validated seat availability. Authenticated students can manage their classes and payments, while instructors and administrators have separate dashboards for class and user management. The website is designed responsively for optimal viewing on various devices.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'https://github.com/rakibulhasan-bu/toy-galaxy-client'} link={'https://toy-galaxy-c7132.web.app/'} img={toy} type={'Feature project'} title={'Toy Galaxy'} summary={'Toy Galaxy is a vibrant online marketplace dedicated to toy cars, offering buyers a diverse selection and sellers a platform to showcase their products. With user registration, detailed listings, and categorized toy cars, it aims to create an engaging and safe environment for enthusiasts to explore and purchase their favorite toys.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'https://github.com/rakibulhasan-bu/Savoir-Cuisiner-client'} link={'https://savoir-cuisiner.web.app/'} img={savior} type={'Feature project'} title={'Savior Cuisiner'} summary={'I have created a comprehensive toy car selling website with sections like About, Contact, Blog, Testimonials, and Statistics. Users can view chefs recipes, log in for authentication, and save favorite recipes. Explore the culinary world of France on our website!'} />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject github={'https://github.com/rakibulhasan-bu/cryptocurrency-website'} link={'https://crypto-currency-crappo.netlify.app/'} img={crappo} type={'Feature project'} title={'CRAPPO'} summary={'Discover the exciting world of cryptocurrencies on our website, offering the latest market trends and in-depth analysis. We empower users with knowledge and tools to navigate this revolutionary financial realm, exploring opportunities.'} />

                        </div>
                        <div className="col-span-6">
                            <Project github={'https://github.com/rakibulhasan-bu/quiz-hero'} link={'https://quiz-hero-phero-rakibulbu.netlify.app/'} img={quizHero} type={'Feature project'} title={'Quiz Hero'} summary={'Introducing our quiz app, an engaging platform that tests your knowledge and offers an interactive learning experience. With a variety of categories and challenging questions, you can enhance your knowledge while having fun. Join us and put your skills to the test in this exciting quiz adventure.'} />
                        </div>
                        <div className="col-span-6">
                            <Project github={'/'} link={'https://talent-sparks.netlify.app/'} img={talent} type={'Feature project'} title={'Talent Spark'} summary={'Our job application form allows men to provide personal information and job preferences, including education, work experience, and skills. The job features page enables anyone to browse available job openings, filter by type, location, and experience level. The application status page keeps applicants informed about their job applications, while the area chart displays the number of job applications over time, providing insights into submission trends.'} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;