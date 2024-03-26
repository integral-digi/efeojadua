import MainNav from "./components/MainNav";
import Gradient from "@/public/assets/Gradient";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Reviews from "./components/Reviews";
import SkillCloud from "./components/SkillCloud";
import CursorAnim from "./components/CursorAnim";
import { hamburgerIcon } from "./components/Menu";

const Home = () => {
    return (
        <main className="px-36 bg-gray-950 lg:px-8">
            <section className="space-y-60 py-16 lg:space-y-32" >
                <section className="space-y-36">
                    <MainNav icon={hamburgerIcon} />
                    <Hero />
                </section>
                <About />
                <SkillCloud />
                <Showcase />
                <Portfolio />
                <Reviews />
                <Blog />
                <Footer />
            </section>
            <section className="absolute -top-96 right-0 overflow-x-hidden animate-pulse z-10 lg:w-1/2">
                <Gradient />
            </section>
            <CursorAnim />
        </main>
    )
}

export default Home;