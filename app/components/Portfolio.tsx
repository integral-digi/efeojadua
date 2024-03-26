"use client"
import Link from "next/link";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { projectData } from "./PortfolioData";
import ScrollButton from "./ScrollButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const pageInfo = {
    title: "Portfolio",
    subtitle: "Some of my recent projects",
    moreLink: "See all"
};

const samples = projectData.slice(0,4);

const Portfolio = () => {
    const router = useRouter();

    return (
        <motion.section 
            className="w-full space-y-6 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
            exit={{ opacity: 0 }}
        >
            <section className="flex justify-between items-end">
                <Heading 
                    title={pageInfo.title} 
                    subtitle={pageInfo.subtitle} 
                />
                <p 
                    className="text-right text-blue-500 text-xl font-bold cursor-pointer" 
                    onClick={()=>router.push("/portfolio")}
                >
                    {pageInfo.moreLink}
                </p>
            </section>
            <ScrollButton scrollAmount={400} classSelector=".portfolioTray" operator="-" />
            <ScrollButton scrollAmount={400} classSelector=".portfolioTray" operator="+" />
            <section className="portfolioTray overflow-x-scroll w-full flex items-center space-x-12 scrollbar-hide">
                {samples.map((entry) => (
                    <Link href={`/portfolio/${entry.id}`} as={`/portfolio/${entry.id}`} key={entry.id}>
                    <motion.section 
                        className="flex items-center justify-center relative"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 1 },
                          }}
                        whileTap={{ scale: 0.2 }}
                    >
                        <section className="opacity-20 bg-indigo-950 w-full h-full absolute top-0 left-0 hover:opacity-0" />
                        <section className="w-[480px] h-[576px]">
                            <Image 
                                src={entry.photo} 
                                alt={entry.name} 
                                width={480}
                                height={576}
                                className="w-full h-full object-cover" 
                            />
                            <section className="absolute bottom-8 left-8 z-20">
                                <section className="space-y-12">
                                    <section className="space-x-3 flex items-center">
                                        {entry.tags.map((tag, index) => (
                                            <section 
                                                key={index} 
                                                className="px-4 py-1 bg-white rounded-full flex items-center justify-center"
                                            >
                                                <p className="text-orange-950 text-base font-normal leading-loose">
                                                    {tag}
                                                </p>
                                            </section>
                                        ))}
                                    </section>
                                    <p className="text-white text-4xl font-extrabold leading-10">
                                        {entry.name}
                                    </p>
                                </section>
                            </section>
                        </section>
                    </motion.section>
                    </Link>
                ))}
            </section>
        </motion.section>
    )
}

export default Portfolio;