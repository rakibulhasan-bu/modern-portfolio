import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from '/public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import bulbLight from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakibul Hasan</title>
        <meta name="description" content="Generated by Rakibul Hasan" />
      </Head>
      <TransitionEffect />
      <main className='text-dark dark:text-light w-full min-h-screen'>
        <Layout className='lg:pt-0 lg:pb-0s lg:pr-24'>
          <div className="flex flex-col lg:flex-row py-4 lg:py-0 items-center gap-4 justify-between">
            <div className='w-full lg:w-1/2'>
              <Image src={ProfilePic} priority alt='Rakibul Hasan' className='w-full h-auto' />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col items-center'>
              <AnimatedText className={'!text-4xl lg:!text-5xl lg:text-center 2xl:!text-6xl text-left'} text={'Turning Vision Into Reality With Code And Design. '} />
              <p className='my-4 mr-4 font-medium text-base'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center mt-2 gap-4 self-start'>
                <Link href={'/Resume of Rakibul Hasan.pdf'} target='_blank' download={true} className='bg-dark dark:bg-light hover:dark:bg-dark flex items-center text-light dark:text-dark hover:dark:text-light text-lg font-semibold py-1.5 px-6 rounded-lg border-2 border-transparent hover:border-dark hover:dark:border-light shadow hover:bg-light hover:text-dark'>Resume <LinkArrow className={'w-6 ml-1'} /></Link>
                <Link href={'mailto:rakibulhasanbu@gmail.com'} target='_blank' className='text-xl underline font-semibold text-dark dark:text-light'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='hidden lg:absolute w-24 bottom-8 right-8'>
          <Image src={bulbLight} alt='bulb light' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
