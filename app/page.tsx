"use client"
import { motion, spring } from "framer-motion";
import MainNav, { navItems } from "./components/MainNav";
import Gradient from "@/public/assets/Gradient";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Reviews from "./components/Reviews";
import SkillCloud from "./components/SkillCloud";

const hamburgerIcon: string = "assets/hamburger.svg";

const Home = () => {
    return (
        <main className="px-36 bg-[#1A1A1A]">
            <motion.div 
                className="space-y-60 py-16" 
                transition={{ type: "spring", bounce: 1 }}
            >
                <div className="space-y-36">
                    <MainNav icon={hamburgerIcon} />
                    <Hero />
                </div>
                <About />
                <SkillCloud />
                <Showcase />
                <Portfolio />
                <Reviews />
                <Blog />
                <Footer />
            </motion.div>
            <div className="absolute -top-96 right-0 animate-pulse z-10">
                <Gradient />
            </div>
        </main>
    )
}

export default Home;