import {
    faBluesky,
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
                <Link
                    target="_blank"
                    href="https://peerlist.io/tausiqsama"
                    aria-label="Follow me on Peerlist"
                >
                    <svg
                        className="active:text-purple-700 hover:text-purple-400"
                        viewBox="-1 -1 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Peerlist--Streamline-Iconoir"
                        height="32"
                        width="32"
                    >
                        <desc>
                            Peerlist Streamline Icon: https://streamlinehq.com
                        </desc>
                        <path
                            d="M10.468 1.9675h9.064c4.427125 0 8.14625 3.328875 8.635125 7.7288749999999995l0.30512500000000004 2.745c0.189 1.7005000000000001 0.189 3.41675 0 5.11725l-0.30512500000000004 2.745c-0.488875 4.400125 -4.208 7.7288749999999995 -8.635125 7.7288749999999995H10.468c-4.42725 0 -8.146375 -3.32875 -8.63525 -7.7288749999999995l-0.305 -2.745c-0.18887500000000002 -1.7005000000000001 -0.18887500000000002 -3.41675 0 -5.11725l0.305 -2.745c0.488875 -4.4 4.208 -7.7288749999999995 8.63525 -7.7288749999999995Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        ></path>
                        <path
                            d="M10.655874999999998 22.240250000000003v-5.79225m0 0V7.7597499999999995h5.792125c2.39925 0 4.34425 1.9448750000000001 4.34425 4.344125h0c0 2.39925 -1.9448750000000001 4.344125 -4.34425 4.344125H10.655874999999998Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        ></path>
                    </svg>
                </Link>
                <Link
                    target="_blank"
                    href="https://bsky.app/profile/tausiqsama.bsky.social"
                    aria-label="Follow me on Bluesky"
                >
                    <FontAwesomeIcon
                        icon={faBluesky}
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
                    <Link
                        target="_blank"
                        href="https://publish.tausiqsama.me/index.xml"
                        aria-label="Subscribe to my RSS feed"
                    >
                        <FontAwesomeIcon
                            icon={faRss}
                            size="xl"
                            className="ml-4 active:text-purple-700 hover:text-purple-400"
                        />
                    </Link>
                </p>
            </div>
            <div></div>
        </main>
    );
}
