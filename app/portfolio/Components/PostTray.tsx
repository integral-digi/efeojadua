"use client"
import { entries } from "@/app/Components/PortfolioData"
import { motion } from "framer-motion"

const PostTray = () => {
    return (
        <section className="">
            <section className="w-full grid items-center grid-cols-2 gap-6 lg:grid-cols-1">
                {entries.map((entry) => (
                    <motion.section 
                        key={entry.id} 
                        className={`relative ${entry.id === 0 && "grid-cols-1"}`}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.2 }}
                    >
                        <section className="bg-amber-700 opacity-90 w-full h-full absolute top-0 left-0 hover:opacity-0" />
                        <section className="w-full h-[640px] justify-center relative">
                            <img 
                                src={entry.photo} 
                                alt={entry.name} 
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
                ))}
            </section>
        </section>
    )
}

export default PostTray