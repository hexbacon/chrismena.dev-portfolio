import Link from 'next/link';

// ProjectCard component
export default function ProjectCard({ name, desc, link, icon, page }) {
    return (
        <div className="transform translate-y-0 opacity-100"> {/* Main div */}
            <li className="bg-gray-100 bg-opacity-75 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-200 hover:border-gray-500 rounded-lg transition ease-in-out duration-300"> {/* List item */}
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6 rounded-lg overflow-hidden shadow-lg"> {/* Flex container */}
                    <div className="flex flex-1 items-center justify-start w-full"> {/* Flex item */}
                        <span className="text-xl">{icon}</span> {/* Icon */}
                        <div className="min-w-0 flex-1 px-4"> {/* Flex container for name and description */}
                            <h1 className="text-gray-700 text-lg font-bold">{name}</h1> {/* Project name */}
                            <p className="flex items-center mt-1 text-gray-500 text-xs">{desc}</p> {/* Project description */}
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1"> {/* Flex container for buttons */}
                        {/* Project page link */}
                        {page && (
                            <Link className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-400 border border-gray-200 rounded-lg text-sm font-medium default-transition default-focus" aria-label="Project Page" href={page} rel="noopener noreferrer" target="_blank">
                                <span className="sr-only">Project Page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16"> {/* Icon for project page */}
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                </svg>
                            </Link>
                        )}
                        {/* GitHub repository link */}
                        <Link className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-400 border border-gray-200 rounded-lg text-sm font-medium default-transition default-focus" aria-label="GitHub Repository" href={link} rel="noopener noreferrer" target="_blank">
                            <span className="sr-only">GitHub Repository</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16"> {/* Icon for GitHub repository */}
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
