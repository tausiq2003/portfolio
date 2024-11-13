import {
    faGithub,
    faLinkedin,
    faReddit,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Contact() {
    return (
        <main className="max-w-2xl mt-20 m-auto max-lg:px-10">
            <h4 className="text-3xl text-purple-400">Connect with me</h4>
            <p className="mt-4 ml-2 mt-1.5 text-2xl">
                You can connect with me:{" "}
            </p>
            <div className="flex flex-row justify-start gap-8 ml-4 mt-8 flex-wrap">
                <Link
                    target="_blank"
                    href="https://x.com/tausiqtweets"
                    aria-label="Follow me on twitter(X)"
                >
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        size="2xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/tausiq-samantaray/"
                    aria-label="Connect with me on LinkedIn"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.youtube.com/@thecoderguy_0001"
                    aria-label="Subscribe to my channel"
                >
                    <FontAwesomeIcon
                        icon={faYoutube}
                        size="2xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
                <Link
                    target="_blank"
                    href="https://github.com/tausiq2003/"
                    aria-label="Follow me on Github"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.reddit.com/user/tausiqsamantaray/"
                    aria-label="Follow me on Reddit"
                >
                    <FontAwesomeIcon
                        icon={faReddit}
                        size="2xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
            </div>
            <div className="ml-2 mt-8">
                <p className="text-2xl">
                    Contact me at:{" "}
                    <Link
                        target="_blank"
                        href="mailto:helloworld2024@duck.com"
                        aria-label="Message me at"
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size="xl"
                            className="ml-2 active:text-purple-700 hover:text-purple-400"
                        />
                    </Link>
                </p>
            </div>
            <div className="ml-2 mt-8">
                <p className="text-2xl">
                    RSS
                    <FontAwesomeIcon
                        icon={faRss}
                        size="xl"
                        className="ml-4 active:text-purple-700 hover:text-purple-400"
                    />
                </p>
            </div>
            <div></div>
        </main>
    );
}
