import { WebDev } from "@/section/web-dev";
import Image from "next/image";
export function Skills() {
    return (
        <div className="pt-10 w-full flex flex-col items-center justify-center">
            <h2 className="lg:text-2xl font-bold">Skills</h2>
            <section className="">
                <h3 className="pt-10 text-center text-xl font-semibold">Web Development</h3>
                <div className="grid grid-cols-6 gap-4">
                    {
                        // Loop through WebDev and get icons
                        WebDev.map((icon, idx) => {
                            return(
                                <Image key={idx} src={icon.logo} width={100} height={100} alt="" />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}
