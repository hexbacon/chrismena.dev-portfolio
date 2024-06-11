// Navbar
import Link from "next/link";
export function Navbar() {
    return (
        <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
            <div className="container flex flex-col items-center justify-between md:flex-row">
                <Link href={"/"}>
                    <h1 className="font-golden text-6xl">Chris Mena</h1>{" "}
                </Link>
                <ul className="flex">
                    <Link href={"#"}>
                        <li className="px-5 font-helvetica">About</li>
                    </Link>
                    <Link href={"#"}>
                        <li className="px-5 font-helvetica">Skills</li>
                    </Link>
                    <Link href={"#"}>
                        <li className="px-5 font-helvetica">Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
