"use client"
import { motion } from "framer-motion";

const aboutItems = {
    info: "I'm a versatile Product Designer and Developer with over 8 years of experience. My journey began with a degree in accounting, but my passion led me to become a self-taught frontend developer and designer. I'm a creative problem solver, and my skills span UI/UX design, frontend, and, backend development with a toolkit that includes",
}

const features = [
    { icon: "/assets/figma.svg", heading: "UI/UX - Figma", subtitle: "4 years experience in designing flawless user experiences for impactful brands." },
    { icon: "/assets/js.svg", heading: "Javascript", subtitle: "8 years experience in crafting client-side interactions with the popular JS scripting language." },
    { icon: "/assets/react.svg", heading: "React Js / Native", subtitle: "4 years experience building some of the coolest frontends using React JS and React Native." },
    { icon: "/assets/python.svg", heading: "Python", subtitle: "2 years experience working with Python, and Python frameworks like Flask and Django." },
    { icon: "/assets/redux.svg", heading: "Redux", subtitle: "4 years experience developing and, managing complex react js app states using Redux Toolkit." },
    { icon: "/assets/postgres.svg", heading: "PostgreSQL", subtitle: "4 years worth of valuable experience building reliable databases" },
]

const About = () => {
    return (
        <motion.section 
            className="w-full space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            exit={{ opacity: 0 }}
        >
            <section className="space-y-6">
                <section>
                    <span className="text-white text-6xl font-black">
                        About &nbsp;
                    </span>
                    <span className="text-slate-400 text-6xl font-black">
                        me
                    </span>
                </section>
                <section className="w-[84%]">
                    <p className="text-white text-2xl font-semibold">
                        {aboutItems.info}
                    </p>
                </section>
            </section>
            <section className="w-full h-max flex items-center space-x-8 overflow-x-scroll scrollbar-hide">
                {features.map((feature, index) => (
                    <section className="w-fit h-[464px] space-y-8 bg-[#1A1A1A] rounded-2xl drop-shadow-md px-5 pt-24 pb-4 hover:bg-zinc-900 hover:ease-in-out" key={index}>
                        <img 
                            src={feature.icon} 
                            alt={feature.heading} 
                            className="w-16 h-16" 
                        />
                        <section className="space-y-5">
                            <p className="text-white text-lg font-bold">
                                {feature.heading}
                            </p>
                            <p className="text-slate-100 text-xl font-normal leading-loose w-[275px]">
                                {feature.subtitle}
                            </p>
                        </section>
                    </section>
                ))}
            </section>
        </motion.section>
    )
}

export default About;