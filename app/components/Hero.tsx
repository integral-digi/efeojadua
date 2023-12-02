"use client"
import { useRouter } from "next/navigation";
import { motion , AnimatePresence } from "framer-motion";

interface HeroItemProps {
    photo: string;
    heading: string;
    headingTwo: string;
    subtitle: string;
    buttonText: string;
    linkText: string;
}

const heroItems: HeroItemProps = {
    photo: "/assets/efeimg.jpg",
    heading: "Crafting Digital Experiences with",
    headingTwo: "Passion & Precision",
    subtitle: "Hi, I’m Efe Ojadua - Senior Product Designer & Developer",
    buttonText: "Hire me",
    linkText: "Download CV"
}


const Hero = () => {
    const router = useRouter();

    return (
        <AnimatePresence>
            <motion.div 
                className="w-full space-y-9 relative"
                exit={{ x: "-100vh", opacity: 0 }}
            >
                <section className="w-36 h-36">
                    <img 
                        src={heroItems.photo} 
                        alt="efe ojadua" 
                        className="w-full h-full object-cover rounded-full" 
                    />
                </section>
                <section className="space-y-6">
                    <span className="space-y-6 lg:space-y-1">
                        <motion.h1 
                            className="text-6xl text-white font-black lg:text-4xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity:1 }}
                            transition={{ duration: 0.1, delay: 0.1,  }}
                        >
                            {heroItems.heading}
                        </motion.h1>
                        <motion.h1 
                            className="text-6xl text-slate-400 font-black lg:text-4xl"
                            initial={{ opacity: 0, translateX: "-200px" }}
                            animate={{ opacity:1, translateX: "0" }}
                            transition={{ duration: 1, delay: 1, ease: "linear" }}
                        >
                            {heroItems.headingTwo}
                        </motion.h1>
                    </span>
                    <p className="text-white text-2xl font-semibold lg:text-lg">
                        {heroItems.subtitle}
                    </p>
                </section>
                <section className="flex items-center space-x-6">
                    <motion.button 
                        className="hover:bg-indigo-700 hover:text-white flex items-center justify-center px-16 py-2 bg-white rounded-full text-zinc-900 font-bold"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 1, type: "spring", stiffness: 400, damping: 10  },
                          }}
                        whileTap={{ scale: 0.1 }}
                        onClick={()=>router.replace("https://fiverr.com/eze_trust")}
                    >
                        {heroItems.buttonText}
                    </motion.button>
                    <button className="flex items-center justify-center bg-transparent font-medium" onClick={() => router.push("/efe-ojadua-resume.pdf")}>
                        {heroItems.linkText}
                    </button>
                </section>
                <motion.section className="w-32 h-32 bg-transparent absolute -bottom-24 right-0 lg:-bottom-36 lg:hidden"
                    initial={{ 'rotate': '0deg' }}
                    animate={{ 'rotate': '360deg' }}
                    transition={{ duration: 15, repeat: Infinity }}
                >
                    <img 
                        src="/assets/work-badge.svg" 
                        alt="work badge" 
                        className="w-32 h-32" 
                    />
                </motion.section>
            </motion.div>
        </AnimatePresence>
    )
}

export default Hero;