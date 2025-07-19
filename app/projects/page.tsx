import Link from "next/link";
import { projDetails, sideprojdetails } from "./projdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            {/* Projects Section */}
            <details className="mb-6">
                <summary className="text-xl sm:text-2xl font-semibold text-purple-400 cursor-pointer">
                    Projects
                </summary>
                <div className="space-y-6 mt-4">
                    {projDetails.map((ele) => (
                        <div
                            key={ele.name}
                            className="bg-[#904BAA] text-gray-200 rounded-lg p-4 sm:p-6"
                        >
                            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                {ele.name}
                            </h2>
                            <p className="text-sm text-white mb-4">
                                Description: {ele.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4">
                                <Link href={ele.link} target="_blank">
                                    <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                        Project Link
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="ml-2"
                                        />
                                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-black rounded transition duration-300 ease-in-out"></span>
                                    </button>
                                </Link>

                                <Link href={ele.youtubeDemo} target="_blank">
                                    <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                        YouTube
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="ml-2"
                                        />
                                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded transition duration-300 ease-in-out"></span>
                                    </button>
                                </Link>

                                {ele.deployedLink &&
                                    ele.deployedLink !== "" && (
                                        <Link
                                            href={ele.deployedLink}
                                            target="_blank"
                                        >
                                            <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                                Deployed Project
                                                <FontAwesomeIcon
                                                    icon={faGlobe}
                                                    className="ml-2"
                                                />
                                                <span className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded transition duration-300 ease-in-out"></span>
                                            </button>
                                        </Link>
                                    )}
                                {ele.article && ele.article !== "" && (
                                    <Link href={ele.article} target="_blank">
                                        <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                            Article
                                            <FontAwesomeIcon
                                                icon={faGlobe}
                                                className="ml-2"
                                            />
                                            <span className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 rounded transition duration-300 ease-in-out"></span>
                                        </button>
                                    </Link>
                                )}
                            </div>

                            <p className="text-sm text-white mb-3">
                                {ele.from} - {ele.to}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {ele.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#66788E] text-white py-1 px-3 rounded-full text-[11px] sm:text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </details>

            {/* Side Projects Section */}
            <details>
                <summary className="text-xl sm:text-2xl font-semibold text-purple-400 cursor-pointer">
                    Side Projects
                </summary>
                <div className="space-y-6 mt-4">
                    {sideprojdetails.map((ele) => (
                        <div
                            key={ele.name}
                            className="bg-[#904BAA] text-gray-200 rounded-lg p-4 sm:p-6"
                        >
                            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                {ele.name}
                            </h2>
                            <p className="text-sm text-white mb-4">
                                Description: {ele.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4">
                                <Link href={ele.link} target="_blank">
                                    <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                        Project Link
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="ml-2"
                                        />
                                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-black rounded transition duration-300 ease-in-out"></span>
                                    </button>
                                </Link>

                                <Link href={ele.youtubeDemo} target="_blank">
                                    <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                        YouTube
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="ml-2"
                                        />
                                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded transition duration-300 ease-in-out"></span>
                                    </button>
                                </Link>

                                {ele.deployedLink &&
                                    ele.deployedLink !== "" && (
                                        <Link
                                            href={ele.deployedLink}
                                            target="_blank"
                                        >
                                            <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                                                Deployed Project
                                                <FontAwesomeIcon
                                                    icon={faGlobe}
                                                    className="ml-2"
                                                />
                                                <span className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded transition duration-300 ease-in-out"></span>
                                            </button>
                                        </Link>
                                    )}
                            </div>

                            <p className="text-sm text-white mb-3">
                                {ele.from} - {ele.to}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {ele.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#66788E] text-white py-1 px-3 rounded-full text-[11px] sm:text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </details>
        </main>
    );
}
