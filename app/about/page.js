'use client'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function About() {
    return (
        <main className="box-content h-full flex min-h-screen items-center justify-center p-15">
            <section className=''>
                <Image src="/assets/images/me.png" alt='Christopher' width={214} height={214} className="object-cover p-5" />
                <div className="p-5">
                    <h3>Christopher</h3>
                    <p>hexbacon</p>
                </div>
            </section>
            <section className='w-[60%] border'>
                <p className="text-sm">
                    <span className="text-slate-700">
                        ChriMena /
                        <span className="text-slate-400">
                            <Typewriter
                                words={['readme.md', 'README.md']}
                                cursor="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </span>
                </p>
                <h3 className="p-1">Hey, I&apos;m Christopher	&#128075;</h3>
                <p className="">I am a 27 year old aspiring software engineer</p>
                <hr />
                <div className="p-1">
                    <h3 className="text-xl font-bold">⚡️ Current</h3>
                </div>
                <hr className="p-1" />
                <p className="p-1">Currently a Supervisor at <Link className="" href="https://www.uniqlo.com" target="_blank">Uniqlo</Link></p>
                <div className="p-1">
                    <h3 className="text-xl font-bold">💎 Experience</h3>
                </div>
                <hr className="p-1" />
                <p className="p-1 text-justify">Relevant Coursework: Introduction: Computer Science, Software Analysis and Design III, Computer Architecture I & II, Computer Theory I, Operating Systems, Capstone Project, Software Engineering, Flutter Dev. Certificate of completion for CodePath.org intensive iOS program.</p>
                <div className="p-1">
                    <h3 className="text-xl font-bold" >📫 Contact</h3>
                </div>
                <hr className="p-1" />
                <p className="p-1 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

        </main>
    )
}