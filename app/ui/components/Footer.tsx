"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faHouse,
    faLightbulb,
    faFolder,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function MenuBar() {
    const pathname = usePathname();
    type MenuItems = {
        id: string;
        icon: IconDefinition;
        label: string;
        href: string;
        isExternal: boolean;
    };

    const menuItems: MenuItems[] = [
        {
            id: "home",
            icon: faHouse,
            label: "Home",
            href: "/",
            isExternal: false,
        },
        {
            id: "projects",
            icon: faLightbulb,
            label: "Projects",
            href: "/projects",
            isExternal: false,
        },
        {
            id: "blogs",
            icon: faFolder,
            label: "Blogs",
            href: "https://blogs.tausiqsama.me",
            isExternal: true,
        },
        {
            id: "contacts",
            icon: faAddressBook,
            label: "Contacts",
            href: "/contact-me",
            isExternal: false,
        },
        {
            id: "github",
            icon: faGithub,
            label: "Source code",
            href: "https://github.com/tausiq2003/portfolio",
            isExternal: true,
        },
    ];

    const renderLink = (item: MenuItems) => {
        const isActive = pathname === item.href;
        const linkContent = (
            <button
                className={`flex flex-col items-center gap-1 p-2 rounded-full transition-all duration-300 min-w-16
          ${
              isActive
                  ? "bg-white/20 text-white shadow-lg scale-105"
                  : "text-white/80 hover:bg-white/10"
          }
          group-hover:scale-105 active:scale-95`}
            >
                <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-xl transition-transform duration-300
            ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                />
                <span
                    className={`text-xs font-medium transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}
                >
                    {item.label}
                </span>
            </button>
        );

        if (item.isExternal) {
            return (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    {linkContent}
                </a>
            );
        }

        return (
            <Link href={item.href} className="block">
                {linkContent}
            </Link>
        );
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
            <nav
                className="h-20 max-w-xl w-full rounded-full 
        shadow-lg border border-white/10 overflow-hidden relative
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/30 before:to-purple-600/30 before:backdrop-blur-md"
            >
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

                <ul className="h-full flex items-center justify-around px-6 relative z-10">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className="relative group w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                        >
                            {renderLink(item)}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-purple-500/10 blur-xl rounded-full" />
        </div>
    );
}
