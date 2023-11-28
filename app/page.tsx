import Gradient from "@/public/assets/Gradient";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainNav, { navItems } from "./components/MainNav";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Reviews from "./components/Reviews";

const hamburgerIcon: string = "assets/hamburger.svg";

const Home = () => {
    return (
        <main className="px-36 bg-[#1A1A1A]">
            <div className="space-y-60 py-16">
                <div className="space-y-36">
                    <MainNav icon={hamburgerIcon} />
                    <Hero />
                </div>
                <About />
                <Showcase />
                <Portfolio />
                <Reviews />
                <Blog />
                <Footer />
            </div>
            <div className="absolute -top-96 right-0 animate-pulse z-10">
                <Gradient />
            </div>
        </main>
    )
}

export default Home;