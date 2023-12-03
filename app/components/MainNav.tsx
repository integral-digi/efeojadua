"use client"
import { Fragment, useMemo } from "react";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";

export const navItems = {
    logo: "/assets/logo.svg",
    hamburger: "/assets/hamburger.svg",
    close: "/assets/close.svg"
}

const MainNav = ({ icon }: any) => {
    const transitionProps = useMemo(
        () => ({
            enter: "transition ease-out duration-300",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-250",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1"
        }),
        []
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
        >
            <nav className="w-full flex items-center justify-between">
                <Link href="/" passHref>
                    <img
                        src={navItems.logo}
                        alt="logo"
                        className="h-6 w-auto"
                    />
                </Link>
                <Popover className="z-30">
                    <Popover.Button className="cursor-pointer">
                        <img
                            src={icon}
                            alt="menu"
                            className={`w-8 h-4 ${icon === null && "hidden"} `}
                        />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        {...transitionProps}
                    >
                        <Popover.Panel className="fixed top-0 left-0 w-full">
                            <Menu />
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </nav>
        </motion.div>
    )
}

export default MainNav;
