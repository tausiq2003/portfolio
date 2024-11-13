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
            <h4 className="text-2xl text-purple-400">Connect with me</h4>
            <p className="ml-2 mt-1.5">You can connect with me: </p>
            <div className="flex flex-row justify-start gap-6 ml-4 mt-4">
                <Link
                    target="_blank"
                    href="https://x.com/tausiqtweets"
                    aria-label="Follow me on twitter(X)"
                >
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        size="xl"
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
                        size="xl"
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
                        size="xl"
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
                        size="xl"
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
                        size="xl"
                        className="active:text-purple-700 hover:text-purple-400"
                    />
                </Link>
            </div>
            <div className="ml-2 mt-4">
                <p>
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
            <div className="ml-2 mt-4">
                <p>
                    RSS
                    <FontAwesomeIcon
                        icon={faRss}
                        size="xl"
                        className="ml-2 active:text-purple-700 hover:text-purple-400"
                    />
                </p>
            </div>
            <div></div>
        </main>
    );
}
