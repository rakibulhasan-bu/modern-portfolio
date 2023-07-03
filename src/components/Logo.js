import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
const MotionLink = motion(Link)
const Logo = () => {

    return (
        <>
            {/* these is new code of logo  */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height={'3rem'} width={'3rem'} className='text-red-600'>
                <title>{"Logo"}</title>
                <path
                    fill="currentColor"
                    d="M58.363 59.848 50.27 48.422l7.578-8.692a.507.507 0 0 0 .078-.53.48.48 0 0 0-.438-.294h-3.804a.489.489 0 0 0-.36.16l-7.894 8.871v-8.539a.491.491 0 0 0-.485-.492h-3.379a.488.488 0 0 0-.48.492v20.743c0 .27.215.492.48.492h3.38a.491.491 0 0 0 .484-.492v-6.164l2.215-2.543 6.363 8.996c.09.129.238.203.39.203h3.575a.48.48 0 0 0 .43-.27.5.5 0 0 0-.04-.515Zm0 0"
                />
                <path stroke="currentColor" d="M50 5 11 27v45l39 23 39-22V28z" />
            </svg> */}
            {/* <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={'3rem'} height={'3rem'}>
                <title>Logo</title>
                <g>
                    <g id="K" transform="translate(35.000000, 35.000000)">
                        <path
                            fill="currentColor"
                            d="M 23.363281 24.847656 L 15.269531 13.421875 L 22.847656 4.730469 C 22.972656 4.582031 23.003906 4.375 22.925781 4.199219 C 22.847656 4.019531 22.675781 3.90625 22.488281 3.90625 L 18.683594 3.90625 C 18.546875 3.90625 18.417969 3.964844 18.324219 4.066406 L 10.429688 12.9375 L 10.429688 4.398438 C 10.429688 4.128906 10.210938 3.90625 9.945312 3.90625 L 6.566406 3.90625 C 6.300781 3.90625 6.085938 4.128906 6.085938 4.398438 L 6.085938 25.140625 C 6.085938 25.410156 6.300781 25.632812 6.566406 25.632812 L 9.945312 25.632812 C 10.210938 25.632812 10.429688 25.410156 10.429688 25.140625 L 10.429688 18.976562 L 12.644531 16.433594 L 19.007812 25.429688 C 19.097656 25.558594 19.246094 25.632812 19.398438 25.632812 L 22.972656 25.632812 C 23.15625 25.632812 23.320312 25.527344 23.402344 25.363281 C 23.484375 25.199219 23.472656 25 23.363281 24.847656 Z M 23.363281 24.847656 "
                        />
                    </g>
                    <path
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
                    />
                </g>
            </svg> */}
            {/* these is old code for logo that background change in rgb color   */}
            <motion.div className='mt-1 flex items-center justify-center'>
                <MotionLink href='/' className='bg-dark text-white border border-transparent dark:border-light font-bold text-lg rounded-full h-14 w-14 flex items-center justify-center' whileHover={{ backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"], transition: { duration: 1, repeat: Infinity } }}>RH</MotionLink>
            </motion.div>
        </>
    );
};

export default Logo;