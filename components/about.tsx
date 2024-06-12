import Image from "next/image";
export function About() {
    return (
        <div className="pt-10 w-full flex lg:flex-row lg:justify-evenly lg:items-start sm:flex-col sm:items-center sm:justify-center  ">
            <div className="flex flex-col justify-center items-center w-[55%]">
                <h2 className="lg:text-2xl md:text-xl font-bold">About Me</h2>
                <p className="text-justify pt-10 font-helvetica w-[85%]">
                    I am a <span className="font-semibold underline">Full-Stack Developer</span> with a passion for building
                    applications that are user-friendly and accessible. I have
                    experience working with TypeScript, React, Node.js, and
                    PostgreSQL. I am always looking to learn new technologies and
                    improve my skills as a developer.
                </p>
                <p className="text-justify pt-10 font-helvetica w-[85%]">
                    I am currently a student at the University of California,
                    Irvine, where I am pursuing a Bachelor of Science in Computer
                    Science. I am also a member of the Association for Computing
                    Machinery (ACM) and the Society of Hispanic Professional
                    Engineers (SHPE).
                </p>
            </div>
            <div className="lg:pt-0 sm:pt-10">
                <Image className="rounded-lg" src="/assets/photo.jpeg" alt="Picture of me" width={340} height={300} />
            </div>
        </div>
    );
}
