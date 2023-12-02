"use client"
import { motion } from "framer-motion";
import Heading from "./Heading";

const skills = [
    "Figma",
    "Adobe XD",
    "Principle",
    "Adobe Illustrator",
    "After Effects",
    "HTML",
    "CSS",
    "SASS",
    "Javascript",
    "Command Line",
    "RegEX",
    "Git",
    "Wordpress",
    "PHP",
    "Python",
    "Flask",
    "GoLang",
    "NodeJs",
    "Express",
    "Typescript",
    "React JS",
    "React Native",
    "Next.JS",
    "Gatsby",
    "Svelte",
    "Jest",
    "Bootstrap",
    "Chakra UI",
    "Styled-Components",
    "Tailwind CSS",
    "FLUX",
    "Postman",
    "trPC",
    "GraphQL",
    "PostgresQL",
    "MySQL", 
    "Blockchain",
    "TensorFlow",
    "Docker",
    "AWS Cloud"
]

const SkillCloud = () => {
    return (
        <motion.section
            className="w-full space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
            exit={{ opacity: 0 }}
        >
            <Heading title="Skill Cloud" subtitle="What I work with" />
            <section className="w-full flex items-center space-x-6 flex-1 flex-wrap space-y-12 lg:space-x-2">
                {skills.map((skill, index) => (
                    <motion.section 
                        key={index}
                        className="hover:animate-bounce px-3 py-1 bg-gray-900 rounded-full flex items-center justify-center"
                    >
                        <p className="text-white text-base text-center font-semibold">
                            {skill}
                        </p>
                    </motion.section>
                ))}
            </section>
        </motion.section>
    )
}

export default SkillCloud;