import Link from "next/link";
import { projDetails, sideProjDetails, Project } from "./projdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ActionButton({
    href,
    label,
    icon,
}: {
    href?: string;
    label: string;
    icon?: any;
}) {
    if (!href || href.trim() === "") return null;
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <button className="relative bg-violet-900 text-white font-medium py-2 px-4 rounded transition group">
                {label}
                {icon && <FontAwesomeIcon icon={icon} className="ml-2" />}
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-black rounded transition duration-300 ease-in-out" />
            </button>
        </Link>
    );
}

export default function Projects() {
    const renderProjectCard = (ele: Project, idx: number) => (
        <div
            key={`${ele.name}-${idx}`}
            className="bg-[#904BAA] text-gray-200 rounded-lg p-4 sm:p-6"
        >
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {ele.name}
            </h2>

            {ele.description ? (
                <p className="text-sm text-white mb-4">{ele.description}</p>
            ) : null}

            <div className="flex flex-wrap gap-3 mb-4">
                <ActionButton
                    href={ele.link}
                    label="Project Link"
                    icon={faGithub}
                />

                {/* YouTube */}
                <ActionButton
                    href={ele.youtubeDemo}
                    label="YouTube"
                    icon={faYoutube}
                />

                {/* Deployed */}
                <ActionButton
                    href={ele.deployedLink}
                    label="Deployed Project"
                    icon={faGlobe}
                />

                {/* Article */}
                <ActionButton
                    href={ele.article}
                    label="Article"
                    icon={faGlobe}
                />
            </div>

            <p className="text-sm text-white mb-3">
                {ele.from ?? "—"} - {ele.to ?? "—"}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
                {(ele.skills ?? []).map((skill, index) => (
                    <span
                        key={`${ele.name}-skill-${index}`}
                        className="bg-[#66788E] text-white py-1 px-3 rounded-full text-[11px] sm:text-xs font-medium"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            {/* Projects Section */}
            <details className="mb-6">
                <summary className="text-xl sm:text-2xl font-semibold text-purple-400 cursor-pointer">
                    Projects
                </summary>
                <div className="space-y-6 mt-4">
                    {projDetails.map((ele, i) => renderProjectCard(ele, i))}
                </div>
            </details>

            {/* Side Projects Section */}
            <details>
                <summary className="text-xl sm:text-2xl font-semibold text-purple-400 cursor-pointer">
                    Side Projects
                </summary>
                <div className="space-y-6 mt-4">
                    {sideProjDetails.map((ele, i) => renderProjectCard(ele, i))}
                </div>
            </details>
        </main>
    );
}
