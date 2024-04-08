'use client'
import ProjectCard from "@components/ProjectCard";
import ProjectInfo from "@content/ProjectInfo";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
export default function Project() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="font-bold text-4xl text-center p-5">
                <Typewriter
                    words={[' my projects', ' My Work']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <ul className="flex flex-col space-y-4">
                {ProjectInfo.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ul>
            <Link href={"/"} className="flex items-center m-2 p-2 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-house-door mr-3" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
                Home
            </Link>
        </main>
    )
}