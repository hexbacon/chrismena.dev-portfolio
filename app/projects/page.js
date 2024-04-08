'use client'
import ProjectCard from "@components/ProjectCard";
import ProjectInfo from "@content/ProjectInfo";
import { Typewriter } from "react-simple-typewriter";
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
        </main>
    )
}