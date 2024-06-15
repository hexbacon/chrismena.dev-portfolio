import { WebDev, BackDev } from "@/section/web-dev";
import Image from "next/image";

export function Skills() {
    return (
        <div className="pt-10 w-full flex flex-col items-center justify-center">
            <h2 className="lg:text-2xl font-bold">Skills</h2>
            <section>
                <article>
                    <h3 className="pt-10 text-center text-xl font-semibold">
                        Web Development
                    </h3>
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
                </article>
                <article>
                    <h3 className="pt-10 text-center text-xl font-semibold">
                        Back-End Development
                    </h3>
                    <div className="grid grid-cols-4 gap-4 justify-items-center place-items-center border">
                        {BackDev.map((icon, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <Image
                                        className="px-5 hover:scale-110 hover:drop-shadow-lg transform  transition duration-300"
                                        src={icon.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                    <p className="">{icon.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </article>
            </section>
        </div>
    );
}
