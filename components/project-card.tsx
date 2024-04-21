import Link from "next/link";

interface ProjectCardProps {
    name: string;
    description: string;
    link: string;
    page: any;
    icon: string;
}

export function ProjectCard({
    name,
    description,
    link,
    page,
    icon,
}: ProjectCardProps) {
    return (
        <div className="transform translate-y-0 opacity-100">
            <li className="backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-lg transition ease-in-out duration-300 shadow-lg dark:shadow-gray-800/50">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                    <div className="flex flex-1 items-center justify-start w-full">
                        <span className="text-xl text-gray-900 dark:text-gray-200">
                            {icon}
                        </span>
                        <div className="min-w-0 flex-1 px-4">
                            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                                {name}
                            </h1>
                            <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                        {page && (
                            <Link
                                className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 rounded-lg text-sm font-medium default-transition default-focus bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-500"
                                aria-label="Project Page"
                                href={page}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <span className="sr-only">Project Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-house-door"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                </svg>
                            </Link>
                        )}
                        <Link
                            className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm font-medium default-transition default-focus text-gray-900 dark:text-white border border-gray-300 dark:border-gray-500"
                            aria-label="GitHub Repository"
                            href={link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="sr-only">GitHub Repository</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-terminal"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </li>
        </div>
    );
}
