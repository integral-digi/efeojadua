"use client"
import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";

const aboutItems = {
    info: "Hey there! I'm a bit of a hybrid – a Product Designer and Developer rolled into one, with a solid 8 years on this wild ride. Would you believe my journey started with crunching numbers in accounting? But hey, passion's a powerful thing! It steered me towards becoming a self-taught frontend developer and designer extraordinaire. I thrive on untangling puzzles, finding creative solutions, and rocking it in UI/UX design, frontend, and backend development. My toolkit? Well, let's just say it's jam-packed with all the cool tech toys.",
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
            className="w-full space-y-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            exit={{ opacity: 0 }}
        >
            <section className="space-y-6">
                <section>
                    <span className="text-white text-6xl font-black lg:text-4xl">
                        About &nbsp;
                    </span>
                    <span className="text-slate-400 text-6xl font-black lg:text-4xl">
                        me
                    </span>
                </section>
                <section className="w-[84%] lg:w-full">
                    <p className="text-white text-xl font-semibold leading-8 lg:text-base">
                        {aboutItems.info}
                    </p>
                </section>
            </section>
            <ScrollButton scrollAmount={400} classSelector=".features" operator="-" /> 
            <ScrollButton scrollAmount={400} classSelector=".features" operator="+" /> 
            <section className="features w-full h-max flex items-center space-x-8 overflow-x-scroll scrollbar-hide">
                {features.map((feature, index) => (
                    <section 
                        className="w-fit h-[480px] space-y-8 bg-gray-950 rounded-2xl drop-shadow-md px-8 pt-24 pb-4 hover:bg-gray-900/20" 
                        key={index}
                    >
                        <img 
                            src={feature.icon} 
                            alt={feature.heading} 
                            className="w-16 h-16" 
                        />
                        <section className="space-y-5">
                            <p className="text-white text-lg font-bold">
                                {feature.heading}
                            </p>
                            <p className="text-slate-100 text-lg font-normal leading-loose w-[275px]">
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