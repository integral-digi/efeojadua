import About from "./components/About";
import Hero from "./components/Hero";
import MainNav from "./components/MainNav";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";

const Home = () => {
    return (
        <main className="px-24 bg-[#1A1A1A]">
            <div className="space-y-48 py-16">
                <MainNav />
                <Hero />
                <About />
                <Showcase />
                <Portfolio />
            </div>
        </main>
    )
}

export default Home;