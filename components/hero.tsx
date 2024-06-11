import { SocialIcons } from "@/section/social-icons";
import { ToolTip } from "./tooltip";
export function Hero() {
    return (
        <div className="container flex flex-col items-center">
            <h1 className="text-4xl font-bold py-4">
                Hi, I&apos;m Christopher Mena! 👋
            </h1>
            <video
                className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
                muted
                autoPlay
                loop
                playsInline
            >
                <source src={"/me.mp4"} type="video/mp4" />
            </video>
            <h1 className="text-4xl font-bold py-4">Developer 🧑🏻‍💻</h1>
            <p className="pt-4">Welcome to my personal page!</p>
            <p className="pb-4">
                Just an aspiring✨ <span>TypeScript Full-Stack</span> developer
                who loves to build something cool.
            </p>
            <div className="pt-20 w-full flex justify-evenly">
                {
                    SocialIcons.map((icon, idx) => {
                        return(
                            <ToolTip text={icon.name} href={icon.href} icon={icon.icon} key={idx} />
                        )
                    })
                }
            </div>
        </div>
    );
}
