import { WebDev } from "@/section/web-dev";
import { ToolTip } from "./tooltip";
import Image from "next/image";
export function Skills() {
    return (
        <div className="pt-10 w-full flex flex-col items-center justify-center">
            <h2 className="lg:text-2xl font-bold">Skills</h2>
            <section className="flex">
                <article>
                <h3 className="pt-10 text-center text-xl font-semibold">
                    Web Development
                </h3>
                    <div className="grid grid-cols-4 gap-4 border">
                        {
                            // Loop through WebDev and get icons
                            WebDev.map((icon, idx) => {
                                return (
                                    //<ToolTip text={icon.name} href={icon.href} icon={icon.icon} key={idx} />
                                    <Image
                                        className="px-5"
                                        key={idx}
                                        src={icon.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                );
                            })
                        }
                    </div>
                </article>
                <article>
                <h3 className="pt-10 text-center text-xl font-semibold">
                    Web Development
                </h3>
                    <div className="grid grid-cols-4 gap-4 border">
                        {
                            // Loop through WebDev and get icons
                            WebDev.map((icon, idx) => {
                                return (
                                    //<ToolTip text={icon.name} href={icon.href} icon={icon.icon} key={idx} />
                                    <Image
                                        className="px-5"
                                        key={idx}
                                        src={icon.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                );
                            })
                        }
                    </div>
                </article>
            </section>
        </div>
    );
}
