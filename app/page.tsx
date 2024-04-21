"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Home() {
    return (
        // Add framer motion animation. Fade in effect
        <motion.section
            className="box-content h-full flex min-h-screen flex-col justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="font-bold text-6xl text-center p-5 flex flex-col">
                <span>Hi there &#128075;!</span>
                <span>
                    I&apos;m
                    <span className="text-blue-500 m-3 rounded-md opacity-80 z-10">
                        Christopher!
                    </span>
                </span>
            </h1>
            <p className="text-center">
                An Aspiring
                <code className="code text-blue-400">
                    <Typewriter
                        words={[" Software Engineer"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                    />
                </code>
            </p>
            <div className="flex justify-center pt-5">
                <Link href={"/static/data/resume.pdf"} target='_blank'>
                    <Button variant={"ghost"}>
                        <Icons.notes className="mr-2 h-4 w-4" /> Resume
                    </Button>
                </Link>

                <Link href={"/blog"} >
                    <Button variant={"ghost"}>
                        <Icons.logo className="mr-2 h-4 w-4" /> Blog
                    </Button>
                </Link>
            </div>
        </motion.section>
    );
}
