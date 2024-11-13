import Image from "next/image";
import Link from "next/link";
export default async function Home() {
    return (
        <>
            <main className="max-w-2xl mt-20 m-auto max-lg:px-10 max-lg:scale-90">
                <h3 className="text-3xl">Hey everyone! </h3>
                <div className="flex justify-between">
                    <h1 className="text-3xl align-middle mt-12">I&apos;m</h1>
                    <div className="relative w-70 h-70">
                        <Image
                            alt="Profile picture"
                            src="https://github.com/tausiq2003.png"
                            className="rounded-full object-cover"
                            width={70}
                            height={70}
                            priority
                        />
                    </div>
                </div>
                <br />
                <span className="text-4xl"> Tausiq Samantaray</span>
                <br />
                <br />
                <h3 className="text-2xl text-purple-400">About me</h3>
                <p className="text-xl text-justify">
                    I am a programmer, who is having a keen interest to learn
                    different things. Curious to know different things. Decent
                    at maths. Uses Linux and Vim btw. Cooking something at
                    times. I know this is weird about, but make sure to ---&gt;
                    <br />
                    Check out my blogs and projects, they will keep updating
                    also you can contact me how to make this portfolio good, you
                    can also create issue in github below in footer(link of this
                    portfolio)).
                </p>
                <br />
                <Link
                    href="https://drive.google.com/file/d/1RKcHssyi8Dk7F9Af3tTwZBiSzjFg7jBu/view?usp=sharing"
                    target="_blank"
                >
                    <button className="bg-purple-700 rounded-lg py-1 px-3 text-lg transform transition-all duration-300  hover:scale-105">
                        Resume
                    </button>
                </Link>
                <h3 className="text-2xl text-purple-400 mt-2">Education</h3>
                <div>
                    <Link href="https://utkaluniversity.ac.in/" target="_blank">
                        <div className="flex mt-4 flex-row justify-between">
                            <div className="flex flex-row">
                                <Image
                                    alt="uu logo"
                                    src="/uulogo.jpeg"
                                    className="rounded-full object-cover w-[40px] h-[40px]"
                                    width={40}
                                    height={40}
                                />
                                <div className="ml-2">
                                    <p className="text-xl">
                                        Utkal University, Bhubaneswar
                                    </p>
                                    <p className="text-sm ml-2">
                                        Integrated MCA
                                    </p>
                                </div>
                            </div>
                            <p>2020-2025</p>
                        </div>
                    </Link>
                    <Link href="https://kvsangathan.nic.in/" target="_blank">
                        <div className="flex mt-4 flex-row justify-between">
                            <div className="flex flex-row">
                                <Image
                                    alt="kv logo"
                                    src="/kvlogo.jpeg"
                                    className="rounded-full object-cover w-[40px] h-[40px]"
                                    width={40}
                                    height={40}
                                />
                                <div className="ml-2">
                                    <p className="text-xl">
                                        Kendriya Vidyalaya, Puri
                                    </p>
                                    <p className="text-sm ml-2">
                                        Senior Secondary
                                    </p>
                                </div>
                            </div>
                            <p>2008-2020</p>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    );
}
