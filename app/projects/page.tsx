"use client"; // Client rendering
// Import libraries and components
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

const ProjectInfo = [
    {
        name: "SpotOn",
        desc: "An iOS GPS app that allows you to travel with a group of friends",
        link: "https://github.com/CPSpotOn/SpotOn",
        page: undefined,
        icon: "📍"
    },
    {
        name: "Save-A-Can",
        desc: "Identify recyclable objects and point nearest recyclable center",
        link: "https://github.com/hexbacon/Save-A-Can",
        page: "https://saveacan.netlify.app/",
        icon: "🥫"
    },
    {
        name: "NLP-NN",
        desc: "Recognize the sentiment among the users of a social platforms",
        link: "https://github.com/hexbacon/DOT-NYC",
        page: undefined,
        icon: "📈"
    },
    {
        name: "Promptopia",
        desc: "Prompting tool for modern world to discover, create and share creative prompts",
        link: "https://github.com/hexbacon/promptopia", 
        page: "https://replit.com/@devChrisMena/promptopia?v=1",
        icon: "💬"
    }
]

export default function Project() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="font-bold text-4xl text-center p-5">
                <Typewriter
                    words={["fetching work...", "My Work "]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={700}
                />
            </h1>
            <ul className="flex flex-col space-y-4 py-3">
                {/*Itirate Project Info data and create ProjectCard Element */}
                {ProjectInfo.map((project, index) => (
                    <ProjectCard key={index} name={project.name} description={project.desc} icon={project.icon} page={project.page} link={project.link} />
                ))}
            </ul>
            <Link href={"/"}>
                <Button variant={"ghost"}>
                    <Home className="mr-2 h-4 w-4" /> Home
                </Button>
            </Link>
        </main>
    );
}
