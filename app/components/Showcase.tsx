"use client"
import { motion } from "framer-motion";
import Heading from "./Heading";

interface LogoProps {
    id: number;
    name: string;
    src: string;
}

const logos: LogoProps[] = [
    { id: 0, name: "fiverr", src: "/assets/fiverr.svg" },
    { id: 1, name: "oracle", src: "/assets/oracle.svg" },
    { id: 3, name: "quadplan", src: "/assets/quadplan.svg" },
    { id: 4, name: "hims", src: "/assets/hims.svg" },
    { id: 5, name: "middletrust", src: "/assets/middletrust.svg" },
    { id: 6, name: "travvelbaby", src: "/assets/travvelbaby.svg" },
]

const logosTwo: LogoProps[] = [
    { id: 7, name: "testace", src: "/assets/testace.svg" },
    { id: 8, name: "opennode", src: "/assets/opennode.svg" },
    { id: 9, name: "quincy", src: "/assets/quincy.svg" },
    { id: 10, name: "rentvec", src: "/assets/rentvec.svg" },
    { id: 11, name: "bliqit", src: "/assets/bliqit.svg" },
    { id: 12, name: "metamars", src: "/assets/metamars.svg" },
]

const scElements = {
    title: "Past clients",
    subtitle: "A few of the brands I have been privileged to work with"
}

const Showcase = () => {
    return (
        <motion.section 
            className="w-full lg:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
            exit={{ opacity: 0 }}
        >
            <section className="space-y-16">
                {/* <Heading title={scElements.title} subtitle={scElements.subtitle} /> */}
                <section className="flex items-center justify-between flex-1 lg:grid lg:grid-cols-4">
                    {logos.map((logo) => (
                        <section key={logo.id} className="w-auto h-12 bg-transparent">
                            <img src={logo.src} alt={logo.name} className={`w-auto ${logo.id === 1 ? "h-5" : "h-6"}`} />
                        </section>
                    ))}
                </section>
                <section className="flex items-center justify-between flex-1">
                    {logosTwo.map((logo) => (
                        <section key={logo.id} className="w-auto h-12 bg-transparent rounded-lg">
                            <img src={logo.src} alt={logo.name} className="w-auto h-8" />
                        </section>
                    ))}
                </section>
            </section>
        </motion.section>
    )
}

export default Showcase;