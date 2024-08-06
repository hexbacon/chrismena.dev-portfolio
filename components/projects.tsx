import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { WebDev, BackDev } from "@/section/web-dev";
export function Projects() {
    return (
        <div className="pt-10 w-full flex flex-col items-center justify-center">
            <h1 className="lg:text-2xl font-bold">Project </h1>
            <section>
                <article>
                    <div className="grid grid-cols-2 gap-2 place-items-center border">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="lg:text-2xl md:text-xl font-bold">
                                Save-A-Can
                            </h2>
                            <p className="text-justify pt-10 font-helvetica w-[85%]">
                                {" "}
                                <span className="font-semibold underline">
                                    Save-A-Can
                                </span>{" "}
                                is a cutting-edge Web App developed using
                                ReactJS, a popular JavaScript library for
                                building user interfaces. The primary goal of
                                Save-A-Can is to promote environmental
                                sustainability by making recycling more
                                accessible and profitable for its users. The app
                                achieves this by employing a custom TensorFlow
                                model to accurately identify recyclable objects
                                and providing users with the nearest recycling
                                centers where they can turn in these items for a
                                profit.
                            </p>
                            <div className="grid grid-cols-4 gap-4 place-items-center border">
                                {
                                    // Loop through WebDev and get icons
                                    WebDev.map((icon, idx) => {
                                        return (
                                            //<ToolTip text={icon.name} href={icon.href} icon={icon.icon} key={idx} />
                                            <div
                                                key={idx}
                                                className="flex flex-col justify-center items-center"
                                            >
                                                <Image
                                                    className="px-5 hover:scale-110 hover:drop-shadow-lg transform transition duration-300"
                                                    src={icon.icon}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />
                                                <p>{icon.name}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <Link
                                href="https://github.com/hexbacon/Save-A-Can"
                                target="_blank"
                            >
                                <Button variant={"outline"} className="mt-10">
                                    Check Project
                                </Button>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="lg:text-2xl md:text-xl font-bold">
                                Save-A-Can
                            </h2>
                            <p className="text-justify pt-10 font-helvetica w-[85%]">
                                {" "}
                                <span className="font-semibold underline">
                                    Save-A-Can
                                </span>{" "}
                                is a cutting-edge Web App developed using
                                ReactJS, a popular JavaScript library for
                                building user interfaces. The primary goal of
                                Save-A-Can is to promote environmental
                                sustainability by making recycling more
                                accessible and profitable for its users. The app
                                achieves this by employing a custom TensorFlow
                                model to accurately identify recyclable objects
                                and providing users with the nearest recycling
                                centers where they can turn in these items for a
                                profit.
                            </p>
                            <div className="grid grid-cols-4 gap-4 place-items-center border">
                                {
                                    // Loop through WebDev and get icons
                                    WebDev.map((icon, idx) => {
                                        return (
                                            //<ToolTip text={icon.name} href={icon.href} icon={icon.icon} key={idx} />
                                            <div
                                                key={idx}
                                                className="flex flex-col justify-center items-center"
                                            >
                                                <Image
                                                    className="px-5 hover:scale-110 hover:drop-shadow-lg transform transition duration-300"
                                                    src={icon.icon}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />
                                                <p>{icon.name}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <Link
                                href="https://github.com/hexbacon/Save-A-Can"
                                target="_blank"
                            >
                                <Button variant={"outline"} className="mt-10">
                                    Check Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
