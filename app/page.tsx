"use client"
import MainNav, { navItems } from "./Components/MainNav";
import Gradient from "@/public/assets/Gradient";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Showcase from "./Components/Showcase";
import Reviews from "./Components/Reviews";
import SkillCloud from "./Components/SkillCloud";
import CursorAnim from "./Components/CursorAnim";

export const hamburgerIcon: string = "assets/hamburger.svg";

const Home = () => {
    return (
        <main className="px-36 bg-gray-950 lg:px-8">
            <div className="space-y-60 py-16 lg:space-y-32" >
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
            </div>
            <div className="absolute -top-96 right-0 overflow-x-hidden animate-pulse z-10 lg:w-1/2">
                <Gradient />
            </div>
            <CursorAnim />
        </main>
    )
}

export default Home;